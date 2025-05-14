import { createApp } from 'vue';
import App from './App.vue';
import router from './app.routes';
import i18n from './i18n';

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

import './app/shared/styles/theme.css';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(PrimeVue);

app.mount('#app');
