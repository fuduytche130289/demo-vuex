export const cartStore = {
    state: {
        namespaced: true,
        cartData: []
    },
    action: {},
    mutations: {
        setCartData(state, payload) {
            state.cartData = payload
        }
    }
}