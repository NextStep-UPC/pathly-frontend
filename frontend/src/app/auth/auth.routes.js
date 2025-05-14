import LoginView from './views/login-view.vue';
import RegisterView from './views/register-view.vue';

export const authRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  }
];
