// index.js
import { createRouter, createWebHistory } from 'vue-router'
import clientRoutes from './client.route'
import adminRoutes from './admin.route'
import hiddenRoutes from './hidden.route'

const routes = [
    ...clientRoutes,
    ...adminRoutes,
    ...hiddenRoutes,
]

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})


export default router