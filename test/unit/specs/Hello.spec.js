import Vue from 'vue'
import Navbar from 'COMPONENTS/Navbar'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><navbar></navbar></div>',
      components: { Navbar }
    }).$mount()
    expect(vm.$el.querySelector('span.title').textContent).to.contain('Caster Book')
  })
})
