import Vue from 'vue'
import Vuex from 'vuex'
import FeedVuex from './FeedVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    feed: FeedVuex
  }
})
