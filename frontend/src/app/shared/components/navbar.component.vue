<template>
  <header class="header">
    <div class="header-container">
      <img :src="logo" alt="Pathly Logo" class="logo" />

      <nav class="nav" :class="{ active: isMenuOpen }" id="nav-menu">
        <div class="nav-left">
          <ul class="nav-list">
            <li><a href="#inicio">{{ $t('navbar.home') }}</a></li>
            <li><a href="#beneficios">{{ $t('navbar.benefits') }}</a></li>
            <li><a href="#metas">{{ $t('navbar.goals') }}</a></li>
            <li><a href="#equipo">{{ $t('navbar.team') }}</a></li>
          </ul>
        </div>

        <div class="auth-buttons">
          <RouterLink to="/login" class="btn login-btn">{{ $t('navbar.login') }}</RouterLink>
          <RouterLink to="/register" class="btn register-btn">{{ $t('navbar.register') }}</RouterLink>

          <select v-model="locale" @change="changeLanguage" class="lang-select">
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>
      </nav>

      <button class="hamburger" @click="$emit('toggleMenu')" id="hamburger">☰</button>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

defineProps({
  isMenuOpen: Boolean
});

const { locale } = useI18n();

const changeLanguage = () => {
  localStorage.setItem('lang', locale.value);
};

const logo = new URL('@/assets/images/pathly-logo.png', import.meta.url).href;
</script>

<style scoped>
@import '../../shared/styles/landing.css';

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-left {
  display: flex;
}

.nav-list {
  display: flex;
  gap: 1.5rem;
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
}

.lang-select {
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
}
</style>