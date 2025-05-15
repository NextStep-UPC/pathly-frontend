<template>
  <div :class="['session-card', { pending: status === 'Pendiente' }]">
    <div class="info">
      <h4>{{ name }}</h4>
      <p>{{ type }}</p>
      <p>{{ time }} - {{ method }}</p>
    </div>
    <div class="actions">
      <button v-if="status === 'Confirmada'">Unirse ahora</button>
      <button>Reprogramar</button>
      <button v-if="status === 'Pendiente'">Confirmar</button>
      <button v-if="status === 'Pendiente'" class="cancel">Cancelar</button>
    </div>
    <span class="badge">{{ status }}</span>
  </div>
</template>

<script setup>
defineProps(['name', 'type', 'time', 'method', 'status'])
</script>

<style scoped>
@import '@/app/shared/styles/session-card.css';
</style>
