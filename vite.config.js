import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from '@vitejs/plugin-vue-jsx';

// Kiểm tra chế độ môi trường
const isProduction = process.env.BUILD_MODE === 'production';

// Xác định target dựa trên chế độ
const apiTarget = isProduction ? 'https://luanvan-1-kmlh.onrender.com' : 'http://localhost:3000';

// In ra giá trị của apiTarget
console.log('API Target:', apiTarget);

export default defineConfig({
    define: {
        'process.env.API_TARGET': JSON.stringify(apiTarget), // Truyền API Target vào môi trường
    },
    base: isProduction ? './' : '/', // Thay đổi base cho môi trường sản xuất
    plugins: [
        vue(),
        vueJsx(),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false,
                }),
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url)),
        },
    },
    server: {
        port: 3001,
        proxy: {
            "/api": {
                target: 'https://luanvan-1-kmlh.onrender.com/', // Sử dụng target được xác định trước
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
});