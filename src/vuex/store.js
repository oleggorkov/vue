import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
let cartStorage = localStorage.getItem('cart');

let store = new Vuex.Store({
  state: {
    cart: cartStorage ? JSON.parse(cartStorage) : []
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  actions: {
    addToCart({commit}, product) {
      commit('addToCart', product);
    },
  },
  getters: {
    CART(state) {
      return state.cart;
    }
  },
})

export default store;
