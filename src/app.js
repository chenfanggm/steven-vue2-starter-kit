import Vue from 'vue'
import OneColumnLayout from './layout/OneColumnLayout'
import './transitions'
import { CreateRouter } from './routes'


Vue.config.devtools = !__PROD__

const router = CreateRouter(Vue)

new Vue({
  el: '#root',
  components: {
    mainLayout: OneColumnLayout
  },
  router: router
})
