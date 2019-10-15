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
        { path: '/compimage', component: () => import('./views/pages/image/image') },
        { path: '/buttons', component: () => import('./views/pages/buttons/buttons') },
        { path: '/buttongroup', component: () => import('./views/pages/buttons/buttonGroup') },
        { path: '/buttondropdown', component: () => import('./views/pages/buttons/buttonDropDown') },
        { path: '/banner', component: () => import('./views/pages/banner/banner') },
        { path: '/icon', component: () => import('./views/pages/icon/icon') },
        { path: '/input', component: () => import('./views/pages/input/input') },
        { path: '/search', component: () => import('./views/pages/search/search') },
        { path: '/drawer', component: () => import('./views/pages/drawer/drawer') },
        { path: '/card', component: () => import('./views/pages/card/card') },
        { path: '/chip', component: () => import('./views/pages/chips/chips') },
        { path: '/menu', component: () => import('./views/pages/menu/menu') },
        { path: '/menuSlider', component: () => import('./views/pages/menu/menuSlider') },
        { path: '/mask', component: () => import('./views/mask') },
        { path: '/list', component: () => import('./views/pages/list/list') },
        { path: '/collapsible', component: () => import('./views/pages/collapsible/collapsible') },
        { path: '/checkbox', component: () => import('./views/pages/checkbox/checkbox') },
        { path: '/radio', component: () => import('./views/pages/radio/radio') },
        { path: '/rangeslider', component: () => import('./views/pages/rangeslider/rangeslider') },
        { path: '/select', component: () => import('./views/pages/select/select') },
        { path: '/tab', component: () => import('./views/pages/tab/tab') },
        { path: '/table', component: () => import('./views/pages/table/table') },
        { path: '/appbar', component: () => import('./views/pages/appbar/appbar.vue') },
        { path: '/dialog', component: () => import('./views/pages/dialog/dialog') },
        { path: '/datetime', component: () => import('./views/pages/datetime/datetime') },
        { path: '/toggle', component: () => import('./views/pages/toggle/toggle') },
        { path: '/video', component: () => import('./views/pages/video/video') },
        { path: '/snack', component: () => import('./views/plugins/snack') },
        { path: '/loading', component: () => import('./views/plugins/loading') },
        { path: '/fileupload', component: () => import('./views/pages/fileUpload/fileUpload') },
        { path: '/carousel', component: () => import('./views/pages/carousel/carousel') },
        { path: '/rating', component: () => import('./views/pages/rating/rating') },
        { path: '/palleteColor', component: () => import('./views/guide/MaterialDesignColor') },
        { path: '/scroll', component: () => import('./views/pages/scroll/scroll') }
      ]
    },
    {
      path: '/test',
      component: () => import('./views/pages/test/Currency.vue')
    },
    {
      path: '/example',
      component: () => import('./views/examples/image')
    }
  ]
})
