import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/start'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/components/Home.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/start',
      name: 'start',
      component: () => import(/* webpackChunkName: "start" */ '@/components/Start.vue'),
      meta: {
        index: 1
      }
    },
    {
        path: '/BaseInfo',
        name: 'BaseInfo',
        component: () => import(/* webpackChunkName: "home" */ '@/components/BaseInfo.vue'),
        meta: {
          index: 1
        }
    },
    {
      path: '/AssetInfo',
      name: 'AssetInfo',
      component: () => import(/* webpackChunkName: "home" */ '@/components/AssetInfo.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/Result',
      name: 'Result',
      component: () => import(/* webpackChunkName: "home" */ '@/components/Result.vue'),
      meta: {
        index: 1
      }
    },
  ]
})
export default router