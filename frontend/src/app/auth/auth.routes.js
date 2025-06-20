import LoginView from './views/login-view.vue';
import RegisterView from './views/register-view.vue';

export const authRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { guest: true },
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: { guest: true },
  },
];