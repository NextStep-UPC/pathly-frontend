import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/shared/stores/auth.store.js';

import { publicRoutes } from '@/app/public/public.routes.js';
import { authRoutes } from '@/app/auth/auth.routes.js';
import { profileRoutes } from '@/app/profile/profile.routes.js';
import { sessionsRoutes } from '@/app/sessions/sessions.routes.js';

const routes = [
  ...publicRoutes,
  ...authRoutes,
  ...profileRoutes,
  ...sessionsRoutes,
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore();

  // 🔄 Esperamos a que se cargue el usuario si no está listo
  if (!auth.isReady) {
    await auth.loadUserFromSession();
  }

  // Si la ruta requiere autenticación y no está autenticado
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next({ path: '/login', query: { redirect: to.fullPath } });
  }

  // Si es una ruta de invitados y el usuario ya está autenticado
  if (to.meta.guest && auth.isAuthenticated) {
    return next('/');
  }

  // Si la ruta tiene restricción de roles
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