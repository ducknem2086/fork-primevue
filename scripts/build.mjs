import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const packageJsonPath = resolve(rootDir, 'package.json');
const args = process.argv.slice(2).filter((arg) => arg !== '--');
const setVersionMode = args.includes('--set-version');

function readPackageJson() {
    return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
}

function writePackageJson(pkg) {
    fs.writeFileSync(packageJsonPath, `${JSON.stringify(pkg, null, 4)}\n`, 'utf8');
}

function assertSemver(version) {
    const semverPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;

    if (!semverPattern.test(version)) {
        throw new Error(`Invalid version "${version}". Expected semver format like 1.0.1.`);
    }
}

function bumpPatch(version) {
    const match = version.match(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/);

    if (!match) {
        throw new Error(`Cannot auto bump non-standard version "${version}". Use build:version instead.`);
    }

    return `${match[1]}.${match[2]}.${Number(match[3]) + 1}`;
}

function getTargetVersion() {
    const explicitArg = args.find((arg) => arg.startsWith('--version='));

    if (explicitArg) {
        return explicitArg.slice('--version='.length);
    }

    return args.find((arg) => arg !== '--set-version' && !arg.startsWith('--'));
}

function runBuildRoot() {
    const npmExecPath = process.env.npm_execpath;
    const shouldRunWithNode = npmExecPath && /\.(?:c?m?js)$/i.test(npmExecPath);
    const command = shouldRunWithNode ? process.execPath : npmExecPath || 'pnpm';
    const commandArgs = shouldRunWithNode ? [npmExecPath, 'run', 'build:root'] : ['run', 'build:root'];
    const result = spawnSync(command, commandArgs, {
        cwd: rootDir,
        stdio: 'inherit',
        windowsHide: true,
        shell: !shouldRunWithNode && process.platform === 'win32'
    });

    if (result.error) {
        throw result.error;
    }

    return result.status ?? 1;
}

const originalPackage = readPackageJson();

if (setVersionMode) {
    const targetVersion = getTargetVersion();

    if (!targetVersion) {
        throw new Error('Missing target version. Use: npm run build:version -- 1.0.1');
    }

    assertSemver(targetVersion);

    writePackageJson({ ...originalPackage, version: targetVersion });

    const status = runBuildRoot();

    if (status !== 0) {
        writePackageJson(originalPackage);
        process.exit(status);
    }

    process.exit(0);
}

const status = runBuildRoot();

if (status !== 0) {
    process.exit(status);
}

const currentPackage = readPackageJson();
const nextVersion = bumpPatch(currentPackage.version);

writePackageJson({ ...currentPackage, version: nextVersion });
console.log(`version bumped: ${currentPackage.version} -> ${nextVersion}`);
