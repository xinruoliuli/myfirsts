import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'homePage',
        component: () => import('../views/homePage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
