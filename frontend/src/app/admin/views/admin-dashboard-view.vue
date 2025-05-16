<template>
  <div class="dashboard-view">
    <!-- Primera fila: estadísticas -->
    <div class="stats-grid">
      <StatCircle title="Usuarios" percentage="25" color='#C6D5C9' />
      <StatCircle title="Psicólogos" percentage="79" color='#8595AA' />
      <StatCircle title="Tests" percentage="52" color='#2E6864' />
    </div>

    <!-- Segunda fila: gráfico y feedback -->
    <div class="graph-feedback-row">
      <div class="left-column">
        <SessionsMonitoringChart />
      </div>
      <div class="right-column">
        <FeedbackReport />
      </div>
    </div>

    <!-- Tercera fila: programación de sesiones -->
    <div class="schedule-wrapper">
      <SessionsSchedule />
    </div>
  </div>
</template>

<script setup>
import StatCircle from '../components/stat-circle.component.vue';
import SessionsMonitoringChart from '../components/sessions-monitoring-chart.component.vue';
import FeedbackReport from '../components/feedback-report.component.vue';
import SessionsSchedule from '../components/sessions-schedule.component.vue';
</script>

<style scoped>
.dashboard-view {
  max-width: 1200px;
  margin: 0 auto;              /* Centra horizontalmente */
  padding: 2rem 1rem;          /* Espacio interno: top/bottom, left/right */
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-grid {
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
}

.graph-feedback-row {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.left-column {
  flex: 2;
  min-width: 300px;
}

.right-column {
  flex: 1;
  min-width: 250px;
}

.schedule-wrapper {
  width: 100%;
}
</style>
