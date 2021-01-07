import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../views/StartPage.vue') },
    ],
  },
  {
    path: '/docs',
    component: () => import('../views/layouts/DocLayout.vue'),
    children: [
      { path: '', component: () => import('../views/StartPageDocs.vue') },
      // { path: 'installation', component: () => import('./views/guide/installation') },
      // { path: 'layout', component: () => import('./views/guide/layout') },
      // { path: 'page', component: () => import('./views/guide/page') },
      // { path: 'spacing', component: () => import('./views/css/spacing') },
      // { path: 'flexbox', component: () => import('./views/css/flexbox') },
      // { path: 'textalignment', component: () => import('./views/css/textalignment') },
      // { path: 'positioning', component: () => import('./views/css/positioning') },
      // { path: 'visibility', component: () => import('./views/css/visibility') },
      // { path: 'cssothers', component: () => import('./views/css/others') },
      // { path: 'borders', component: () => import('./views/css/borders') },
      { path: 'compimage', component: () => import('../views/pages/image/image') },
      { path: 'appbar', component: () => import('../views/pages/appbar/appbar.vue') },
      { path: 'buttons', component: () => import('../views/pages/buttons/buttons.vue') },
      // { path: 'buttongroup', component: () => import('./views/pages/buttons/buttonGroup') },
      { path: 'banner', component: () => import('../views/pages/banner/banner') },
      { path: 'icon', component: () => import('../views/pages/icon/icon') },
      // { path: 'input', component: () => import('./views/pages/input/input') },
      // { path: 'drawer', component: () => import('./views/pages/drawer/drawer') },
      { path: 'card', component: () => import('../views/pages/card/card') },
      { path: 'chip', component: () => import('../views/pages/chips/chips.vue') },
      { path: 'carousel', component: () => import('../views/pages/carousel/carousel') },
      // { path: 'menu', component: () => import('./views/pages/menu/menu') },
      { path: 'list', component: () => import('../views/pages/list/list.vue') },
      { path: 'collapsible', component: () => import('../views/pages/collapsible/collapsible') },
      { path: 'checkbox', component: () => import('../views/pages/checkbox/checkbox') },
      // { path: 'radio', component: () => import('./views/pages/radio/radio') },
      // { path: 'rangeslider', component: () => import('./views/pages/rangeslider/rangeslider') },
      // { path: 'tab', component: () => import('./views/pages/tab/tab') },
      // { path: 'table', component: () => import('./views/pages/table/table') },
      // { path: 'htmltable', component: () => import('./views/pages/table/htmlTable') },
      { path: 'dialog', component: () => import('../views/pages/dialog/dialog.vue') },
      { path: 'datetime', component: () => import('../views/pages/datetime/datetime.vue') },
      { path: 'toggle', component: () => import('../views/pages/toggle/toggle.vue') },
      { path: 'video', component: () => import('../views/pages/video/YoutubeVideo.vue') },
      // { path: 'sideBarMenu', component: () => import('./views/pages/menu/sideBarMenu.vue') },
      // { path: 'snack', component: () => import('./views/plugins/snack') },
      // { path: 'loading', component: () => import('./views/plugins/loading') },
      { path: 'fileupload', component: () => import('../views/pages/fileUpload/fileUpload') },
      { path: 'rating', component: () => import('../views/pages/rating/rating') },
      // { path: 'palleteColor', component: () => import('./views/guide/MaterialDesignColor') },
      // { path: 'scroll', component: () => import('./views/pages/scroll/scroll') },
      // { path: 'parallax', component: () => import('./views/pages/parallax/parallax') },
      // { path: 'buglist', component: () => import('./views/bugList.vue') }
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/test',
    component: () => import('../views/pages/Test.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
