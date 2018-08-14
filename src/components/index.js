import Vue from 'vue'
import HFaIcon from './icons/FaIcon.vue'

const Components = {
  HFaIcon
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
