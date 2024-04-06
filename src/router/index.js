import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
  path:'/home',
  name:'home',
  component :() => import('../views/home.vue'),
  },
  {
    path:'/Eam',
    name:'Eam',
    component :() => import('../views/Eam.vue'),
  },
  {
    path:'/games',
    name:'games',
    component :() =>import('../views/games.vue'),
  },
  {
    path:'/Me',
    name:'Me',
    component :() =>import('../views/Me.vue'),
  },
  {
    path:'/login',
    name:'login',
    component : () =>import ('../views/login/index.vue'),
  },
  {
    path:'/sign_in',
    name:'sign_in',
    component :() =>import('../views/login/sign_in.vue'),
  },
  {
    path:'/Register',
    name:'Register',
    component:() =>import('../views/login/Register.vue'),
  },
];
 

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
