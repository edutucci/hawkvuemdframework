import Vue from 'vue'

import SnackBar from './snackBar/SnackBar'

const Plugins = {
  SnackBar
}

Object.keys(Plugins).forEach(name => {
  Vue.use(Plugins[name])
})

export default Plugins
