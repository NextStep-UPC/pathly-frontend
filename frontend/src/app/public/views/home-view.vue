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

    <section class="plans">
      <h2 class="plans-title">Nuestros Planes</h2>
      <div class="plans-container">
        <div class="plan-card active">
          <h3>Plan Gratuito</h3>
          <p class="price">S/ 0</p>
          <ul>
            <li>Test vocacional</li>
            <li>Resultados inmediatos</li>
            <li>Acceso a informes básicos</li>
          </ul>
          <button class="btn selected" disabled>En uso</button>
        </div>

        <div class="plan-card premium">
          <h3>Plan Premium</h3>
          <p class="price">S/ 29.90</p>
          <ul>
            <li>Todo lo del plan gratuito</li>
            <li>Asesoría personalizada</li>
            <li>Informes detallados</li>
            <li>Seguimiento continuo</li>
          </ul>
          <button class="btn upgrade">Adquirir</button>
        </div>
      </div>

      <div class="plan-comparison">
        <h3>Comparación de Beneficios</h3>
        <table>
          <thead>
            <tr>
              <th>Funcionalidad</th>
              <th>Gratuito</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test vocacional</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Informes básicos</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Asesoría personalizada</td>
              <td>❌</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Informes detallados</td>
              <td>❌</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Seguimiento</td>
              <td>❌</td>
              <td>✔️</td>
            </tr>
          </tbody>
        </table>
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
