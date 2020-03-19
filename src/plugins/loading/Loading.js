import LoadingContainer from './LoadingContainer'

const loadPlugin = {
  install: (Vue) => {
    let Tc = Vue.component(LoadingContainer.name, LoadingContainer)
    let loadContainer = new Tc()
    let vm = loadContainer.$mount()
    document.querySelector('body').appendChild(vm.$el)

    Vue.prototype.$Loading = {
      show (config) {
        loadContainer.show(config)
      },
      hide () {
        loadContainer.hide()
      }
    }
  }
}

export default loadPlugin
