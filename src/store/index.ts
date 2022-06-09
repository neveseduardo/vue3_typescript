import { createStore } from 'vuex'

const files = require.context('./modules', false, /\.ts$/)
const modules = files.keys().reduce((acc, path) => {
    const name = path
        .replace(/^\.\/(.*)\.\w+$/, '$1')
        .replace('.store', '')
        .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    const value = files(path)
    return { ...acc, [name]: value.default }
}, {})

export default createStore({ modules })
