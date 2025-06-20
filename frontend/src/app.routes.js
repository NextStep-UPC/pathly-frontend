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

// Redirección según rol
function redirectByRole(role) {
  switch (role) {
    case 'Admin':
      return '/admin';
    case 'Psychologist':
      return '/psychologist';
    case 'Student':
    case 'Normal':
      return '/students';
    default:
      return '/';
  }
}

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  // Rutas protegidas
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next({ path: '/login', query: { redirect: to.fullPath } });
  }

  // Rutas solo para invitados (login, register, etc.)
  if (to.meta.guest && auth.isAuthenticated) {
    return next(redirectByRole(auth.role));
  }

  // Rutas con restricción de roles
  if (
      to.meta.roles &&
      Array.isArray(to.meta.roles) &&
      auth.isAuthenticated &&
      !to.meta.roles.includes(auth.role)
  ) {
    return next(redirectByRole(auth.role)); // Redirige al home de su rol
  }

  next();
});

export default router;