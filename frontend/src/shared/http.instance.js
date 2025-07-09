// src/shared/http.instance.js
import axios from 'axios';

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:5198/api',
    timeout: 8000,
});

http.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});