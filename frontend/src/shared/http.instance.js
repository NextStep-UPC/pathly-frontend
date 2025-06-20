import axios from 'axios';
import { useAuthStore } from '@/shared/stores/auth.store.js';

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api',
    timeout: 8000,
});

http.interceptors.request.use((config) => {
    const auth = useAuthStore();
    if (auth.token) config.headers.Authorization = `Bearer ${auth.token}`;
    return config;
});

http.interceptors.response.use(
    (r) => r,
    (err) => {
        console.error('[HTTP] Error:', err.response?.data ?? err.message);
        return Promise.reject(err);
    }
);

export default http;