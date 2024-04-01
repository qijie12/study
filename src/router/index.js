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
];
 

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
