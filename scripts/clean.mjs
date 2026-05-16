import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2).filter((arg) => arg !== '--');
const includeNodeModules = args.includes('--with-node-modules');
const normalizedArgs = args.filter((arg) => arg !== '--with-node-modules');
const cleanScripts = ['clean-root-dist.mjs', 'clean-packages-dist.mjs'];

if (includeNodeModules) {
    cleanScripts.push('clean-packages-node-modules.mjs');
}

for (const script of cleanScripts) {
    const result = spawnSync(process.execPath, [resolve(scriptsDir, script), ...normalizedArgs], {
        stdio: 'inherit',
        windowsHide: true
    });

    if (result.error) {
        throw result.error;
    }

    if (result.status !== 0) {
        process.exit(result.status ?? 1);
    }
}
