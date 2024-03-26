import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/live',
    name: 'live',
    component: () => import('../views/live.vue'),
  },
  // { path: '/num',
  //   name: 'num',
  //   component: () => import('../views/num.vue')
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
