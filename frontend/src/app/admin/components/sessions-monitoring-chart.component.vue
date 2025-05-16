<!-- admin/components/sessions-monitoring-chart.component.vue -->
<template>
  <div class="chart-container">
    <h2 class="chart-title">Monitoreo de Sesiones</h2>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Chart from 'chart.js/auto';

const chartCanvas = ref(null);

onMounted(() => {
  new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
      datasets: [{
        label: 'Sesiones',
        data: [5, 7, 3, 8, 6, 4, 2],
        backgroundColor: '#2E6864'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
});
</script>

<style scoped>
.chart-container {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  height: 300px;
}
.chart-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
