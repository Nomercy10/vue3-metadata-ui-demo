import { createRouter, createWebHistory } from 'vue-router'
import Demo1Main from '../views/Demo1Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo1Main
    },
    {
      path: '/demo2',
      name: 'demo2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Demo2Main.vue')
    }
  ]
})

export default router
