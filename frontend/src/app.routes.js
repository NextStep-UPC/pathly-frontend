// src/app/app.routes.js
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/shared/stores/auth.store.js';

import { publicRoutes } from '@/app/public/public.routes.js';
import { authRoutes }   from '@/app/auth/auth.routes.js';
import { profileRoutes } from '@/app/profile/profile.routes.js';

const routes = [
  ...publicRoutes,
  ...authRoutes,
  ...profileRoutes,
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  // Si la ruta requiere autenticación y no está autenticado
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next({ path: '/login', query: { redirect: to.fullPath } });
  }

  // Si la ruta está marcada como “guest” y ya está autenticado
  if (to.meta.guest && auth.isAuthenticated) {
    return next('/');
  }

  // Control de acceso por roles
  if (
      Array.isArray(to.meta.roles) &&
      to.meta.roles.length > 0 &&
      auth.isAuthenticated &&
      !to.meta.roles.includes(auth.role)
  ) {
    return next('/');
  }

  next();
});

export default router;