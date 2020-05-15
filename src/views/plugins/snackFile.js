import Vue from 'vue'

function showSnack () {
  Vue.prototype.$SnackBar.create({
    message: 'Download Completed',
    textcolor: 'text-white',
    bgcolor: 'bg-positive'
  })
}

let test = {
  showSnack: showSnack
}

export default test
