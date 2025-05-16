<template>
  <div class="dashboard">
    <Sidebar />
    <main class="main-content">
      <Header />
      <section class="cards">
        <DashboardCard title="Estudiantes activos" value="24" subtext="+3 este mes" />
        <DashboardCard title="Sesiones programadas" value="12" subtext="Para los próximos 7 días" />
        <DashboardCard title="Horas de consulta" value="32" subtext="+8 vs. semana anterior" />
        <DashboardCard title="Valoración media" value="4.9" subtext="De 87 valoraciones" />
      </section>
      <AgendaToday />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@/app/psychologist/components/session-card.component.vue'
import Header from '@/app/psychologist/components/Header.vue'
import DashboardCard from "@/app/psychologist/components/DashboardCard.vue";
import AgendaToday from '@/app/psychologist/components/AgendaToday.vue'
</script>

<style scoped>

@import '@/app/shared/styles/dashboard.css';
</style>
