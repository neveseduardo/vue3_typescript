<template>
    <div class="dashboard">
        <breadcrumb :paths="breadcrumbPaths" />

        <div class="row">
            <div
                v-for="(i, index) in [
                    'primary',
                    'success',
                    'danger',
                    'warning',
                ]"
                :key="index"
                class="col-12 col-md-6 col-lg-3"
            >
                <dashboard-card :type="i">
                    <template v-slot:dashboard-card-title>
                        <h5>Card Item 1</h5>
                    </template>
                    <template v-slot:dashboard-card-data>
                        <h5>255,66</h5>
                    </template>
                    <template v-slot:dashboard-card-footer>
                        <p>
                            <span class="text-danger">
                                <i class="fa fa-arrow-down"></i>
                            </span>
                            <span class="text-danger">1,10%</span>
                            <span>No último mês</span>
                        </p>
                    </template>
                    <template v-slot:dashboard-card-icon>
                        <i class="fa fa-chart-pie"></i>
                    </template>
                </dashboard-card>
            </div>
        </div>

        <card>
            <template v-slot:card-title>
                <h5>Charts</h5>
            </template>
            <template v-slot:card-body>
                <chart />
            </template>
        </card>

        <div class="row">
            <div class="col-12 col-md-6">
                <card>
                    <template v-slot:card-title>
                        <h5>Table 1</h5>
                    </template>

                    <template v-slot:card-body>
                        <g-table :headers="headers" :data="tableData" />
                    </template>
                </card>
            </div>
            <div class="col-12 col-md-6">
                <card>
                    <template v-slot:card-title>
                        <h5>Table2</h5>
                    </template>

                    <template v-slot:card-body>
                        <g-table :headers="headers" :data="tableData" />
                    </template>
                </card>
            </div>
        </div>

        <card>
            <template v-slot:card-title>
                <h5>Table3</h5>
            </template>

            <template v-slot:card-body>
                <g-table :headers="headers" :data="tableData" />
            </template>
        </card>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
    name: 'dashboard',
    setup() {
        const breadcrumbPaths = computed(() => {
            return [{ label: 'Home', path: '/' }]
        })
        const headers = ref([
            { label: 'name', width: '30%' },
            { label: 'idade', width: '30%' },
            { label: 'email', width: '30%' },
        ])
        const tableData = ref([
            { name: 'Nome do usuário 1', idade: 15, email: 'email@email.com' },
            { name: 'Nome do usuário 2', idade: 15, email: 'email@email.com' },
            { name: 'Nome do usuário 3', idade: 15, email: 'email@email.com' },
        ])

        return {
            breadcrumbPaths,
            headers,
            tableData,
        }
    },
})
</script>
