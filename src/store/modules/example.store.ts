const state = () => ({
    teste: null,
})

const mutations = {
    setTeste: (state: any, payload: any) => (state.teste = payload),
}

const getters = {
    teste: (state: any) => state.teste,
}

const actions = {
    setTeste: ({ commit }: any, payload: any) => commit('setTeste', payload),
}

export default {
    namespaced: true,
    stateFactory: true,
    state,
    mutations,
    getters,
    actions,
}
