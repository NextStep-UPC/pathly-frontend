<template>
  <section class="agenda">
    <h2>Agenda de hoy</h2>
    <SessionCard
        name="Carlos Mendoza"
        type="Orientación Vocacional"
        time="10:00 - 11:00"
        method="Videollamada"
        status="Confirmada"
    />
    <SessionCard
        name="Laura Sánchez"
        type="Seguimiento"
        time="12:30 - 13:30"
        method="Presencial"
        status="Confirmada"
    />
    <SessionCard
        name="Miguel Rodríguez"
        type="Primera Consulta"
        time="16:00 - 17:00"
        method="Videollamada"
        status="Pendiente"
    />
  </section>
</template>

<script setup>
import SessionCard from './SessionCard.vue'
</script>

<style scoped>
@import '@/app/shared/styles/session-card.css';
</style>
