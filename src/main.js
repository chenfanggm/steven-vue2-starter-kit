import Vue from 'vue'
import { CreateRouter } from './routes'
import store from './vuex/store'

Vue.config.devtools = !__PROD__

const router = CreateRouter(Vue)

new Vue({
  el: '#app',
  router,
  store
})
