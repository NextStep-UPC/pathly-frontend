import { authService }    from './auth.service.js';
import { profileService } from '@/app/profile/services/profile.service.js';
import { useAuthStore }   from '@/shared/stores/auth.store.js';

export function useRegister() {
    const auth = useAuthStore();

    /**
     * @param {{
     *   name: string,
     *   lastname: string,
     *   birthdate: string,
     *   phone: string,
     *   email: string,
     *   password: string,
     *   confirmPassword: string
     * }} form
     */
    async function register(form) {
        // 1) Validación local
        if (form.password !== form.confirmPassword) {
            throw new Error('Las contraseñas no coinciden');
        }

        // 2) Mapeo EXACTO de tu formulario a RegisterRequestDto
        const dto = {
            firstName:   form.name,
            lastName:    form.lastname,
            birthDate:   form.birthdate || null,
            phoneNumber: form.phone      || null,
            email:       form.email,
            password:    form.password,
        };

        // 3) Llamada al endpoint de registro
        const { userId, token } = await authService.register(dto);
        if (!token || !userId) {
            throw new Error('Registro fallido');
        }

        // 4) Guardar token para que Axios lo inyecte
        auth.setToken(token);

        // 5) Traer y guardar perfil completo
        const user = await profileService.getMe();
        auth.setUser(user);
    }

    return { register };
}