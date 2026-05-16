import fs from 'node:fs';
import { dirname, isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { moveRemove, rimraf } from 'rimraf';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const packagesDir = resolve(rootDir, 'src', 'packages');
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

const nodeModulesDirs = findDirsByName(packagesDir, 'node_modules').sort((left, right) => right.length - left.length);

if (nodeModulesDirs.length === 0) {
    console.log('no node_modules directories found under packages');
    process.exit(0);
}

let hasFailure = false;

for (const nodeModulesDir of nodeModulesDirs) {
    if (!isInside(packagesDir, nodeModulesDir)) {
        throw new Error(`Refusing to remove path outside packages directory: ${nodeModulesDir}`);
    }

    try {
        if (dryRun) {
            console.log(`would remove ${nodeModulesDir}`);
            continue;
        }

        await removeDir(nodeModulesDir, { preserveRoot: true, maxRetries: 10, retryDelay: 300 });
        console.log(`removed ${nodeModulesDir}`);
    } catch (error) {
        hasFailure = true;
        console.warn(`failed to remove ${nodeModulesDir}: ${error.message}`);
    }
}

if (hasFailure) {
    process.exit(1);
}

console.log('done');
