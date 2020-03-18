import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// import './index.styl' // custom color
import './theme/index.styl'
import './app.styl'
import './index.js'

// Vue Prism.js
import Prism from 'vue-prismjs'
import './css/prism/prism.css'

// v-mask
// import { VueMaskDirective } from 'v-mask'

Vue.component('Prism', Prism)

// Vue.directive('mask', VueMaskDirective)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
