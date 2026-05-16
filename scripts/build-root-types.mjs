import fs from 'node:fs';
import { basename, dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(rootDir, 'dist');
const componentsSrc = resolve(rootDir, 'src/packages/components/src');
const formsSrc = resolve(rootDir, 'src/packages/forms/src');

const packageRoots = {
    core: resolve(rootDir, 'src/packages/core'),
    icons: resolve(rootDir, 'src/packages/icons'),
    forms: resolve(rootDir, 'src/packages/forms'),
    styled: resolve(rootDir, 'src/packages/styled'),
    styleTokens: resolve(rootDir, 'src/packages/style-tokens'),
    themeTokens: resolve(rootDir, 'src/packages/theme-tokens'),
    utils: resolve(rootDir, 'src/packages/utils')
};

const packageCache = new Map();

const importReplacements = [
    ['@@app/oda-component', '@app/oda-component'],
    ['@primeuix/utils', '@app/oda-component/_utils'],
    ['@primeuix/styled', '@app/oda-component/styled'],
    ['@primeuix/style', '@app/oda-component/style-tokens'],
    ['@primeuix/styles', '@app/oda-component/style-tokens'],
    ['@primeuix/themes', '@app/oda-component/theme-tokens'],
    ['@oda-components/utils', '@app/oda-component/_utils'],
    ['@oda-components/core', '@app/oda-component/core'],
    ['@oda-components/icons', '@app/oda-component/icons'],
    ['@oda-components/forms', '@app/oda-component/forms'],
    ['@oda-components/styled', '@app/oda-component/styled'],
    ['@oda-components/style-tokens', '@app/oda-component/style-tokens'],
    ['@oda-components/theme-tokens', '@app/oda-component/theme-tokens']
];

function fileIfExists(filePath) {
    return fs.existsSync(filePath) ? filePath : null;
}

function ensureDir(filePath) {
    fs.mkdirSync(dirname(filePath), { recursive: true });
}

function readPackageJson(packageDir) {
    if (!packageCache.has(packageDir)) {
        packageCache.set(packageDir, JSON.parse(fs.readFileSync(resolve(packageDir, 'package.json'), 'utf8')));
    }

    return packageCache.get(packageDir);
}

function rewriteImports(content) {
    let nextContent = content;

    for (const [from, to] of importReplacements) {
        nextContent = nextContent.split(from).join(to);
    }

    return nextContent;
}

function copyType(source, target, options = {}) {
    if (!source || !fs.existsSync(source)) {
        return false;
    }

    ensureDir(target);

    let content = rewriteImports(fs.readFileSync(source, 'utf8'));

    if (options.addAnyDefault && !/\bexport\s+default\b/.test(content)) {
        content += '\n\ndeclare const _default: any;\nexport default _default;\n';
    }

    fs.writeFileSync(target, content, 'utf8');

    return true;
}

function pickExportTarget(exportValue) {
    if (!exportValue) {
        return null;
    }

    if (typeof exportValue === 'string') {
        return exportValue;
    }

    return exportValue.types ?? exportValue.import ?? exportValue.default ?? exportValue.module ?? exportValue.require ?? null;
}

function toTypeTarget(target) {
    if (!target) {
        return null;
    }

    if (target.endsWith('.d.ts') || target.endsWith('.d.mts')) {
        return target;
    }

    return target.replace(/\.(vue|js|mjs|cjs)$/i, '.d.ts');
}

function resolvePackageTarget(packageDir, exportValue, wildcardValue = '') {
    const target = toTypeTarget(pickExportTarget(exportValue));

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
        return fileIfExists(resolve(packageDir, toTypeTarget(pkg.types ?? pkg.module ?? pkg.main)));
    }

    return null;
}

function resolveDirectoryType(folderPath, suffix = '') {
    if (!fs.existsSync(folderPath)) {
        return null;
    }

    const folderName = basename(folderPath);
    const expectedName = folderName === 'style' ? `${basename(dirname(folderPath))}Style` : `${folderName}${suffix}`;
    const target = fs.readdirSync(folderPath).find((fileName) => {
        const baseName = fileName.replace(/\.d\.ts$/i, '').toLowerCase();

        return /\.d\.ts$/i.test(fileName) && baseName === expectedName.toLowerCase();
    });

    return target ? resolve(folderPath, target) : null;
}

function addIndexExport(lines, packageSubpath, exportName, hasDefault = true) {
    lines.push(`export * from '@app/oda-component/${packageSubpath}';`);

    if (hasDefault) {
        lines.push(`export { default as ${exportName} } from '@app/oda-component/${packageSubpath}';`);
    }
}

function copyComponentTypes(indexLines) {
    copyType(resolve(componentsSrc, 'passthrough/index.d.ts'), resolve(distDir, 'passthrough/index.d.ts'));

    for (const entry of fs.readdirSync(componentsSrc, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            continue;
        }

        const componentType = resolveDirectoryType(resolve(componentsSrc, entry.name));

        if (componentType) {
            const exportName = basename(componentType, '.d.ts');

            copyType(componentType, resolve(distDir, entry.name, 'index.d.ts'));
            addIndexExport(indexLines, entry.name, exportName);
        }

        const styleType = resolveDirectoryType(resolve(componentsSrc, entry.name, 'style'));

        if (styleType) {
            const exportName = basename(styleType, '.d.ts');

            copyType(styleType, resolve(distDir, entry.name, 'style/index.d.ts'), { addAnyDefault: true });
            addIndexExport(indexLines, `${entry.name}/style`, exportName);
        }
    }
}

function copyFormTypes(indexLines) {
    copyType(resolve(formsSrc, 'index.d.ts'), resolve(distDir, 'forms/index.d.ts'));

    for (const folderName of ['form', 'formfield']) {
        const formType = resolveDirectoryType(resolve(formsSrc, folderName));

        if (formType) {
            const exportName = basename(formType, '.d.ts');

            copyType(formType, resolve(distDir, 'forms', folderName, 'index.d.ts'));
            addIndexExport(indexLines, `forms/${folderName}`, exportName);
        }

        const styleType = resolveDirectoryType(resolve(formsSrc, folderName, 'style'));

        if (styleType) {
            const exportName = basename(styleType, '.d.ts');

            copyType(styleType, resolve(distDir, 'forms', folderName, 'style/index.d.ts'), { addAnyDefault: true });
            addIndexExport(indexLines, `forms/${folderName}/style`, exportName);
        }
    }
}

function copyPackageExportTypes(packageDir, outputPrefix) {
    const rootType = resolvePackageExport(packageDir);

    if (rootType) {
        copyType(rootType, resolve(distDir, outputPrefix, 'index.d.ts'));
    }

    const pkg = readPackageJson(packageDir);

    for (const [exportKey, exportValue] of Object.entries(pkg.exports ?? {})) {
        if (exportKey === '.' || exportKey.includes('*')) {
            continue;
        }

        const outputPath = exportKey.replace(/^\.\//, '');
        const sourceType = resolvePackageTarget(packageDir, exportValue);

        if (sourceType) {
            copyType(sourceType, resolve(distDir, outputPrefix, outputPath, 'index.d.ts'));
        }
    }
}

function copyDistTypes(distRoot, outputPrefix, options = {}) {
    if (!fs.existsSync(distRoot)) {
        return;
    }

    const stack = [distRoot];

    while (stack.length) {
        const currentDir = stack.pop();
        const sourceType =
            fileIfExists(resolve(currentDir, 'index.d.ts')) ??
            fileIfExists(resolve(currentDir, 'index.d.mts')) ??
            (options.genericType ? fileIfExists(resolve(distRoot, options.genericType)) : null);

        if (sourceType) {
            const relativeDir = relative(distRoot, currentDir).replaceAll('\\', '/');
            const targetType = relativeDir ? resolve(distDir, outputPrefix, relativeDir, 'index.d.ts') : resolve(distDir, outputPrefix, 'index.d.ts');

            copyType(sourceType, targetType);
        }

        for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
            if (entry.isDirectory()) {
                stack.push(resolve(currentDir, entry.name));
            }
        }
    }
}

const indexLines = [
    '/***************** OdaComponents (Auto-Generated) *****************/',
    '',
    "export * from '@app/oda-component/core';",
    "export * from '@app/oda-component/styled';",
    "export { default as BaseIcon } from '@app/oda-component/icons/baseicon';",
    "export { default as BaseIconStyle } from '@app/oda-component/icons/baseicon/style';",
    "export * from '@app/oda-component/passthrough';",
    ''
];

copyComponentTypes(indexLines);
copyFormTypes(indexLines);
copyPackageExportTypes(packageRoots.core, 'core');
copyPackageExportTypes(packageRoots.icons, 'icons');
copyPackageExportTypes(packageRoots.styled, 'styled');
copyPackageExportTypes(packageRoots.styleTokens, 'style-tokens');
copyPackageExportTypes(packageRoots.themeTokens, 'theme-tokens');
copyPackageExportTypes(packageRoots.utils, 'utils');

fs.writeFileSync(resolve(distDir, 'index.d.ts'), `${indexLines.join('\n')}\n`, 'utf8');
