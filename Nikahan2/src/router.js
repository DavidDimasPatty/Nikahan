import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import Galeri from './views/Galeri.vue';
import Error from './views/Error.vue';

const routes = [
  {
    path: '/',
    name: 'Error',
    component: Error
  },
  {
    path: '/:id/:visitor',
    name: 'Home',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (!to.params.id || !to.params.visitor) {
        next({ name: 'Error' });
      } else {
        next();
      }
    }
  },
  {
    path: '/Galeri/:id/:visitor',
    name: 'Galeri',
    component: Galeri,
    beforeEnter: (to, from, next) => {
      if (!to.params.id || !to.params.visitor) {
        next({ name: 'Error' });
      } else {
        next();
      }
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'Error' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
