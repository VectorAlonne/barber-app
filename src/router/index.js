import { createRouter, createWebHistory } from '@ionic/vue-router';

import WelcomePage from '../pages/WelcomePage.vue';
const routes = [
  {
    path: '/',
    component: WelcomePage
  },

  {
    path: '/request/:type',
    component: () => import('../pages/RequestDetails.vue')
  },

  {
    path: '/confirm',
    component: () => import('../pages/ConfirmPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
