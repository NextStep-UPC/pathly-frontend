import { http } from '@/shared/http.instance';

export const authService = {
    login: (credentials) =>
        http.post('/auth/login', credentials).then((r) => r.data.data),

    register: (payload) =>
        http.post('/auth/register', payload).then((r) => r.data.data),

    refresh: () => http.post('/auth/refresh').then((r) => r.data.data),
};