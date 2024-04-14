import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../assets/img/home.png';
import homePage1 from '../assets/img/home1.png';
import eam from '../assets/img/eam_money.png';
import eam1 from '../assets/img/eam_money1.png';
import game from '../assets/img/game.png';
import game1 from '../assets/img/game1.png';
import me from '../assets/img/me.png';
import me1 from '../assets/img/me1.png';

const routes = [
  {
    path: '/',
    // redirect: '/home'
    redirect: '/home',
  },

  {
    path: '/home',
    name: 'home',
    meta: {
      isMenu: true,
      url: homePage1,
      src: homePage,
      text: 'Home',
    },
    component: () => import('../views/home.vue'),
  },
  {
    path: '/Eam',
    name: 'Eam',
    meta: {
      isMenu: true,
      url: eam,
      src: eam1,
      text: 'Eam moeny',
    },
    component: () => import('../views/Eam.vue'),
  },
  {
    path: '/games',
    name: 'games',
    meta: {
      isMenu: true,
      url: game,
      src: game1,
      text: 'Games',
    },
    component: () => import('../views/games.vue'),
  },
  {
    path: '/Me',
    name: 'Me',
    meta: {
      isMenu: true,
      url: me,
      src: me1,
      text: 'Me',
    },
    component: () => import('../views/Me.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/sign_in',
    name: 'sign_in',
    component: () => import('../views/login/sign_in.vue'),
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/login/Register.vue'),
  },
  {
    path: '/unRegister',
    name: 'unRegister',
    component: () => import('../views/login/unRegister.vue'),
  },
  {
    path: '/leftList',
    name: 'leftList',
    component: () => import('../views/leftList.vue'),
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/login/support.vue'),
  },
  {
    path: '/List',
    name: 'List',
    component: () => import('../views/List/Adventure.vue'),
  },
  {
    path: '/Sports',
    name: 'Sports',
    component: () => import('../views/List/Sports.vue'),
  },
  {
    path: '/Puzzle',
    name: 'Puzzle',
    component: () => import('../views/List/Puzzle.vue'),
  },
  {
    path: '/Action',
    name: 'Action',
    component: () => import('../views/List/Action.vue'),
  },
  {
    path: '/Card',
    name: 'Card',
    component: () => import('../views/List/Card.vue'),
  },
  {
    path: '/Car',
    name: 'Car',
    component: () => import('../views/List/Car.vue'),
  },
  {
    path: '/Bike',
    name: 'Bike',
    component: () => import('../views/List/Bike.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
