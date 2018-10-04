import LoadingContainer from './LoadingContainer'

const loadPlugin = {
  install: (Vue) => {
    let Tc = Vue.component(LoadingContainer.name, LoadingContainer)
    let loadContainer = new Tc()
    let vm = loadContainer.$mount()
    document.querySelector('body').appendChild(vm.$el)

    Vue.prototype.$Loading = {
      show (msg) {
        let message = ''
        if (msg) {
          message = msg
        }
        loadContainer.show(message)
      },
      hide () {
        loadContainer.hide()
      }
    }
  }
}

export default loadPlugin
