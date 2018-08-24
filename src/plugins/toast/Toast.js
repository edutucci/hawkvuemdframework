import ToastContainer from './ToastContainer.vue'

const toastPlugin = {
  install: (Vue) => {
    let Tc = Vue.component(ToastContainer.name, ToastContainer)
    let toastContainer = new Tc()
    let vm = toastContainer.$mount()
    document.querySelector('body').appendChild(vm.$el)

    Vue.prototype.$toast = {
      create (msg) {
        console.log('passou aki')
        toastContainer.add(msg)
      }
    }
  }
}

export default toastPlugin
