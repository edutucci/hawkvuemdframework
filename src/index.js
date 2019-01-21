import './css/index.styl'
import './css/fontawesome-free-5.3.1-web/css/all.css'
import Components from './components'
import Plugins from './plugins'

import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'

// library.add(fas, fab, far)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

export default { Plugins, Components }
