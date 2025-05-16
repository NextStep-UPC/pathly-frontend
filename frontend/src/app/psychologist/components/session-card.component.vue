<template>
  <aside class="sidebar">
    <h1 class="logo">PaT<span>HLY</span></h1>
    <nav>
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/estudiantes">Estudiantes</router-link></li>
        <li><router-link to="/calendario">Calendario</router-link></li>
        <li><router-link to="/mensajes">Mensajes</router-link></li>
        <li><router-link to="/herramientas">Herramientas</router-link></li>
        <li><router-link to="/informes">Informes</router-link></li>
        <li><router-link to="/perfil">Mi Perfil</router-link></li>
        <li><router-link to="/configuracion">Configuración</router-link></li>
      </ul>
    </nav>
    <button class="logout">Cerrar Sesión</button>
    <div class="plan-info">
      <p>Tu suscripción se renovará el 20 de junio de 2023</p>
      <button>Gestionar Plan</button>
    </div>
  </aside>
</template>

<script setup></script>

<style scoped>
@import '@/app/shared/styles/sidebar.css';
</style>
