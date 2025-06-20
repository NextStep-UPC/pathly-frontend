import { authService } from './auth.service';
import { useAuthStore } from '@/shared/stores/auth.store';

export function useRegister() {
    const auth = useAuthStore();

    const register = async (payload) => {
        const { token, user } = await authService.register(payload);
        auth.setCredentials({ token, user });
    };

    return { register };
}