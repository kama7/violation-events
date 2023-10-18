import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'violations-page',
        component: () => import('../pages/violations/ViolationsPage.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
