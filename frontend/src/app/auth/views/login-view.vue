<template>
  <section class="login">
    <div class="login-container">
      <LoginForm />
      <div class="login-image">
        <img :src="image" alt="Login Image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import LoginForm from '../components/login-form.component.vue';
const image = new URL('@/assets/images/login-photo.png', import.meta.url).href;
</script>

<style scoped>
@import '../../shared/styles/login.css';
</style>