import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import babelPolyfill from 'babel-polyfill'
import './assets/styles/main.scss'

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  babelPolyfill
})
