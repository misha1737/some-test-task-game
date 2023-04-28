import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
		port: 8088,
	},
	css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/base.scss";`,
      },
    },
  },
})
