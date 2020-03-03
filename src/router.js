import Vue from 'vue'
import Router from 'vue-router'
// import SnackBarVue from './plugins/snackBar/SnackBarVue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/mainLayout'),
      children: [
        { path: '', component: () => import('./views/startPage') },
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
        { path: '/banner', component: () => import('./views/pages/banner/banner') },
        { path: '/icon', component: () => import('./views/pages/icon/icon') },
        { path: '/input', component: () => import('./views/pages/input/input') },
        { path: '/drawer', component: () => import('./views/pages/drawer/drawer') },
        { path: '/card', component: () => import('./views/pages/card/card') },
        { path: '/chip', component: () => import('./views/pages/chips/chips') },
        { path: '/menu', component: () => import('./views/pages/menu/menu') },
        { path: '/mask', component: () => import('./views/mask') },
        { path: '/list', component: () => import('./views/pages/list/list') },
        { path: '/collapsible', component: () => import('./views/pages/collapsible/collapsible') },
        { path: '/checkbox', component: () => import('./views/pages/checkbox/checkbox') },
        { path: '/radio', component: () => import('./views/pages/radio/radio') },
        { path: '/rangeslider', component: () => import('./views/pages/rangeslider/rangeslider') },
        { path: '/tab', component: () => import('./views/pages/tab/tab') },
        { path: '/table', component: () => import('./views/pages/table/table') },
        { path: '/htmltable', component: () => import('./views/pages/table/htmlTable') },
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
        { path: '/scroll', component: () => import('./views/pages/scroll/scroll') },
        { path: '/parallax', component: () => import('./views/pages/parallax/parallax') }
      ]
    },
    {
      path: '/sideBarMenu',
      component: () => import('./views/pages/menu/mainLayout.vue'),
      children: [
        { path: '', component: () => import('./views/pages/menu/sideBarMenu.vue') }
      ]
    }
    // {
    //   path: '/test',
    //   beforeEnter (to, from, next) {
    //     // console.log('before entering in test router')
    //     // Vue.prototype.$SnackBar.create({
    //     //   message: 'before entering in test router',
    //     //   textcolor: 'text-white',
    //     //   bgcolor: 'bg-positive'
    //     // })
    //     SnackBarVue.create()
    //   },
    //   component: () => import('./views/pages/test/Parallax/parallaxScroll.vue')
    // },
    // {
    //   path: '/test',
    //   component: () => import('./views/pages/test/objectTest.vue')
    // },
    // {
    //   path: '/example',
    //   component: () => import('./views/examples/image')
    // }
  ]
})
