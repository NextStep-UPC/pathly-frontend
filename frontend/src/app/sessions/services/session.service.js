import http from '@/shared/http.instance';

export const sessionService = {
    book: (payload) =>
        http.post('/sessions/book', payload).then(res => res.data),

    cancel: (id, payload) =>
        http.post(`/sessions/${id}/cancel`, payload).then(res => res.data),

    assign: (id) =>
        http.post(`/sessions/${id}/assign`).then(res => res.data),

    finish: (id) =>
        http.post(`/sessions/${id}/finish`).then(res => res.data),

    // Común / autenticado
    mySessions: () =>
        http.get('/sessions/me').then(res => res.data),

    getPsychologists: () =>
        http.get('/sessions/psychologists').then(res => res.data),

    // Admin
    listAll: () =>
        http.get('/sessions').then(res => res.data),

    listByState: (state) =>
        http.get(`/sessions?state=${state}`).then(res => res.data),

    listPending: () =>
        http.get('/sessions/pending').then(res => res.data),

    listConfirmed: () =>
        http.get('/sessions/confirmed').then(res => res.data),

    listCompleted: () =>
        http.get('/sessions/completed').then(res => res.data),
};