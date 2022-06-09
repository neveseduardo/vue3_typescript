<template>
    <div class="breadcrumb">
        <ul class="breadcrumb-list">
            <li class="breadcrumb-item first-item">Dashboard</li>
            <li
                class="breadcrumb-item"
                v-for="(path, index) in paths"
                :key="index"
            >
                <router-link
                    :disabled="index === paths.length - 1"
                    class="breadcrumb-link"
                    :to="{ path: path.path }"
                >
                    {{ path.label }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'breadcrumb',
    props: {
        paths: { type: Array, default: () => [] },
    },
})
</script>
