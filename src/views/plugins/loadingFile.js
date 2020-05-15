import Vue from 'vue'

function showLoading () {
  Vue.prototype.$Loading.show()
  setTimeout(() => {
    Vue.prototype.$Loading.hide()
  }, 2000)
}

let test = {
  showLoading: showLoading
}

export default test
