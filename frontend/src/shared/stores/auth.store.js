import { defineStore } from 'pinia';
import api from '@/shared/http.instance.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user') || 'null'),
        isReady: false, // ✅ nuevo flag
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
        role: (state) => state.user?.role,
    },

    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },

        setUser(user) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },

        setCredentials({ token, user }) {
            this.setToken(token);
            this.setUser(user);
        },

        logout() {
            this.token = null;
            this.user = null;
            this.isReady = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            delete api.defaults.headers.common['Authorization'];
        },

        async loadUserFromSession() {
            if (!this.token) {
                this.isReady = true;
                return;
            }

            try {
                const response = await api.get('/api/auth/me');
                this.setUser(response.data);
            } catch (error) {
                console.error('Error al cargar el usuario desde /api/auth/me:', error);
                this.logout();
            } finally {
                this.isReady = true;
            }
        },
    },
});