// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@mdi/font/css/materialdesignicons.css'
import '@/stylus/main.styl'
import App from './App'
import components from './components'
import mixins from './mixins'
import router from './router'
import theme from './themes'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify, theme)

/**
 *------------------------------------------------------------------------------
 * Components Block
 *------------------------------------------------------------------------------
 * Here we define additional global components to be used throughout the app.
 * We require theme dynamically to avoid loading unused components.
 *
 */
Vue.use(components)
Vue.use(mixins)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
