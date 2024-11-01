import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from '@vitejs/plugin-vue-jsx';


export default defineConfig({
    // define: {
    //     'process.env.API_TARGET': JSON.stringify(apiTarget), // Truyền API Target vào môi trường
    // },
    base: './', // Thay đổi base cho môi trường sản xuất
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
                target: 'http://localhost:3000/', // Sử dụng target được xác định trước
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
});