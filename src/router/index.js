import { createRouter, createWebHistory } from 'vue-router';
import home from '../assets/img/home11-img.png';
import home_active from '../assets/img/home.png';
import promo from '../assets/img/promo-img.png';
import promo_active from '../assets/img/promo1-img.png';
import dice_active from '../assets/img/logo-dice.png';
import deposit from '../assets/img/deposit-img.png';
import me from '../assets/img/me-img.png';
import me_active from '../assets/img/me1.png';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      isMenu: true,
      url: home,
      active: home_active,
      title: 'Home',
    },
    component: () => import('../views/home.vue'),
  },
  {
    path: '/promo',
    name: 'promo',
    meta: {
      isMenu: true,
      url: promo,
      active: promo_active,
      title: 'Promo',
    },
    component: () => import('../views/promo.vue'),
  },
  {
    path: '/games',
    name: 'games',
    meta: {
      isMenu: true,
      url: dice_active,
      active: dice_active,
      title: 'Games',
    },
    component: () => import('../views/games.vue'),
  },
  {
    path: '/deposit',
    name: 'deposit',
    meta: {
      isMenu: true,
      url: deposit,
      active: deposit,
      title: 'Deposit',
    },
    component: () => import('../views/deposit.vue'),
  },
  {
    path: '/me',
    name: 'me',
    meta: {
      isMenu: true,
      url: me,
      active: me_active,
      title: 'Me',
    },
    component: () => import('../views/me.vue'),
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('../views/loginBox/hello.vue'),
  },
  {
    path: '/sign_in',
    name: 'sign_in',
    component: () => import('../views/loginBox/sign_in.vue'),
  },
  {
    path: '/deposit',
    name: 'deposit',
    component: () => import('../views/loginBox/register.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
