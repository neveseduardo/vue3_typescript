import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout.vue'
import NProgress from 'nprogress'

const files = require.context('./modules', false, /\.ts$/)
const modules = files
    .keys()
    .map((m) => files(m))
    .map((m) => m.default)
    .reduce((acc, item) => [...acc, ...item], [])

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/dashboard',
        component: DashboardLayout,
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/Dashboard/Dashboard.vue'),
                name: 'Dashboard',
                meta: { title: 'Dashboard' },
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        meta: { auth: false },
        component: () => import('@/views/Errors/NotFound.vue'),
    },
    ...modules,
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
const TIMEOUT = 100
router.beforeEach((to, from, next) => {
    NProgress.start()
    setTimeout(() => {
        return next()
    }, TIMEOUT)
})
router.afterEach(() => NProgress.done())

export default router
