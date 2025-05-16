<template>
  <select v-model="selectedLang" @change="changeLang" class="lang-select">
    <option value="es">ES</option>
    <option value="en">EN</option>
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
  padding: 0.4rem 0.7rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-weight: 600;
  background-color: #fff;
  cursor: pointer;
}
</style>
