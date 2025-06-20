import { authService } from './auth.service';
import { useAuthStore } from '@/shared/stores/auth.store';

export function useLogin() {
  const auth = useAuthStore();

  const login = async (email, password) => {
    const { token, user } = await authService.login({ email, password });
    auth.setCredentials({ token, user });
  };

  return { login };
}