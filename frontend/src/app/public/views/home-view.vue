<template>
  <div class="home-layout">
    <HomeSidebarComponent />
    <div class="home-content">
      <HomeNavbarComponent :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />

      <section id="roles" class="roles">
        <h2 class="roles-title">{{ $t('home.selectRole') }}</h2>
        <div class="roles-container">
          <div
              v-if="role === 'admin'"
              class="role-card"
              @click="goTo('admin')"
          >
            <h3>{{ $t('home.adminTitle') }}</h3>
            <p>{{ $t('home.adminDescription') }}</p>
          </div>
          <div
              v-if="role === 'psychologist'"
              class="role-card"
              @click="goTo('psychologist')"
          >
            <h3>{{ $t('home.psychologistTitle') }}</h3>
            <p>{{ $t('home.psychologistDescription') }}</p>
          </div>
          <div
              v-if="role === 'student'"
              class="role-card"
              @click="goTo('student')"
          >
            <h3>{{ $t('home.studentTitle') }}</h3>
            <p>{{ $t('home.studentDescription') }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/shared/stores/auth.store';
import HomeNavbarComponent from '@/app/shared/components/home-navbar.component.vue';
import HomeSidebarComponent from '@/app/shared/components/home-sidebar.component.vue';

const { t } = useI18n();
const router = useRouter();
const auth = useAuthStore();

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const role = computed(() => auth.user?.role || '');

const goTo = (role) => {
  const validRoles = ['admin', 'psychologist', 'student'];
  if (validRoles.includes(role)) {
    router.push(`/${role}`);
  } else {
    console.warn(`Ruta inválida: /${role}`);
  }
};
</script>

<style scoped>
@import '../../shared/styles/home.css';

.home-layout {
  display: flex;
}

.home-content {
  flex: 1;
}
</style>