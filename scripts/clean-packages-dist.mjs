import fs from 'node:fs';
import { basename, dirname, isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { moveRemove, rimraf } from 'rimraf';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const packagesDir = resolve(rootDir, 'src', 'packages');
const preservedPackages = new Set(['styled', 'style-tokens', 'theme-tokens', 'utils']);
const dryRun = process.argv.includes('--dry-run');
const removeDir = process.platform === 'win32' ? moveRemove : rimraf;

function isInside(parent, child) {
    const rel = relative(parent, child);

    return rel === '' || (!rel.startsWith('..') && !isAbsolute(rel));
}

function findDirsByName(startDir, dirName) {
    const matches = [];
    const stack = [startDir];

    while (stack.length > 0) {
        const currentDir = stack.pop();
        const entries = fs.readdirSync(currentDir, { withFileTypes: true });

        for (const entry of entries) {
            if (!entry.isDirectory()) {
                continue;
            }

            const fullPath = resolve(currentDir, entry.name);

            if (entry.name === dirName) {
                matches.push(fullPath);
            }

            stack.push(fullPath);
        }
    }

    return matches;
}

if (!fs.existsSync(packagesDir)) {
    console.log(`packages directory not found: ${packagesDir}`);
    process.exit(0);
}

const distDirs = findDirsByName(packagesDir, 'dist');

for (const distDir of distDirs) {
    if (!isInside(packagesDir, distDir)) {
        throw new Error(`Refusing to remove path outside packages directory: ${distDir}`);
    }

    const packageName = basename(dirname(distDir));

    if (preservedPackages.has(packageName)) {
        console.log(`skip ${distDir}`);
        continue;
    }

    if (dryRun) {
        console.log(`would remove ${distDir}`);
        continue;
    }

    await removeDir(distDir, { preserveRoot: true, maxRetries: 10, retryDelay: 300 });
    console.log(`removed ${distDir}`);
}

console.log('done');
