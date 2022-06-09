import { App, Plugin } from 'vue'
import Components from '@/components'

const components = Components
export const ComponentsPlugin: Plugin = {
    install(app: App) {
        components.map((component) => app.component(component.name, component))
    },
}

export default ComponentsPlugin
