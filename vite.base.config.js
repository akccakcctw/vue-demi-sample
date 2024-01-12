import { fileURLToPath, URL } from 'node:url'
import * as path from 'node:path'
import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { isVue2 } from 'vue-demi'

export const getSharedPlugins = (vueVersion) => {
	return [
		libInjectCss(),
		DefineOptions(),
	];
};

// https://vitejs.dev/config/
export const baseBuildConfig = defineConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		outDir: path.resolve(__dirname, `./dist/${isVue2 ? 'v2' : 'v3'}`),
		copyPublicDir: false,
		emptyOutDir: false,
		lib: {
			entry: path.resolve(__dirname, 'src/components/index.js'),
			formats: ['es', 'cjs', 'umd'],
			name: 'VueDemiSample',
			fileName: format => `vue-demi-sample.${format}.js`,
		},
		rollupOptions: {
			external: ['vue', '@vue/composition-api/dist/vue-composition-api.mjs'],
			output: {
				globals: {
					'vue': 'Vue',
					'@vue/composition-api/dist/vue-composition-api.mjs':
						'VueCompositionAPI',
				},
			},
		},
	},
	optimizeDeps: {
		exclude: ['vue-demi', 'vue', 'vue2', 'vue2.7', 'vue3'],
	},
});
