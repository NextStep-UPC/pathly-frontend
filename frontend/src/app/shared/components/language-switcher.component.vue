<template>
  <select v-model="selectedLang" @change="changeLang" class="lang-select">
    <option value="es">🇪🇸 ES</option>
    <option value="en">🇺🇸 EN</option>
  </select>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const selectedLang = ref(locale.value);

const changeLang = () => {
  locale.value = selectedLang.value;
  localStorage.setItem('lang', selectedLang.value);
};
</script>

<style scoped>
.lang-select {
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #374151;
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  transition: all 0.2s ease;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='%239ca3af' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;
  padding-right: 2rem;
}

.lang-select:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.lang-select:hover {
  background-color: #f3f4f6;
  border-color: #9ca3af;
}
</style>