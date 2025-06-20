import { authService } from './auth.service';
import { useAuthStore } from '@/shared/stores/auth.store';

export function useLogin() {
  const auth = useAuthStore();

  const login = async ({ email, password }) => {
    const response = await authService.login({ email, password });
    if (!response?.token || !response?.user) {
      throw new Error('Credenciales inválidas');
    }
    auth.setCredentials(response);
  };

  return { login };
}