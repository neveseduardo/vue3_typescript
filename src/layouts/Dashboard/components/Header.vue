<template>
    <div class="dashboard-header">
        <a @click.prevent="$sidebar.toggle()" class="toggle-button">
            <i v-if="$sidebar.show" class="fa fa-angle-left"></i>
            <i v-else class="fa fa-angle-right"></i>
        </a>

        <div class="searchbox">
            <div class="search-form">
                <input type="text" placeholder="Pesquisar..." name="search" />
                <button>
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
        <div class="control-dropdown">
            <figure>
                <img :src="image" alt="User avatar" />
            </figure>
            <div class="control-name">User Name</div>
            <div class="control-angle"><i class="fa fa-angle-down"></i></div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'dashboard-header',
    setup() {
        const image = computed(() => require('@/assets/images/user.png'))

        return {
            image,
        }
    },
})
</script>

<style lang="scss"></style>
