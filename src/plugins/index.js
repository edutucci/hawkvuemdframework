import Vue from 'vue'

import Toast from './toast/Toast'

const Plugins = {
  Toast
}

Object.keys(Plugins).forEach(name => {
  Vue.use(Plugins[name])
})

export default Plugins
