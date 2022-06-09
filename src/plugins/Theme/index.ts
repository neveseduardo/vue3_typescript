import { reactive, App, Plugin } from 'vue'

async function setBodyDarkMode(value: boolean): Promise<void> {
    const body: HTMLBodyElement | null = document.querySelector('body')
    if (value) body?.classList.add('dark')
    else body?.classList.remove('dark')
}

const store = reactive({
    dark: async (): Promise<boolean> => {
        const storage = JSON.parse(
            (await localStorage.getItem('DarkMode')) || 'false'
        )
        setBodyDarkMode(storage)
        return storage
    },
    async set(value: boolean) {
        setBodyDarkMode(value)
        localStorage.setItem('DarkMode', JSON.stringify(value))
    },
    async toggle() {
        const value = Boolean(await this.dark())
        setBodyDarkMode(!value)
        localStorage.setItem('DarkMode', JSON.stringify(!value))
    },
})

export const ThemePlugin: Plugin = {
    async install(app: App) {
        await store.dark()
        app.config.globalProperties.$theme = store
    },
}

export default ThemePlugin
