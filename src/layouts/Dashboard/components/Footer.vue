<template>
    <div class="dashboard-footer">
        <small>
            Copyright © <strong>{{ appTitle }}.</strong> Todos os direitos
            reservados.
        </small>
        <small>
            <strong>{{ sectorTitle }}</strong> - {{ systemName }}
        </small>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'dashboard-footer',
    computed: {
        appTitle() {
            return process.env.VUE_APP_TITLE
        },
        sectorTitle() {
            return 'Dashboard'
        },
        systemName() {
            return 'Vue3 Template'
        },
    },
})
</script>
