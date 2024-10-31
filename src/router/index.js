// index.js
import { createRouter, createWebHistory } from 'vue-router'
import clientRoutes from './client.route'
import adminRoutes from './admin.route'

const routes = [
    ...clientRoutes,
    ...adminRoutes,
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})


export default router