import './css/index.styl'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHighlightJS from 'vue-highlightjs'

import App from './App'
import Home from './home'

import pageSpacing from './pages/css/spacing'
import pageFlexbox from './pages/css/flexbox'
import pageCssOthers from './pages/css/others'

import mainPage from './pages/main'
import pagebtn from './pages/buttons'
import pageIcon from './pages/icon'
import pageTextField from './pages/textfield'
import pageCard from './pages/card'
import pageMenu from './pages/menu'
import pageList from './pages/list'
import pageCheckbox from './pages/checkbox'
import pageRadio from './pages/radio'
import pageSelect from './pages/select'
import pageTab from './pages/tab'
import pageTable from './pages/table'
import pageToolbar from './pages/toolbar'

// import App from './App'
// import HelloWorld from '@/components/HelloWorld'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(solid, regular, brands) // Use any icon from the Solid, regular, brands styles

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueHighlightJS)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', component: mainPage },
      { path: '/spacing', component: pageSpacing },
      { path: '/flexbox', component: pageFlexbox },
      { path: '/cssothers', component: pageCssOthers },
      { path: '/buttons', component: pagebtn },
      { path: '/icon', component: pageIcon },
      { path: '/textfield', component: pageTextField },
      { path: '/card', component: pageCard },
      { path: '/menu', component: pageMenu },
      { path: '/list', component: pageList },
      { path: '/checkbox', component: pageCheckbox },
      { path: '/radio', component: pageRadio },
      { path: '/select', component: pageSelect },
      { path: '/tab', component: pageTab },
      { path: '/table', component: pageTable },
      { path: '/toolbar', component: pageToolbar }
    ]
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
