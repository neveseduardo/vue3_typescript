export default {
    isEmpty(v: any): boolean {
        try {
            if (v === undefined) return true
            if (v === null) return true
            if (v === '') return true
            if (v === Object(v) && !Object.entries(v).length) return true
            if (Array.isArray(v) && !v.length) return true
            return false
        } catch (error) {
            console.error(error)
            return true
        }
    },
}
