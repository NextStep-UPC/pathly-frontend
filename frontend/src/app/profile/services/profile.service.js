import http from '@/shared/http.instance';

export const profileService = {
    getMe: () =>
        http.get('/profiles/me').then(res => res.data),

    update: payload =>
        http.put('/profiles/me', payload).then(res => res.data),
};