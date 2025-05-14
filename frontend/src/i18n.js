import { createI18n } from 'vue-i18n';
import es from './app/shared/locales/es.json';
import en from './app/shared/locales/en.json';

const savedLang = localStorage.getItem('lang') || 'es';

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
});

export default i18n;