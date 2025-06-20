import dashboardView from './views/dashboard-view.vue';

export const psychologistRoutes = [
    {
        path: '/psychologist',
        name: 'PsychologistDashboard',
        component: dashboardView,
        meta: {
            requiresAuth: true,
            roles: ['Psychologist']
        }
    },
];