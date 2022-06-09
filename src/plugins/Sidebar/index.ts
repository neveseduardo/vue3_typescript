import { reactive, App, Plugin } from 'vue'
import Sidebar from '@/plugins/Sidebar/components/Sidebar.vue'

const store = reactive({
    show: true,
    sidebarLinks: [],
    set(value: boolean) {
        this.show = value
    },
    toggle() {
        this.show = !this.show
    },
})

export const SidebarPlugin: Plugin = {
    install(app: App, options) {
        store.sidebarLinks = options?.sidebarLinks ?? []
        app.config.globalProperties.$sidebar = store
        app.component('sidebar', Sidebar)
    },
}

export default SidebarPlugin
