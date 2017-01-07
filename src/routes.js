import VueRouter from 'vue-router'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Group from 'pages/Group'
import About from 'pages/About'


export const CreateRouter = (Vue) => {

  Vue.use(VueRouter)

  const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/group', component: Group },
    { path: '/about', component: About }
  ]

  const router = new VueRouter({
    base: '/',
    routes: routes,
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: function (to, from, savedPosition) {
      return savedPosition || { x: 0, y: 0 }
    }
  })

  /* router.beforeEach(({ to, from, abort, redirect, next }) => {
    if (to.requireAuth && !router.app.user) {
      return abort()
    }
    next()
  }) */

  return router
}
