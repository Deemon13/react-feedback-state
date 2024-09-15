import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'react-feedback-state',
	plugins: [react()],
	build: {
		sourcemap: true,
	},
	server: {
		open: true,
	},
});
