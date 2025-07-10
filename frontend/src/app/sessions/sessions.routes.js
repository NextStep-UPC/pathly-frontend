import SessionView from './views/session-view.vue';

export const sessionsRoutes = [
    {
        path: '/sessions',
        name: 'sessions',
        component: SessionView,
        meta: {
            requiresAuth: true,
            roles: ['admin', 'psychologist', 'student'],
        },
    },
    {
        path: '/sessions/mine',
        name: 'my-sessions',
        component: SessionView,
        meta: {
            requiresAuth: true,
            roles: ['admin', 'psychologist', 'student'],
        },
    },
    {
        path: '/sessions/manage',
        name: 'manage-sessions',
        component: SessionView,
        meta: {
            requiresAuth: true,
            roles: ['admin'],
        },
    },
];
