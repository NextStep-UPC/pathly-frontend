import { createRouter, createWebHistory } from 'vue-router';

import { authRoutes } from './app/auth/auth.routes.js';
import { publicRoutes } from './app/public/public.routes.js';
// import { studentRoutes } from './app/student/student.routes.js';
// import { psychologistRoutes } from './app/psychologist/psychologist.routes.js';
// import { adminRoutes } from './app/admin/admin.routes.js';

const routes = [
  ...publicRoutes,      // Landing, ayuda, contacto
  ...authRoutes,        // Login, registro
  // ...studentRoutes,  // Test, resultados, citas
  // ...psychologistRoutes, // Panel del orientador
  // ...adminRoutes,    // Dashboard administrativo

  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;