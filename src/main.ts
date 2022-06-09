import { createApp } from 'vue'
import App from '@/App.vue'
import http from '@/http'
import router from '@/router'
import store from '@/store'
import { ComponentsPlugin } from '@/plugins/Components'
import { SidebarPlugin } from '@/plugins/Sidebar'
import { ThemePlugin } from '@/plugins/Theme'
import methods from '@/mixins/methods.mixins'
import messages from '@/mixins/messages.mixins'
import { sidebarLinks } from '@/utils/sidebarLinks.util'
import VueApexCharts from 'vue3-apexcharts'
import 'nprogress/nprogress.css'
import '@/assets/sass/app.scss'

const app = createApp(App)
app.mixin({
    methods,
    data: () => ({ messages }),
})
app.use(VueApexCharts)
app.use(http)
app.use(SidebarPlugin, { sidebarLinks })
app.use(ComponentsPlugin)
app.use(ThemePlugin)
app.use(store)
app.use(router)

app.mount('#app')
