import { createRouter, createWebHistory } from 'vue-router';
// import homePage from '../assets/img/home.png';
// import homePage1 from '../assets/img/home1.png';
// import eam from '../assets/img/eam_money.png';
// import eam1 from '../assets/img/eam_money1.png';
// import game from '../assets/img/game.png';
// import game1 from '../assets/img/game1.png';
// import me from '../assets/img/me.png';
// import me1 from '../assets/img/me1.png';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    // meta: {
    //   isMenu: true,
    //   url: homePage1,
    //   src: homePage,
    //   text: 'Home',
    // },
    component: () => import('../views/home.vue'),
  },
  {
    path: '/promo',
    name: 'promo',
    component: () => import('../views/promo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
