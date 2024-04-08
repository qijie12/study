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
  {
    path:'/unRegister',
    name:'unRegister',
    component:() =>import('../views/login/unRegister.vue'),
  },
  {
    path:'/leftList',
    name:'leftList',
    component:()=>import('../views/leftList.vue'),
  },
  {
    path:'/support',
    name:'support',
    component:()=>import('../views/login/support.vue'),
  },
  {
    path:'/List',
    name:'List',
    component:()=>import('../views/List/Adventure.vue'),
  },
  {
    path:'/Sports',
    name:'Sports',
    component:()=>import('../views/List/Sports.vue'),
  },
  {
    path:'/Puzzle',
    name:'Puzzle',
    component:()=>import('../views/List/Puzzle.vue'),
  },
  {
    path:'/Action',
    name:'Action',
    component:()=>import('../views/List/Action.vue')
  },
  {
    path:'/Card',
    name:'Card',
    component:()=>import('../views/List/Card.vue')
  },
  {
    path:'/Car',
    name:'Car',
    component:()=>import('../views/List/Car.vue')
  },
  {
    path:'/Bike',
    name:'Bike',
    component:()=>import('../views/List/Bike.vue')
  },
];
 

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
