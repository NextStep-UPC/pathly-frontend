<template>
  <div class="profile-layout">
    <HomeSidebarComponent />
    <div class="profile-content">
      <HomeNavbarComponent />
      <section class="profile-page">
        <h1>Mi Perfil</h1>
        <ProfileForm />
      </section>
    </div>
  </div>
</template>

<script setup>
import ProfileForm from '../components/profile-form.component.vue';
import HomeNavbarComponent from '@/app/shared/components/home-navbar.component.vue';
import HomeSidebarComponent from '@/app/shared/components/home-sidebar.component.vue';
</script>

<style scoped>
.profile-layout {
  display: flex;
  min-height: 100vh;
  background-color: #f7f7f4;
}

.profile-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.profile-page {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
}

.profile-page h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #2f4f4f;
}
</style>