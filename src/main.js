import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Prism
import Prism from 'vue-prismjs'
import './css/prism/prism.css'

// library styles
import './theme/index.styl'
// import './custom.styl'
import './index.js'

// pages styles
import './app.styl'

Vue.component('Prism', Prism)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
