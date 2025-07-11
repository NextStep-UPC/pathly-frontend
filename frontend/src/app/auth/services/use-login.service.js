import { authService }    from './auth.service.js';
import { profileService } from '@/app/profile/services/profile.service.js';
import { useAuthStore }   from '@/shared/stores/auth.store.js';

export function useLogin() {
  const auth = useAuthStore();

  async function login({ email, password }) {
    // 1) Autenticarse y recibir { token, userId }
    const { token, userId } = await authService.login({ email, password });
    if (!token || !userId) {
      throw new Error('Credenciales inválidas');
    }

    // 2) Guardar inmediatamente el token (para que el interceptor lo use)
    auth.setToken(token);

    // 3) Con el token ya presente, pedir el perfil completo
    const user = await profileService.getMe();

    // 4) Guardar el usuario en el store
    auth.setUser(user);
  }

  return { login };
}