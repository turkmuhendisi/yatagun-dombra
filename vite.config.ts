import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
            },
            output: {
                assetFileNames: 'assets/[name]-[hash].[ext]', // Hash ekleyerek cache busting
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
            },
        },
    }
});
