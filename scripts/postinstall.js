const path = require('node:path');
const fse = require('fs-extra');
const packageJson = require('../package.json');

const packageJsonPath = path.join(__dirname, '../package.json');
const packageName = 'vue-demi-sample';

async function switchVersion() {
	const vue = null;
	try {
		vue = require('vue');
	} catch (e) {
		console.log(`[${packageName}] not current Vue version, please use Vue2/3`);
		return;
	}
	const { version } = vue;

	if (typeof version !== 'string' || !(version.startsWith('2.') || version.startsWith('3.'))) {
		console.log(`[${ packageName }] not current Vue version, please use Vue2/3`);
		return;
	}

	const isVue2 = version.startsWith('2.');
	const isVue27 = version.startsWith('2.7.');

	const distDir = `dist/${isVue2 ? isVue27 ? 'v2.7' : 'v2' : 'v3'}`;

	const exportJson = {
		main: `${distDir}/${packageName}.umd.js`,
		module: `${distDir}/${packageName}.es.js`,
		types: `${distDir}/${packageName}.d.ts`,
		style: `${distDir}/style.css`,
		exports: {
			'.': {
				types: `./${distDir}/${packageName}.d.ts`,
				import: `./${distDir}/${packageName}.es.js`,
				require: `./${distDir}/${packageName}.cjs.js`,
			},
		},
	};

	const newPackageJson = Object.assign(packageJson, exportJson);

	fse.writeJsonSync(packageJsonPath, newPackageJson, { spaces: '\t' });

	console.log(`[${packageName}] Switch packageJson fields for Vue${version}`);
}

async function main() {
	await switchVersion();
}

main().catch((e) => {
	console.log(e);
});
