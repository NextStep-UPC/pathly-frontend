<template>
  <div class="dashboard-card">
    <h3>{{ title }}</h3>
    <p class="value">{{ value }}</p>
    <p class="subtext">{{ subtext }}</p>
  </div>
</template>

<script setup>
defineProps(['title', 'value', 'subtext'])
</script>

<style scoped>
.card {
  padding: 1rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,0.05);
}
</style>
