<template>
    <div class="dashboard-card card" :class="type">
        <div class="card-body">
            <div class="dashboard-card-content">
                <div class="dashboard-card-title">
                    <slot name="dashboard-card-title"></slot>
                </div>
                <div class="dashboard-card-data">
                    <slot name="dashboard-card-data"></slot>
                </div>
                <div class="dashboard-card-footer">
                    <slot name="dashboard-card-footer"></slot>
                </div>
            </div>
            <div class="dashboard-card-icon">
                <slot name="dashboard-card-icon"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'dashboard-card',
    props: {
        type: { type: String, default: 'primary' },
    },
})
</script>

<style lang="scss"></style>
