<template>
  <section class="register">
    <div class="register-container">
      <RegisterForm />
      <div class="register-image">
        <img :src="image" alt="Register Image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import RegisterForm from '../components/register-form.component.vue';
const image = new URL('@/assets/images/register-photo.png', import.meta.url).href;
</script>

<style scoped>
@import '../../shared/styles/register.css';
</style>