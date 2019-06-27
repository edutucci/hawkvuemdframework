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
        { path: '/borders', component: () => import('./views/css/borders') },
        { path: '/buttons', component: () => import('./views/pages/buttons/buttons') },
        { path: '/buttongroup', component: () => import('./views/pages/buttons/buttonGroup') },
        { path: '/icon', component: () => import('./views/icon') },
        { path: '/input', component: () => import('./views/input') },
        { path: '/search', component: () => import('./views/search') },
        { path: '/drawer', component: () => import('./views/pages/drawer/drawer') },
        { path: '/card', component: () => import('./views/pages/card/card') },
        { path: '/chip', component: () => import('./views/chips') },
        { path: '/menu', component: () => import('./views/menu') },
        { path: '/menuSlider', component: () => import('./views/menuSlider') },
        { path: '/mask', component: () => import('./views/mask') },
        { path: '/list', component: () => import('./views/list') },
        { path: '/collapsible', component: () => import('./views/pages/collapsible/collapsible') },
        { path: '/checkbox', component: () => import('./views/pages/checkbox/checkbox') },
        { path: '/radio', component: () => import('./views/pages/radio/radio') },
        { path: '/select', component: () => import('./views/select') },
        { path: '/tab', component: () => import('./views/tab') },
        { path: '/table', component: () => import('./views/table') },
        { path: '/toolbar', component: () => import('./views/toolbar') },
        { path: '/modal', component: () => import('./views/modal') },
        { path: '/date', component: () => import('./views/date') },
        { path: '/time', component: () => import('./views/time') },
        { path: '/toggle', component: () => import('./views/pages/toggle/toggle') },
        { path: '/video', component: () => import('./views/video') },
        { path: '/snack', component: () => import('./views/plugins/snack') },
        { path: '/loading', component: () => import('./views/plugins/loading') },
        { path: '/fileupload', component: () => import('./views/fileUpload') },
        { path: '/carousel', component: () => import('./views/pages/carousel/carousel') },
        { path: '/rating', component: () => import('./views/rating') },
        { path: '/palleteColor', component: () => import('./views/guide/MaterialDesignColor') }
      ]
    },
    {
      path: '/test',
      component: () => import('./views/test')
    },
    {
      path: '/example',
      component: () => import('./views/examples/drawer')
    }
  ]
})
