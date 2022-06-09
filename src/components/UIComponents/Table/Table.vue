<template>
    <div class="g-table-wrapper">
        <table class="g-table" :style="{ 'min-width': mWidth }">
            <thead>
                <tr>
                    <th
                        v-for="(header, index) in headers"
                        :key="index"
                        :width="header.width"
                    >
                        {{ header.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td v-for="(header, i) in headers" :key="i * 5000">
                        {{ item[header.label] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'g-table',
    props: {
        headers: { type: Array, default: () => [] },
        data: { type: Array, default: () => [] },
        minWidth: { type: String, default: 'auto' },
    },
    setup(props) {
        const mWidth = computed(() => props.minWidth)

        return {
            mWidth,
        }
    },
})
</script>
