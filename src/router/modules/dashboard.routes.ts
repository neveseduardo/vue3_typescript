import { RouteRecordRaw } from 'vue-router'
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/components',
        redirect: 'form',
        component: DashboardLayout,
        children: [
            {
                path: 'form',
                component: () =>
                    import('@/views/Dashboard/Components/Form/FormIndex.vue'),
                name: 'BasicForms',
                meta: { title: 'BasicForms' },
            },
        ],
    },
]

export default routes
