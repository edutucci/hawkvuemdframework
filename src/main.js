import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './theme/index.styl'
import './theme/app.styl'
import './index.js'

// Vue Prism.js
import Prism from 'vue-prismjs'
import './css/prism/prism.css'

Vue.component('Prism', Prism)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
