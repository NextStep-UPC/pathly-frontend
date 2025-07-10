<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/shared/stores/auth.store';
import { RouterLink } from 'vue-router';

const auth = useAuthStore();
const role = auth.user?.role;
const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div>
    <!-- Botón hamburguesa -->
    <button class="sidebar-toggle" @click="toggleSidebar">☰</button>

    <!-- Sidebar flotante -->
    <transition name="slide">
      <aside v-show="isOpen" class="sidebar">
        <ul class="sidebar-menu">
          <li><RouterLink to="/">🏠 Inicio</RouterLink></li>
          <li><RouterLink to="/profile">👤 Perfil</RouterLink></li>
          <li><RouterLink to="/sessions">📅 Sesiones</RouterLink></li>
          <li v-if="role === 'psychologist'">
            <RouterLink to="/psychologist/panel">🧠 Panel Psicólogo</RouterLink>
          </li>
          <li v-if="['admin', 'student'].includes(role)">
            <RouterLink to="/vocational-tests">📝 Test Vocacionales</RouterLink>
          </li>
          <li v-if="role === 'admin'">
            <RouterLink to="/admin/panel">⚙️ Panel Admin</RouterLink>
          </li>
        </ul>
      </aside>
    </transition>
  </div>
</template>

<style scoped>
.sidebar-toggle {
  position: fixed;
  top: 10px;
  left: 10px;
  background: #c6d5c9;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 22px;
  cursor: pointer;
  z-index: 1100;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.sidebar {
  width: 240px;
  background-color: #c6d5c9;
  height: 100vh;
  padding: 20px;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 80px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-menu a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 16.5px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.sidebar-menu a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}

/* Animación del slide */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>