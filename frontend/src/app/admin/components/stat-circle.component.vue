<!-- src/app/admin/components/stat-circle.component.vue -->
<template>
  <div class="stat-circle">
    <div class="circle" :style="{ backgroundColor: color }">
      <span class="percentage">{{ percentage }}%</span>
    </div>
    <p class="title">{{ title }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  percentage: Number,
  color: String,
});
</script>

<style scoped>
.stat-circle {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
}
.title {
  margin-top: 0.5rem;
  font-weight: bold;
}
</style>
