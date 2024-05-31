import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import Galeri from './views/Galeri.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:id/:visitor',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/Galeri/:id/:visitor',
      name: 'Galeri',
      component: Galeri
    },
  ]
});

export default router;