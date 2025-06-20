import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './shared/stores/auth.store.js';

import { authRoutes } from './app/auth/auth.routes.js';
import { publicRoutes } from './app/public/public.routes.js';
import { studentRoutes } from './app/student/student.routes.js';
import { psychologistRoutes } from './app/psychologist/psychologist.routes.js';
import { adminRoutes } from './app/admin/admin.routes.js';

const routes = [
  ...publicRoutes,
  ...authRoutes,
  ...studentRoutes,
  ...psychologistRoutes,
  ...adminRoutes,
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

  if (to.meta.guest && auth.isAuthenticated) {
    return next('/');
  }

  if (
      to.meta.roles &&
      Array.isArray(to.meta.roles) &&
      auth.isAuthenticated &&
      !to.meta.roles.includes(auth.role)
  ) {
    return next('/');
  }

  next();
});

export default router;