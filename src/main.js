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
// Add FontAwesome icons and component
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt, faChevronUp, faChevronDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

// Set up our router
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

// Add BoostrapVue
Vue.use(BootstrapVue)

// Create library of emoticons and use FontAwesomeIcon
library.add(faExternalLinkAlt, faChevronUp, faChevronDown, faPlus, faMinus, faGithub, faLinkedin, faItchIo)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Create and run the Vue instance
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


