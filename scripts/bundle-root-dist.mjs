import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const componentsPackageJsonPath = path.resolve(rootDir, 'src/packages/components/package.json');
const componentsDist = path.resolve(rootDir, 'src/packages/components/dist');
const targetDist = path.resolve(rootDir, 'dist');

const packageName = '@app/oda-component';

const internalPackages = [
    { source: 'src/packages/core/dist', target: 'core' },
    { source: 'src/packages/icons/dist', target: 'icons' },
    { source: 'src/packages/styled/dist', target: 'styled' },
    { source: 'src/packages/style-tokens/dist', target: 'style-tokens' },
    { source: 'src/packages/theme-tokens/dist', target: 'theme-tokens' },
    { source: 'src/packages/utils/dist', target: '_utils' }
];

const importReplacements = [
    ['@primeuix/utils', `${packageName}/_utils`],
    ['@primeuix/styled', `${packageName}/styled`],
    ['@primeuix/style', `${packageName}/style-tokens`],
    ['@primeuix/themes', `${packageName}/theme-tokens`],
    ['@oda-components/utils', `${packageName}/_utils`],
    ['@oda-components/core', `${packageName}/core`],
    ['@oda-components/icons', `${packageName}/icons`],
    ['@oda-components/styled', `${packageName}/styled`],
    ['@oda-components/style-tokens', `${packageName}/style-tokens`],
    ['@oda-components/theme-tokens', `${packageName}/theme-tokens`]
];

const rewriteExtensions = new Set(['.js', '.mjs', '.cjs', '.vue', '.ts', '.d.ts', '.mts', '.d.mts', '.map', '.json']);

function assertExists(target, label) {
    if (!fs.existsSync(target)) {
        console.error(`${label} not found: ${target}`);
        process.exit(1);
    }
}

function copyInternalPackages() {
    for (const internalPackage of internalPackages) {
        const source = path.resolve(rootDir, internalPackage.source);
        const target = path.resolve(targetDist, internalPackage.target);

        assertExists(source, `Internal package dist (${internalPackage.target})`);
        fs.copySync(source, target);
    }
}

function shouldRewrite(filePath) {
    const parsed = path.parse(filePath);
    const fullExtension = filePath.endsWith('.d.ts') ? '.d.ts' : filePath.endsWith('.d.mts') ? '.d.mts' : parsed.ext;

    return rewriteExtensions.has(fullExtension);
}

function rewriteImportsInDist() {
    const files = [];
    const stack = [targetDist];

    while (stack.length) {
        const currentDir = stack.pop();

        for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
            const entryPath = path.resolve(currentDir, entry.name);

            if (entry.isDirectory()) {
                stack.push(entryPath);
            } else if (entry.isFile() && shouldRewrite(entryPath)) {
                files.push(entryPath);
            }
        }
    }

    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let nextContent = content;

        for (const [from, to] of importReplacements) {
            nextContent = nextContent.split(from).join(to);
        }

        if (nextContent !== content) {
            fs.writeFileSync(file, nextContent, 'utf8');
        }
    }
}

function copyUnifiedRootEntries() {
    const unifiedDir = path.resolve(targetDist, 'unified');

    fs.copySync(path.resolve(unifiedDir, 'index.mjs'), path.resolve(targetDist, 'index.mjs'));
    fs.copySync(path.resolve(unifiedDir, 'index.cjs'), path.resolve(targetDist, 'index.cjs'));

    if (fs.existsSync(path.resolve(unifiedDir, 'index.mjs.map'))) {
        fs.copySync(path.resolve(unifiedDir, 'index.mjs.map'), path.resolve(targetDist, 'index.mjs.map'));
    }

    if (fs.existsSync(path.resolve(unifiedDir, 'index.cjs.map'))) {
        fs.copySync(path.resolve(unifiedDir, 'index.cjs.map'), path.resolve(targetDist, 'index.cjs.map'));
    }
}

function createPublicExports() {
    const componentPackage = JSON.parse(fs.readFileSync(componentsPackageJsonPath, 'utf8'));
    const exportsMap = {
        '.': {
            types: './index.d.ts',
            import: './index.mjs',
            require: './index.cjs',
            default: './index.mjs'
        },
        './package.json': './package.json',
        './core': {
            types: './core/index.d.ts',
            import: './core/index.mjs',
            default: './core/index.mjs'
        },
        './core/*': {
            types: './core/*/index.d.ts',
            import: './core/*/index.mjs',
            default: './core/*/index.mjs'
        },
        './icons/*': {
            types: './icons/*/index.d.ts',
            import: './icons/*/index.mjs',
            default: './icons/*/index.mjs'
        },
        './styled': {
            types: './styled/index.d.mts',
            import: './styled/index.mjs',
            default: './styled/index.mjs'
        },
        './style-tokens/*': {
            import: './style-tokens/*/index.mjs',
            default: './style-tokens/*/index.mjs'
        },
        './theme-tokens': {
            types: './theme-tokens/index.d.mts',
            import: './theme-tokens/index.mjs',
            default: './theme-tokens/index.mjs'
        },
        './theme-tokens/*': {
            import: './theme-tokens/*/index.mjs',
            default: './theme-tokens/*/index.mjs'
        },
        './_utils': {
            types: './_utils/index.d.mts',
            import: './_utils/index.mjs',
            default: './_utils/index.mjs'
        },
        './_utils/*': {
            types: './_utils/*/index.d.mts',
            import: './_utils/*/index.mjs',
            default: './_utils/*/index.mjs'
        }
    };

    for (const [key, value] of Object.entries(componentPackage.exports || {})) {
        if (key === '.' || key === './*') {
            continue;
        }

        const outputPath = String(value)
            .replace(/^\.\/src\//, './')
            .replace(/\.(vue|js)$/i, '/index.mjs');
        const typePath = outputPath.replace(/\/index\.mjs$/, '/index.d.ts');

        exportsMap[key] = fs.existsSync(path.resolve(targetDist, typePath.replace(/^\.\//, '')))
            ? {
                  types: typePath,
                  import: outputPath,
                  default: outputPath
              }
            : {
                  import: outputPath,
                  default: outputPath
              };
    }

    return exportsMap;
}

function writePublishPackageJson() {
    const componentPackage = JSON.parse(fs.readFileSync(componentsPackageJsonPath, 'utf8'));
    const publishPackage = {
        name: packageName,
        version: componentPackage.version,
        type: 'module',
        private: false,
        description: componentPackage.description,
        keywords: componentPackage.keywords,
        sideEffects: componentPackage.sideEffects,
        main: './index.cjs',
        module: './index.mjs',
        types: './index.d.ts',
        exports: createPublicExports(),
        peerDependencies: componentPackage.peerDependencies,
        peerDependenciesMeta: componentPackage.peerDependenciesMeta,
        engines: componentPackage.engines,
        repository: componentPackage.repository,
        bugs: componentPackage.bugs
    };

    fs.writeFileSync(path.resolve(targetDist, 'package.json'), `${JSON.stringify(publishPackage, null, 4)}\n`, 'utf8');
}

assertExists(componentsDist, 'Components dist');

fs.removeSync(targetDist);
fs.copySync(componentsDist, targetDist);

copyInternalPackages();
copyUnifiedRootEntries();
rewriteImportsInDist();
writePublishPackageJson();

console.log(`Bundled publishable root dist: ${targetDist}`);
