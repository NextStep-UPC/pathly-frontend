<template>
  <div class="schedule-container">
    <h2>Horario de Sesiones</h2>
    <table class="schedule-table">
      <thead>
      <tr>
        <th>Fecha</th>
        <th>Hora</th>
        <th>Psicólogo</th>
        <th>Usuario</th>
        <th>Estado</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="session in sessions" :key="session.id">
        <td>{{ session.date }}</td>
        <td>{{ session.time }}</td>
        <td>{{ session.psychologist }}</td>
        <td>{{ session.user }}</td>
        <td>
          <span :class="['status', session.status.toLowerCase()]">{{ session.status }}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SessionsSchedule',
  data() {
    return {
      sessions: [
        { id: 1, date: '2025-05-15', time: '10:00 AM', psychologist: 'Dra. Martínez', user: 'Juan Pérez', status: 'Confirmada' },
        { id: 2, date: '2025-05-16', time: '02:00 PM', psychologist: 'Dr. Gómez', user: 'María López', status: 'Pendiente' },
        { id: 3, date: '2025-05-17', time: '11:30 AM', psychologist: 'Dra. Sánchez', user: 'Carlos Ruiz', status: 'Cancelada' },
        // Agrega más sesiones estáticas si quieres
      ]
    };
  }
};
</script>

<style scoped>
.schedule-container {
  margin-bottom: 30px;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

.schedule-table th,
.schedule-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.schedule-table th {
  background-color: #8595AA;
  color: white;
}

.status {
  padding: 5px 10px;
  border-radius: 12px;
  font-weight: 600;
  color: white;
  display: inline-block;
}

.status.confirmada {
  background-color: #28a745; /* verde */
}

.status.pendiente {
  background-color: #ffc107; /* amarillo */
  color: #333;
}

.status.cancelada {
  background-color: #dc3545; /* rojo */
}
</style>
