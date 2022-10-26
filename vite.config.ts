
import { defineConfig, type UserConfig } from 'vite';
import { svelte } from  '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path'

const config: UserConfig = <UserConfig>defineConfig({
	plugins: [
		svelte({
			emitCss: true,
			preprocess: sveltePreprocess(),
			compilerOptions: {
				dev: false
			}
		})
	],
	resolve: {
		alias: {
			'~bootstrap': path.resolve(__dirname, "node_modules/bootstra")
		}
	},
	server: {
		host: 'localhost',
		port: 5000
	}
})

export default config;
