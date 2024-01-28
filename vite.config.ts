import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			store: '/src/store',
			hooks: '/src/hooks',
			pages: '/src/pages',
			components: '/src/components',
			utils: '/src/utils',
			types: '/src/types',
			assets: '/src/assets',
		},
	},
})
