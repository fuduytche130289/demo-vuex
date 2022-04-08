export const homeStore = {
    state: {
        namespaced: true,
        homeData: ['alo1234']
    },
    action: {},
    mutations: {
        setHomeData(state, payload) {
            state.homeData = payload
        }
    }
}