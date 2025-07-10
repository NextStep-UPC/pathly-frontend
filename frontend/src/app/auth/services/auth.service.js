import http from '@/shared/http.instance';

export const authService = {
    login: ({ email, password }) =>
        http.post('/auth/login', { email, password }).then(res => res.data),
    register: data =>
        http.post('/auth/register', data).then(res => res.data),
    logout: () =>
        http.post('/auth/logout'),
};