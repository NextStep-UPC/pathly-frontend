export const studentRoutes = [
    {
        path: '/students',
        name: 'TestView',
        component: () => import('./views/test-view.vue'),
        meta: {
            requiresAuth: true,
            roles: ['Normal']
        }
    },
];