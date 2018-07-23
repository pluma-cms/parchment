import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from './admin'

Vue.use(VueRouter)

// Routes collection
const routes = []
  .concat(
    [admin],
  )

// Instance of VueRouter
const router = new VueRouter({
  base: '/',
  mode: 'history',
  saveScrollPosition: true,
  routes
})

// Guard
router.beforeEach((to, from, next) => {
  document.title = (to.meta && to.meta.title) || (to.labels && to.labels.title) || document.title

  if (to.meta.authenticatable) {
    // TODO: some authenticating
  }

  next()
})

export default router
