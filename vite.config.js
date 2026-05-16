import fs from 'node:fs';
import { basename, dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const componentsSrc = resolve(__dirname, 'src/packages/components/src');
const formsSrc = resolve(__dirname, 'src/packages/forms/src');

const packageRoots = {
    core: resolve(__dirname, 'src/packages/core'),
    icons: resolve(__dirname, 'src/packages/icons'),
    forms: resolve(__dirname, 'src/packages/forms'),
    styled: resolve(__dirname, 'src/packages/styled'),
    styleTokens: resolve(__dirname, 'src/packages/style-tokens'),
    themeTokens: resolve(__dirname, 'src/packages/theme-tokens'),
    utils: resolve(__dirname, 'src/packages/utils')
};

const packageCache = new Map();

function fileIfExists(filePath) {
    return fs.existsSync(filePath) ? filePath : null;
}

function readPackageJson(packageDir) {
    if (!packageCache.has(packageDir)) {
        packageCache.set(packageDir, JSON.parse(fs.readFileSync(resolve(packageDir, 'package.json'), 'utf8')));
    }

    return packageCache.get(packageDir);
}

function pickExportTarget(exportValue) {
    if (!exportValue) {
        return null;
    }

    if (typeof exportValue === 'string') {
        return exportValue;
    }

    return exportValue.import ?? exportValue.default ?? exportValue.module ?? exportValue.require ?? null;
}

function resolvePackageTarget(packageDir, exportValue, wildcardValue = '') {
    const target = pickExportTarget(exportValue);

    if (!target) {
        return null;
    }

    return fileIfExists(resolve(packageDir, target.replaceAll('*', wildcardValue)));
}

function resolvePackageExport(packageDir, subpath = '') {
    const pkg = readPackageJson(packageDir);
    const exportKey = subpath ? `./${subpath}` : '.';
    const exactExport = pkg.exports?.[exportKey];

    if (exactExport) {
        return resolvePackageTarget(packageDir, exactExport);
    }

    for (const [pattern, exportValue] of Object.entries(pkg.exports ?? {})) {
        if (!pattern.includes('*')) {
            continue;
        }

        const prefix = pattern.slice(0, pattern.indexOf('*'));
        const suffix = pattern.slice(pattern.indexOf('*') + 1);

        if (exportKey.startsWith(prefix) && exportKey.endsWith(suffix)) {
            const wildcardValue = exportKey.slice(prefix.length, exportKey.length - suffix.length);

            return resolvePackageTarget(packageDir, exportValue, wildcardValue);
        }
    }

    if (!subpath) {
        return fileIfExists(resolve(packageDir, pkg.module ?? pkg.main));
    }

    return null;
}

function resolveDirectoryEntry(folderPath, suffix = '') {
    if (!fs.existsSync(folderPath)) {
        return null;
    }

    const folderName = basename(folderPath);
    const expectedName = folderName === 'style' ? `${basename(dirname(folderPath))}Style` : `${folderName}${suffix}`;
    const target = fs.readdirSync(folderPath).find((fileName) => {
        const baseName = fileName.replace(/\.(vue|js)$/i, '').toLowerCase();

        return /\.(vue|js)$/i.test(fileName) && baseName === expectedName.toLowerCase();
    });

    return target ? resolve(folderPath, target) : null;
}

function resolveComponentSubpath(subpath) {
    if (subpath === 'passthrough') {
        return fileIfExists(resolve(componentsSrc, 'passthrough/index.js'));
    }

    const [folderName, nestedName] = subpath.split('/');

    if (!folderName || subpath.split('/').length > 2) {
        return null;
    }

    if (nestedName === 'style') {
        return resolveDirectoryEntry(resolve(componentsSrc, folderName, 'style'));
    }

    if (!nestedName) {
        return resolveDirectoryEntry(resolve(componentsSrc, folderName));
    }

    return null;
}

function resolveAppPackage(source) {
    if (source === '@app/oda-component') {
        return fileIfExists(resolve(__dirname, 'src/index.js'));
    }

    if (!source.startsWith('@app/oda-component/')) {
        return null;
    }

    const subpath = source.slice('@app/oda-component/'.length);
    const packageMappings = [
        ['core', packageRoots.core],
        ['icons', packageRoots.icons],
        ['forms', packageRoots.forms],
        ['styled', packageRoots.styled],
        ['style-tokens', packageRoots.styleTokens],
        ['theme-tokens', packageRoots.themeTokens],
        ['utils', packageRoots.utils]
    ];

    for (const [prefix, packageDir] of packageMappings) {
        if (subpath === prefix || subpath.startsWith(`${prefix}/`)) {
            return resolvePackageExport(packageDir, subpath === prefix ? '' : subpath.slice(prefix.length + 1));
        }
    }

    return resolveComponentSubpath(subpath);
}

function resolveOdaInternalPackage(source) {
    const packageMappings = [
        ['@oda-components/core', packageRoots.core],
        ['@oda-components/icons', packageRoots.icons],
        ['@oda-components/forms', packageRoots.forms],
        ['@oda-components/styled', packageRoots.styled],
        ['@oda-components/style-tokens', packageRoots.styleTokens],
        ['@oda-components/theme-tokens', packageRoots.themeTokens],
        ['@oda-components/utils', packageRoots.utils]
    ];

    for (const [packageName, packageDir] of packageMappings) {
        if (source === packageName || source.startsWith(`${packageName}/`)) {
            return resolvePackageExport(packageDir, source === packageName ? '' : source.slice(packageName.length + 1));
        }
    }

    return null;
}

function resolveLegacyPrimeuixPackage(source) {
    const legacyMappings = [
        ['@primeuix/utils', '@oda-components/utils'],
        ['@primeuix/styled', '@oda-components/styled'],
        ['@primeuix/style', '@oda-components/style-tokens'],
        ['@primeuix/styles', '@oda-components/style-tokens'],
        ['@primeuix/themes', '@oda-components/theme-tokens']
    ];

    for (const [legacyName, packageName] of legacyMappings) {
        if (source === legacyName || source.startsWith(`${legacyName}/`)) {
            return resolveOdaInternalPackage(source.replace(legacyName, packageName));
        }
    }

    return null;
}

function odaComponentResolver() {
    return {
        name: 'oda-component-root-resolver',
        enforce: 'pre',
        resolveId(source) {
            return resolveAppPackage(source) ?? resolveOdaInternalPackage(source) ?? resolveLegacyPrimeuixPackage(source) ?? null;
        }
    };
}

function addComponentEntries(entries) {
    entries.index = resolve(__dirname, 'src/index.js');
    entries['passthrough/index'] = resolve(componentsSrc, 'passthrough/index.js');

    for (const entry of fs.readdirSync(componentsSrc, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            continue;
        }

        const componentEntry = resolveDirectoryEntry(resolve(componentsSrc, entry.name));

        if (componentEntry) {
            entries[`${entry.name}/index`] = componentEntry;
        }

        const styleEntry = resolveDirectoryEntry(resolve(componentsSrc, entry.name, 'style'));

        if (styleEntry) {
            entries[`${entry.name}/style/index`] = styleEntry;
        }
    }
}

function addPackageExportEntries(entries, packageDir, outputPrefix) {
    const pkg = readPackageJson(packageDir);
    const rootEntry = resolvePackageExport(packageDir);

    if (rootEntry) {
        entries[`${outputPrefix}/index`] = rootEntry;
    }

    for (const [exportKey, exportValue] of Object.entries(pkg.exports ?? {})) {
        if (exportKey === '.' || exportKey.includes('*')) {
            continue;
        }

        const outputPath = exportKey.replace(/^\.\//, '');
        const resolvedEntry = resolvePackageTarget(packageDir, exportValue);

        if (resolvedEntry) {
            entries[`${outputPrefix}/${outputPath}/index`] = resolvedEntry;
        }
    }
}

function addDistIndexEntries(entries, distDir, outputPrefix) {
    if (!fs.existsSync(distDir)) {
        return;
    }

    const stack = [distDir];

    while (stack.length) {
        const currentDir = stack.pop();
        const indexEntry = fileIfExists(resolve(currentDir, 'index.mjs'));

        if (indexEntry) {
            const relativeDir = relative(distDir, currentDir).replaceAll('\\', '/');
            const outputPath = relativeDir ? `${outputPrefix}/${relativeDir}/index` : `${outputPrefix}/index`;

            entries[outputPath] = indexEntry;
        }

        for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
            if (entry.isDirectory()) {
                stack.push(resolve(currentDir, entry.name));
            }
        }
    }
}

function addFormEntries(entries) {
    entries['forms/index'] = resolve(formsSrc, 'index.js');

    for (const folderName of ['form', 'formfield']) {
        const formEntry = resolveDirectoryEntry(resolve(formsSrc, folderName));

        if (formEntry) {
            entries[`forms/${folderName}/index`] = formEntry;
        }

        const styleEntry = resolveDirectoryEntry(resolve(formsSrc, folderName, 'style'));

        if (styleEntry) {
            entries[`forms/${folderName}/style/index`] = styleEntry;
        }
    }
}

function createLibraryEntries() {
    const entries = {};

    addComponentEntries(entries);
    addFormEntries(entries);
    addPackageExportEntries(entries, packageRoots.core, 'core');
    addPackageExportEntries(entries, packageRoots.icons, 'icons');
    addPackageExportEntries(entries, packageRoots.styled, 'styled');
    addPackageExportEntries(entries, packageRoots.styleTokens, 'style-tokens');
    addPackageExportEntries(entries, packageRoots.themeTokens, 'theme-tokens');
    addPackageExportEntries(entries, packageRoots.utils, 'utils');

    return entries;
}

export default defineConfig({
    plugins: [odaComponentResolver(), vue()],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
        cssCodeSplit: false,
        lib: {
            entry: createLibraryEntries(),
            name: '@app/oda-component',
            fileName: '[name]',
            formats: ['cjs', 'es']
        },
        rollupOptions: {
            external: ['vue', 'chart.js/auto', 'quill'],
            onwarn(warning, warn) {
                if (warning.code === 'CIRCULAR_DEPENDENCY') {
                    return;
                }

                warn(warning);
            },
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                    'chart.js/auto': 'Chart',
                    quill: 'Quill'
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
});
