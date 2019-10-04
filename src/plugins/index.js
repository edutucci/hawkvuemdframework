import Vue from 'vue'

import SnackBar from './snackBar/SnackBar'
import Loading from './loading/Loading'

const Plugins = {
  SnackBar,
  Loading
}

Object.keys(Plugins).forEach(name => {
  Vue.use(Plugins[name])
})

export default Plugins
