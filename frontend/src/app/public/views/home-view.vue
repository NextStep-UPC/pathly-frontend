<template>
  <div>
    <NavbarComponent :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />

    <section id="inicio" class="hero">
      <div class="hero-container">
        <div class="hero-image">
          <img :src="homePhoto" alt="Pathly Home" />
        </div>
        <div class="hero-text">
          <p class="description">
            {{ $t('home.intro') }}
          </p>
          <h3>{{ $t('home.slogan') }}</h3>
          <a href="#" class="btn start-btn">{{ $t('home.start') }}</a>
        </div>
      </div>
    </section>

    <section id="beneficios" class="benefits">
      <div class="benefits-container">
        <div class="benefits-logo">
          <img :src="logo" alt="Pathly Logo" />
        </div>
        <div class="benefits-text">
          <h2>{{ $t('home.benefitsTitle') }}</h2>
          <p>{{ $t('home.benefitsDescription') }}</p>
        </div>
      </div>
    </section>

    <section id="metas" class="goals">
      <div class="goals-container">
        <div class="goals-image">
          <img :src="goalsPhoto" alt="Our Goals Photo" />
        </div>
        <div class="goals-text">
          <ol>
            <li>{{ $t('home.goal1') }}</li>
            <li>{{ $t('home.goal2') }}</li>
            <li>{{ $t('home.goal3') }}</li>
            <li>{{ $t('home.goal4') }}</li>
            <li>{{ $t('home.goal5') }}</li>
          </ol>
        </div>
      </div>
    </section>

    <section id="equipo" class="team">
      <div class="team-container">
        <div class="team-image">
          <img :src="aboutPhoto" alt="About Us Photo" />
        </div>
        <div class="team-text">
          <h2>{{ $t('home.aboutTitle') }}</h2>
          <p>{{ $t('home.aboutDescription') }}</p>
        </div>
      </div>
    </section>
  </div>
  <FooterComponent />
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import NavbarComponent from '@/app/shared/components/navbar.component.vue';
import FooterComponent from '@/app/shared/components/footer.component.vue';

const { t } = useI18n();

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const logo = new URL('@/assets/images/pathly-logo.png', import.meta.url).href;
const homePhoto = new URL('@/assets/images/home-photo.png', import.meta.url).href;
const goalsPhoto = new URL('@/assets/images/our-goals-photo.png', import.meta.url).href;
const aboutPhoto = new URL('@/assets/images/about-us-photo.png', import.meta.url).href;
</script>

<style scoped>
@import '../../shared/styles/landing.css';
</style>