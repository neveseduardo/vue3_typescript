<template>
    <div class="card">
        <div class="card-header">
            <slot name="card-title"></slot>
        </div>
        <div class="card-body">
            <slot name="card-body"></slot>
        </div>
        <div v-if="$slots['card-footer']" class="card-footer">
            <slot name="card-footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'card',
})
</script>
