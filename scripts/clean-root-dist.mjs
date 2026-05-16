import fs from 'node:fs';
import { dirname, isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { moveRemove, rimraf } from 'rimraf';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(rootDir, 'dist');
const dryRun = process.argv.includes('--dry-run');
const removeDir = process.platform === 'win32' ? moveRemove : rimraf;

function isInside(parent, child) {
    const rel = relative(parent, child);

    return rel === '' || (!rel.startsWith('..') && !isAbsolute(rel));
}

if (!isInside(rootDir, distDir)) {
    throw new Error(`Refusing to remove path outside workspace: ${distDir}`);
}

if (dryRun) {
    console.log(`would remove ${distDir}`);
    process.exit(0);
}

let lastError;

for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
        await removeDir(distDir, { preserveRoot: true, maxRetries: 10, retryDelay: 300 });

        if (!fs.existsSync(distDir)) {
            lastError = undefined;
            break;
        }
    } catch (error) {
        lastError = error;
    }

    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 250);
}

if (lastError || fs.existsSync(distDir)) {
    throw lastError ?? new Error(`Failed to remove ${distDir}`);
}
