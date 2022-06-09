<template>
    <div class="chart">
        <apexchart
            height="300"
            type="line"
            :options="options"
            :series="options.series"
        ></apexchart>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: 'chart',
    setup() {
        const options = reactive({
            chart: {
                id: 'vuechart-example',
            },
            xaxis: {
                categories: [
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro',
                ],
            },
            series: [
                {
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
                {
                    name: 'series-2',
                    data: [55, 22, 30, 15, 0, 15, 108, 50],
                },
                {
                    name: 'series-3',
                    data: [15, 45, 0, 10, 30, 33, 50, 30],
                },
            ],
        })

        return {
            options,
        }
    },
})
</script>
