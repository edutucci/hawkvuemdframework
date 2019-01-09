import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/home'),
      children: [
        { path: '', component: () => import('./views/main') },
        { path: '/installation', component: () => import('./views/guide/installation') },
        { path: '/layout', component: () => import('./views/guide/layout') },
        { path: '/spacing', component: () => import('./views/css/spacing') },
        { path: '/flexbox', component: () => import('./views/css/flexbox') },
        { path: '/textalignment', component: () => import('./views/css/textalignment') },
        { path: '/positioning', component: () => import('./views/css/positioning') },
        { path: '/visibility', component: () => import('./views/css/visibility') },
        { path: '/cssothers', component: () => import('./views/css/others') },
        { path: '/buttons', component: () => import('./views/buttons') },
        { path: '/buttongroup', component: () => import('./views/buttonGroup') },
        { path: '/icon', component: () => import('./views/icon') },
        { path: '/textfield', component: () => import('./views/textfield') },
        { path: '/search', component: () => import('./views/search') },
        { path: '/drawer', component: () => import('./views/drawer') },
        { path: '/card', component: () => import('./views/card') },
        { path: '/chip', component: () => import('./views/chips') },
        { path: '/menu', component: () => import('./views/menu') },
        { path: '/menuSlider', component: () => import('./views/menuSlider') },
        { path: '/list', component: () => import('./views/list') },
        { path: '/collapsible', component: () => import('./views/collapsible') },
        { path: '/checkbox', component: () => import('./views/checkbox') },
        { path: '/radio', component: () => import('./views/radio') },
        { path: '/select', component: () => import('./views/select') },
        { path: '/tab', component: () => import('./views/tab') },
        { path: '/table', component: () => import('./views/table') },
        { path: '/toolbar', component: () => import('./views/toolbar') },
        { path: '/modal', component: () => import('./views/modal') },
        { path: '/date', component: () => import('./views/date') },
        { path: '/time', component: () => import('./views/time') },
        { path: '/toggle', component: () => import('./views/toggle') },
        { path: '/video', component: () => import('./views/video') },
        { path: '/snack', component: () => import('./views/plugins/snack') },
        { path: '/loading', component: () => import('./views/plugins/loading') },
        { path: '/test', component: () => import('./views/test') }
      ]
    }
  ]
})
