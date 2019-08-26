import Vue from 'vue'
import App from './App.vue'

// Add Vue Router
import VueRouter from 'vue-router'
// Get our routes
import routes from './routes'
// Add Bootstrap-Vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Set up our router
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

// Add BoostrapVue
Vue.use(BootstrapVue)

// Create and run the Vue instance
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


