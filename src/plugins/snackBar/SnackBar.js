import SnackBarContainer from './SnackBarContainer'

const snackPlugin = {
  install: (Vue) => {
    let Tc = Vue.component(SnackBarContainer.name, SnackBarContainer)
    let snackContainer = new Tc()
    let vm = snackContainer.$mount()
    document.querySelector('body').appendChild(vm.$el)

    Vue.prototype.$SnackBar = {
      create (msg) {
        snackContainer.add(msg)
      }
    }
  }
}

export default snackPlugin
