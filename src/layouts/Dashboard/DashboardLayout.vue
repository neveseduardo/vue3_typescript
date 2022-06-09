<template>
    <div class="dashboard-layout">
        <div class="wrapper">
            <sidebar>
                <template v-slot:sidebar-header>
                    <div class="logo">
                        <img :src="logo" alt="" />
                    </div>
                    <h5>dashboard</h5>
                </template>
            </sidebar>
            <div class="main-panel">
                <dashboard-header />
                <dashboard-content />
                <dashboard-footer />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DashboardHeader from '@/layouts/Dashboard/components/Header.vue'
import DashboardContent from '@/layouts/Dashboard/components/Content.vue'
import DashboardFooter from '@/layouts/Dashboard/components/Footer.vue'

export default defineComponent({
    name: 'dashboard-layout',
    components: {
        DashboardHeader,
        DashboardContent,
        DashboardFooter,
    },
    data: () => ({ logo: require('@/assets/images/dashboard_white.png') }),
})
</script>
