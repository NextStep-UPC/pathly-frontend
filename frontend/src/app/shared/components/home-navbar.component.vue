<template>
  <header class="header">
    <div class="header-container">
      <img :src="logo" alt="Pathly Logo" class="logo" />

      <div class="user-profile" v-if="auth.isAuthenticated">
        <button class="profile-btn" @click="toggleDropdown">
          <img :src="profileImage" alt="Profile" class="profile-img" />
        </button>

        <div v-if="showDropdown" class="dropdown-menu">
          <div class="user-info">
            <div class="user-name">{{ auth.user?.name }} {{ auth.user?.lastName }}</div>
            <div class="user-email">{{ auth.user?.email }}</div>
          </div>

          <!-- Configuración -->
          <RouterLink to="/settings" class="dropdown-item link-item">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33
             1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51
             1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06
             a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09
             a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06
             a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09
             a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09
             a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06
             a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09
             a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <span>{{ $t('navbar.settings') }}</span>
          </RouterLink>

          <!-- Idioma -->
          <div class="dropdown-item language-item">
            <div class="language-label">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2c4.5 4.5 4.5 11.5 0 16M12 2c-4.5 4.5-4.5 11.5 0 16" />
              </svg>
              <span>{{ $t('navbar.language') }}</span>
            </div>
            <LanguageSwitcher class="language-switcher" />
          </div>

          <!-- Separador -->
          <hr class="dropdown-divider" />

          <!-- Cerrar sesión -->
          <button class="dropdown-item logout" @click="logout">
            <svg class="icon" viewBox="0 0 16 16" fill="currentColor">
              <path d="M15 8c0 .55-.45 1-1 1h-4v1l-2-2 2-2v1h4c.55 0 1 .45 1 1z"/>
              <path d="M10 2a1 1 0 011 1v2h-1V3H4v10h6v-2h1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h7z"/>
            </svg>
            <span>{{ $t('navbar.logout') }}</span>
          </button>
        </div>
      </div>

      <div class="auth-buttons" v-else>
        <RouterLink to="/login" class="btn login-btn">{{ $t('navbar.login') }}</RouterLink>
        <RouterLink to="/register" class="btn register-btn">{{ $t('navbar.register') }}</RouterLink>
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { useAuthStore } from '@/shared/stores/auth.store';
import LanguageSwitcher from './language-switcher.component.vue';

const auth = useAuthStore();
const router = useRouter();
const logo = new URL('@/assets/images/pathly-logo.png', import.meta.url).href;
const profileImage = new URL('@/assets/images/default-profile.png', import.meta.url).href;

const showDropdown = ref(false);
const toggleDropdown = () => (showDropdown.value = !showDropdown.value);

function logout() {
  auth.logout();
  router.push('/login');
}
</script>

<style scoped>
@import '../../shared/styles/home.css';

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
}

.user-profile {
  position: relative;
  margin-left: auto;
}

.profile-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  padding: 1rem;
  z-index: 100;
  min-width: 240px;
  text-align: left;
  font-size: 0.95rem;
}

.user-info {
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.4;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.9rem;
}

.logout {
  color: #ef4444;
}

.icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.link-item {
  color: inherit;
  text-decoration: none;
}
.link-item:hover {
  color: #2563eb;
}

.language-label {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Aumenta el espacio entre icono y texto */
  font-size: 0.9rem;
  font-weight: 500;
  color: #111827;
}

.dropdown-divider {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 0.75rem 0;
}

.user-info {
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.4;
}

.user-name {
  font-weight: 600;
}

.user-email {
  font-size: 0.85rem;
  color: #6b7280;
  word-break: break-word;
}

.language-item {
  align-items: center;
  justify-content: space-between;
}

.language-switcher select {
  padding: 0.3rem 0.5rem;
  font-size: 0.85rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.dropdown-divider {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 0.75rem 0;
}
</style>