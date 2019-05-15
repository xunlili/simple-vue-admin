import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      hidden: true,
      component: () => import('./views/Login.vue')
    },
    {
      path: '/404',
      name: '',
      hidden: true,
      component: () => import('./views/NotFound.vue'),
    },
    // {
    //   path: '/*',
    //   hidden: true,
    //   component: () => import('./views/NotFound.vue'),
    // },
    {
      path: '/',
      name: {
        cn: '导航一',
        hk: '導航一',
      },
      iconCls: 'el-icon-tickets',
      component: () => import('./views/Home.vue'),
      children: [
        { path: '/one-1', name: { cn: '导航1-a',hk:'導航1-a' }, component: () => import('./views/nav-one/nav-one-a.vue') },
        { path: '/two-1', name: { cn: '导航1-b',hk:'導航1-b' }, component: () => import('./views/nav-one/nav-one-b.vue') },
        { path: '/three-1', name: { cn: '导航1-c',hk:'導航1-c' }, component: () => import('./views/nav-one/nav-one-c.vue') },
      ]
    },
    {
      path: '/',
      name:  {
        cn: '导航二',
        hk: '導航二',
      },
      iconCls: 'el-icon-zoom-in',
      component: () => import('./views/Home.vue'),
      children: [
        { path: '/one-2', name: { cn: '导航2-a',hk:'導航2-a' }, component: () => import('./views/nav-two/nav-two-a.vue') },
        { path: '/two-2', name: { cn: '导航2-b',hk:'導航2-b' }, component: () => import('./views/nav-two/nav-two-b.vue') },
        { path: '/three-2', name: { cn: '导航2-c',hk:'導航2-c' }, component: () => import('./views/nav-two/nav-two-c.vue') },
      ]
    },
    {
      path: '/',
      name:  {
        cn: '导航三',
        hk: '導航三',
      },
      iconCls: 'el-icon-error',
      component: () => import('./views/Home.vue'),
      children: [
        { path: '/one-3', name: { cn: '导航3-c',hk:'導航3-c' }, component: () => import('./views/nav-three/nav-three-a.vue') },
        { path: '/two-3', name: { cn: '导航3-c',hk:'導航3-c' }, component: () => import('./views/nav-three/nav-three-b.vue') },
        { path: '/three-3', name: { cn: '导航3-c',hk:'導航3-c' }, component: () => import('./views/nav-three/nav-three-c.vue') },
      ]
    }
  ]
})
