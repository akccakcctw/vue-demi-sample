import * as path from 'node:path';
import { defineConfig } from 'vite';
import vue3 from '@vitejs/plugin-vue';
import {
	baseBuildConfig,
	getSharedPlugins,
} from '../../vite.base.config';

export const viteVue3Config = defineConfig({
	plugins: [
		vue3(),
		...getSharedPlugins('v3'),
	],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'vue': path.resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm-browser.js'),
			'vue-demi': path.resolve(__dirname, '../../node_modules/vue-demi/lib/v3/index.mjs'),
		},
	},
	...baseBuildConfig,
});

export default viteVue3Config;
