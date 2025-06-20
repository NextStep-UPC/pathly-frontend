import HomeView from './views/home-view.vue';

export const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  }
];