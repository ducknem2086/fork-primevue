import fs from 'fs-extra';
import path from 'path';
import { clearPackageJson, copyDependencies, renameDTSFile, resolvePath } from '../../../../scripts/build-helper.mjs';

const { __dirname, __workspace, INPUT_DIR, OUTPUT_DIR } = resolvePath(import.meta.url);
const distPackageJson = path.resolve(__dirname, `../${OUTPUT_DIR}/package.json`);

function updateUnifiedPackageJson(localPackageJson) {
    const pkg = JSON.parse(fs.readFileSync(localPackageJson, { encoding: 'utf8', flag: 'r' }));

    pkg.main = './unified/index.cjs';
    pkg.module = './unified/index.mjs';
    pkg.types = './index.d.ts';
    pkg.exports = {
        '.': {
            types: './index.d.ts',
            import: './unified/index.mjs',
            require: './unified/index.cjs',
            default: './unified/index.mjs'
        },
        './*': {
            types: './*/index.d.ts',
            import: './*/index.mjs',
            default: './*/index.mjs'
        }
    };

    delete pkg.publishConfig;

    fs.writeFileSync(localPackageJson, JSON.stringify(pkg, null, 4) + '\n', { encoding: 'utf8' });
}

copyDependencies(INPUT_DIR, OUTPUT_DIR, '/style');
renameDTSFile(OUTPUT_DIR, 'index');

fs.copySync(path.resolve(__dirname, '../package.json'), `${OUTPUT_DIR}/package.json`);
fs.copySync(path.resolve(__dirname, '../README.md'), `${OUTPUT_DIR}/README.md`);
fs.copySync(path.resolve(__workspace, './LICENSE.md'), `${OUTPUT_DIR}/LICENSE.md`);

clearPackageJson(distPackageJson);
updateUnifiedPackageJson(distPackageJson);
