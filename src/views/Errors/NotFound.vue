<template>
    <div class="not-found">
        <div class="error-wrapper">
            <h1>Erro 404: Oops! A página que você procura não existe.</h1>
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
    name: 'not-found',
})
</script>

<style lang="scss"></style>
