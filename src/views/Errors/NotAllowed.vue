<template>
    <div class="not-allowed">
        <div class="error-wrapper">
            <h1>
                Erro 403: Oops! Você não tem permissão para acessar esta página.
            </h1>
            <p>
                Volte para a página clicando
                <a @click.prevent="$router.push('/')" href="/">aqui</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'not-allowed',
})
</script>

<style lang="scss"></style>
