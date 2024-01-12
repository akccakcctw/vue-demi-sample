const path = require('node:path');
const fse = require('fs-extra');
const packageJson = require('../package.json');

const packageJsonPath = path.join(__dirname, '../package.json');
const packageName = 'vue-demi-sample';

async function switchVersion() {
	let vue;
	try {
		vue = require('vue');
	} catch (e) {
		console.log(`[${packageName}] Vue is not installed. Please use Vue 2 or Vue 3.`);
		return;
	}
	const { version } = vue;

	if (typeof version !== 'string' || !(version.startsWith('2.') || version.startsWith('3.'))) {
		console.log(`[${packageName}] Unsupported Vue version, please use Vue 2 or Vue 3.`);
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

	const newPackageJson = {
		...packageJson,
		...exportJson,
	};

	fse.writeJsonSync(packageJsonPath, newPackageJson, { spaces: 2 });

	console.log(`[${packageName}] Package.json fields updated for Vue ${version}`);
}

async function main() {
	try {
		await switchVersion();
	} catch (e) {
		console.error(`[${packageName}] Error:`, e);
	}
}

main();
