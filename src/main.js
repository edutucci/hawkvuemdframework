import './css/index.styl'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueHighlightJS from 'vue-highlightjs'
import './components'
import './plugins'
import Parse from 'parse'

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

fontawesome.library.add(solid, regular, brands) // Use any icon from the Solid, regular, brands styles

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueHighlightJS)
Vue.config.productionTip = false

Parse.initialize('br.com.balladapp')
Parse.serverURL = 'http://localhost:1337/parse'

Vue.prototype.$parse = Parse

new Vue({
  Parse,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
