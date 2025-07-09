<template>
  <section class="profile-page">
    <h1>Mi Perfil</h1>
    <ProfileForm />
  </section>
</template>

<script setup>
import ProfileForm from '../components/profile-form.component.vue';
</script>

<style scoped>
.profile-page { max-width: 600px; margin: auto; padding: 1rem; }
</style>