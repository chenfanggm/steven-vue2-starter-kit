import Vue from 'vue'
import OneColumnLayout from './layout/OneColumnLayout'
import { CreateRouter } from './routes'
import './transitions'


Vue.config.devtools = !__PROD__

const router = CreateRouter(Vue)

new Vue({
  el: '#app',
  components: {
    mainLayout: OneColumnLayout
  },
  router: router
})
