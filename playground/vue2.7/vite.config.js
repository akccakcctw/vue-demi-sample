import * as path from 'node:path';
import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import {
	baseBuildConfig,
	getSharedPlugins,
} from '../../vite.base.config';

export const viteVue2Config = defineConfig({
	plugins: [
		vue2(),
		...getSharedPlugins('v2.7'),
	],
	server: {
		port: 2700,
	},
	resolve: {
		alias: {
			'vue': path.resolve(__dirname, './node_modules/vue/dist/vue.esm.browser.js'),
			'vue-demi': path.resolve(__dirname, '../../node_modules/vue-demi/lib/v2.7/index.mjs'),
		},
	},
	...baseBuildConfig,
	build: {
		...baseBuildConfig.build,
		outDir: path.resolve(__dirname, `../../dist/v2.7`),
	},
});

export default viteVue2Config;
