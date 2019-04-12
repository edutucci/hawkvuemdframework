import './css/index.styl'
import './css/fontawesome-free-5.3.1-web/css/all.css'
// import './css/prism/prism.css'
import Components from './components'
import Plugins from './plugins'

import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// import Prism from 'vue-prismjs'

Vue.use(VueAwesomeSwiper)
// Vue.use(Prism)

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'

// library.add(fas, fab, far)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

export default { Plugins, Components }
