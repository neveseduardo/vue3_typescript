import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/contracts',
        redirect: 'index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/Home.vue'),
                name: 'IndexContract',
                meta: { title: 'IndexContract' },
            },
        ],
    },
]

export default routes
