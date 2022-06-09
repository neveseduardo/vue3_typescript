<template>
    <div id="app" :class="{ 'nav-open': $sidebar.show }">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
