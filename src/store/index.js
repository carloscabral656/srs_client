import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        user: {}
    },
    mutations: {
        login(state, user){
            state.user = user
        }
    },
    actions: {
        login({ commit }) {
            axios
              .get("https://fakestoreapi.com/products?limit=5")
              .then((response) => {
                commit("loginx", response.data);
              });
        },
    }
})