import fs from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = resolve(__dirname, '../..');

const coreAliases = new Map<string, string>([
    ['@oda-components/core/api', resolve(__dirname, '../core/src/api/Api.js')],
    ['@oda-components/core/base/style', resolve(__dirname, '../core/src/base/style/BaseStyle.js')],
    ['@oda-components/core/base', resolve(__dirname, '../core/src/base/Base.js')],
    ['@oda-components/core/basecomponent/style', resolve(__dirname, '../core/src/basecomponent/style/BaseComponentStyle.js')],
    ['@oda-components/core/basecomponent', resolve(__dirname, '../core/src/basecomponent/BaseComponent.vue')],
    ['@oda-components/core/basedirective', resolve(__dirname, '../core/src/basedirective/BaseDirective.js')],
    ['@oda-components/core/baseeditableholder', resolve(__dirname, '../core/src/baseeditableholder/BaseEditableHolder.vue')],
    ['@oda-components/core/baseinput', resolve(__dirname, '../core/src/baseinput/BaseInput.vue')],
    ['@oda-components/core/config', resolve(__dirname, '../core/src/config/OdaComponents.js')],
    ['@oda-components/core/service', resolve(__dirname, '../core/src/service/OdaComponentsService.js')],
    ['@oda-components/core/useattrselector', resolve(__dirname, '../core/src/useattrselector/UseAttrSelector.js')],
    ['@oda-components/core/useid', resolve(__dirname, '../core/src/useid/UseId.js')],
    ['@oda-components/core/usestyle', resolve(__dirname, '../core/src/usestyle/UseStyle.js')],
    ['@oda-components/core/utils', resolve(__dirname, '../core/src/utils/Utils.js')],
    ['@oda-components/core', resolve(__dirname, '../core/src/index.js')]
]);

const localDistPackages = new Map<string, string>([
    ['@oda-components/styled', resolve(workspaceRoot, 'packages/styled/dist')],
    ['@oda-components/utils', resolve(workspaceRoot, 'packages/utils/dist')],
    ['@oda-components/style-tokens', resolve(workspaceRoot, 'packages/style-tokens/dist')],
    ['@oda-components/theme-tokens', resolve(workspaceRoot, 'packages/theme-tokens/dist')]
]);

function fileIfExists(filePath: string): string | null {
    return fs.existsSync(filePath) ? filePath : null;
}

function resolveDistPackage(source: string): string | null {
    for (const [packageName, distRoot] of localDistPackages) {
        if (source === packageName) {
            return fileIfExists(resolve(distRoot, 'index.mjs'));
        }

        if (source.startsWith(`${packageName}/`)) {
            const subpath = source.slice(packageName.length + 1);

            return fileIfExists(resolve(distRoot, subpath, 'index.mjs'));
        }
    }

    return null;
}

function resolveDirectoryEntry(folderPath: string, suffix = ''): string | null {
    if (!fs.existsSync(folderPath)) {
        return null;
    }

    const folderName = folderPath.split(/[\\/]/).pop() ?? '';
    const expectedName = folderName === 'style' ? `${folderPath.split(/[\\/]/).slice(-2, -1)[0]}Style` : `${folderName}${suffix}`;
    const target = fs.readdirSync(folderPath).find((fileName) => {
        const baseName = fileName.replace(/\.(vue|js)$/i, '').toLowerCase();

        return /\.(vue|js)$/i.test(fileName) && baseName === expectedName.toLowerCase();
    });

    return target ? resolve(folderPath, target) : null;
}

function resolveIcon(source: string): string | null {
    const subpath = source.slice('@oda-components/icons/'.length);

    if (subpath === 'baseicon/style') {
        return resolve(__dirname, '../icons/src/baseicon/style/BaseIconStyle.js');
    }

    if (subpath === 'baseicon') {
        return resolve(__dirname, '../icons/src/baseicon/BaseIcon.vue');
    }

    return resolveDirectoryEntry(resolve(__dirname, '../icons/src', subpath), 'Icon');
}

function odaComponentsBundleResolver(): Plugin {
    return {
        name: 'oda-components-bundle-resolver',
        enforce: 'pre',
        resolveId(source) {
            const coreMatch = coreAliases.get(source);

            if (coreMatch) {
                return coreMatch;
            }

            if (source.startsWith('@oda-components/icons/')) {
                return resolveIcon(source);
            }

            const distMatch = resolveDistPackage(source);

            if (distMatch) {
                return distMatch;
            }

            return null;
        }
    };
}

export default defineConfig({
    plugins: [odaComponentsBundleResolver(), vue()],
    build: {
        outDir: 'dist/unified',
        emptyOutDir: true,
        sourcemap: true,
        cssCodeSplit: false,
        lib: {
            entry: resolve(__dirname, 'src/umd/OdaComponents.js'),
            name: 'OdaComponents',
            fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
            formats: ['es', 'cjs']
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
                inlineDynamicImports: true,
                manualChunks: undefined,
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
