<template>
    <nav class="sidebar">
        <div class="sidebar-header">
            <slot name="sidebar-header"></slot>
        </div>
        <ul class="sidebar-list">
            <template
                v-for="(link, index) in $sidebar.sidebarLinks"
                :key="index"
            >
                <li
                    class="sidebar-item"
                    :class="{
                        active: control.active === index && hasChildren(link),
                    }"
                >
                    <a
                        @click.prevent="
                            ;[
                                $sidebar.set(true),
                                handleClick(link, index, $router),
                            ]
                        "
                        :href="link.path"
                        class="sidebar-link"
                    >
                        <i class="icon" :class="link.icon"></i>
                        <span class="text">
                            {{ link.name }}
                        </span>
                    </a>

                    <template v-if="hasChildren(link) && control.active">
                        <ul class="childrens">
                            <li
                                v-for="(children, childIndex) in link.childrens"
                                :key="childIndex * 5000"
                                class="children-item"
                            >
                                <a
                                    @click.prevent="
                                        handleChildren(children, $router)
                                    "
                                    class="children-link"
                                    :href="children.path"
                                >
                                    <span>{{ children.name.slice(0, 1) }}</span>
                                    <span>{{ children.name }}</span>
                                </a>
                            </li>
                        </ul>
                    </template>
                </li>
            </template>
        </ul>
        <div class="sidebar-footer">
            <a class="toggle" @click.prevent="$theme.toggle()">
                <template v-if="$theme.dark">
                    <i class="icon fa fa-moon"></i>
                    <span class="text">Dark Mode</span>
                </template>
                <template v-else>
                    <i class="icon fa fa-sun"></i>
                    <span class="text">Light Mode</span>
                </template>
            </a>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, getCurrentInstance } from 'vue'

export default defineComponent({
    name: 'sidebar',
    setup() {
        const app = getCurrentInstance()
        const sidebar = app?.appContext.config.globalProperties.$sidebar
        const hasChildren = computed(() => {
            return (link: any): boolean => {
                const childrens = Array.from(link?.childrens ?? [])
                return Boolean(childrens.length)
            }
        })

        const control: { active: number | null } = reactive({
            active: null,
        })

        function handleClick(link: any, index: number, router: any) {
            const childrens = Array.from(link?.childrens ?? [])
            if (childrens.length) {
                sidebar.set(true)
                control.active = control.active === index ? null : index
            } else {
                control.active = null
                const path = link?.path
                const resolve = router.resolve({ path })
                if (path && resolve.matched.length) router.push({ path })
            }
        }
        function handleChildren(children: any, router: any): void {
            control.active = null
            const path = children?.path
            const resolve = router.resolve({ path })
            if (path && resolve.matched.length) router.push({ path })
        }

        return {
            control,
            hasChildren,
            handleClick,
            handleChildren,
        }
    },
})
</script>
