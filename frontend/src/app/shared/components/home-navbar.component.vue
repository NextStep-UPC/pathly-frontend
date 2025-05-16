<template>
  <header class="header">
    <div class="header-container">
      <img :src="logo" alt="Pathly Logo" class="logo" />

      <div class="auth-buttons">
        <RouterLink to="/login" class="btn login-btn">{{ $t('navbar.login') }}</RouterLink>
        <RouterLink to="/register" class="btn register-btn">{{ $t('navbar.register') }}</RouterLink>
        <LanguageSwitcher />
      </div>

      <button class="hamburger" @click="$emit('toggleMenu')" id="hamburger">☰</button>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import LanguageSwitcher from './language-switcher.component.vue';

defineProps({
  isMenuOpen: Boolean
});

const logo = new URL('@/assets/images/pathly-logo.png', import.meta.url).href;
</script>

<style scoped>
@import '../../shared/styles/home.css';

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
}
</style>
