import { App, Plugin } from 'vue'

const files = require.context('./modules', false, /\.ts$/)
const modules = files.keys().reduce((acc, path) => {
    const name = path
        .replace(/^\.\/(.*)\.\w+$/, '$1')
        .replace('http', '')
        .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    const value = files(path)
    return { ...acc, [name]: value.default }
}, {})

export const HttpPlugin: Plugin = {
    install(app: App) {
        app.config.globalProperties.$http = { ...modules }
    },
}

export default HttpPlugin
