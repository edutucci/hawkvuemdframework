import Vue from 'vue'
import Router from 'vue-router'
import pageCss from './views/main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home'),
      children: [
        { path: '', component: pageCss },
        { path: '/spacing', component: () => import('./views/css/spacing') },
        { path: '/flexbox', component: () => import('./views/css/flexbox') },
        { path: '/textalignment', component: () => import('./views/css/textalignment') },
        { path: '/positioning', component: () => import('./views/css/positioning') },
        { path: '/cssothers', component: () => import('./views/css/others') },
        { path: '/buttons', component: () => import('./views/buttons') },
        { path: '/icon', component: () => import('./views/icon') },
        { path: '/textfield', component: () => import('./views/textfield') },
        { path: '/search', component: () => import('./views/search') },
        { path: '/card', component: () => import('./views/card') },
        { path: '/menu', component: () => import('./views/menu') },
        { path: '/list', component: () => import('./views/list') },
        { path: '/checkbox', component: () => import('./views/checkbox') },
        { path: '/radio', component: () => import('./views/radio') },
        { path: '/select', component: () => import('./views/select') },
        { path: '/tab', component: () => import('./views/tab') },
        { path: '/table', component: () => import('./views/table') },
        { path: '/toolbar', component: () => import('./views/toolbar') },
        { path: '/modal', component: () => import('./views/modal') },
        { path: '/DateTime', component: () => import('./views/dateTime') },
        { path: '/toggle', component: () => import('./views/toggle') }
      ]
    },
    {
      path: '/home',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/home')
    }
  ]
})
