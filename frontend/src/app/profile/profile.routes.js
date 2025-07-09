import ProfileView from './views/profile-view.vue';

export const profileRoutes = [
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileView,
        meta: { requiresAuth: true },
    },
];