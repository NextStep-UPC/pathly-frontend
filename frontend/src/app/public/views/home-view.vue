<template>
  <div>
    <HomeNavbarComponent :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />

    <section id="roles" class="roles">
      <h2 class="roles-title">{{ $t('home.selectRole') }}</h2>
      <div class="roles-container">
        <div class="role-card" @click="goTo('admin')">
          <h3>{{ $t('home.adminTitle') }}</h3>
          <p>{{ $t('home.adminDescription') }}</p>
        </div>
        <div class="role-card" @click="goTo('psychologist')">
          <h3>{{ $t('home.psychologistTitle') }}</h3>
          <p>{{ $t('home.psychologistDescription') }}</p>
        </div>
        <div class="role-card" @click="goTo('student')">
          <h3>{{ $t('home.studentTitle') }}</h3>
          <p>{{ $t('home.studentDescription') }}</p>
        </div>
      </div>
    </section>
    <HomeFooterComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import HomeNavbarComponent from '@/app/shared/components/home-navbar.component.vue';
import HomeFooterComponent from '@/app/shared/components/home-footer.component.vue';

const { t } = useI18n();
const router = useRouter();

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const validRoles = ['admin', 'psychologist', 'student'];

const goTo = (role) => {
  if (validRoles.includes(role)) {
    router.push(`/${role}`);
  } else {
    console.warn(`Ruta inválida: /${role}`);
  }
};
</script>

<style scoped>
@import '../../shared/styles/home.css';
</style>
