import Vue from 'vue'

export default Vue.component('transition-fade', {
  functional: true,
  render: function (createElement, context) {
    var opts = {
      props: {
        name: 'fade',
        mode: 'out-in'
      }
    }
    return createElement('transition', opts, context.children)
  }
})

