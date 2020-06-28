import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Prism
import Prism from 'vue-prismjs'
import './css/prism/prism.css'

// main library styles
import './theme/hawk_default_stylus.styl'

// custom styles
// import './customStyle.styl'

import './index.js'

// local instances
import './boot/index'

Vue.component('Prism', Prism)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
