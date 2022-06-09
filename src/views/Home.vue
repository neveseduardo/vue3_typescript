<template>
    <div class="home">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam
        corporis unde minus aperiam sed amet perspiciatis praesentium. Sint,
        modi debitis accusantium cupiditate voluptate molestias repellendus
        necessitatibus. Velit, similique perferendis.
    </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    name: 'home',
    setup() {
        const app = getCurrentInstance()
        const store = app?.appContext.config.globalProperties.$store
        console.log('sidebar', store)
    },
})
</script>
