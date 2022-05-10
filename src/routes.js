import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/pages/home';
import About from '@/pages/about';
import NotFoundPage from './pages/notFound';

const routerHistory = createWebHashHistory();

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFoundPage,
    },
  ],
});

export default routers;
