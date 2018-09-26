import './css/index.styl'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueHighlightJS from 'vue-highlightjs'
import './components'
import './plugins'

// import fontawesome from '@fortawesome/fontawesome'
// import solid from '@fortawesome/fontawesome-free-solid'
// import regular from '@fortawesome/fontawesome-free-regular'
// import brands from '@fortawesome/fontawesome-free-brands'
// fontawesome.library.add(solid, regular, brands) // Use any icon from the Solid, regular, brands styles

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab, far)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueHighlightJS)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
