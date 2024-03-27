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
    component: () => import('../views/homePage.vue'),
  },
  { path: '/video',
    name: 'video',
    component: () => import('../views/video.vue')
  },
  {path:'/teleplay',
  name:'teleplay',
  component: () =>import('../views/teleplay.vue')
  },
  {
    path:'/movie',
    name:'movie',
    component: () =>import('../views/movie.vue')
  },
  {
    path:'/variety',
    name:'variety',
    component:() =>import ('../views/variety.vue')
  },
  {
    path:'/cartoon',
    name:'cartoon',
    component: () =>import ('../views/cartoon.vue')
  },
  {
    path:'/children',
    name:'children',
    component:() =>import('../views/children.vue')
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
