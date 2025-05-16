<!-- admin/components/feedback-report.component.vue -->
<template>
  <div class="feedback-report">
    <h2 class="report-title">Reporte de Feedback</h2>
    <ul class="report-list">
      <li v-for="(feedback, index) in feedbackList" :key="index" class="report-item">
        <div class="user-name">{{ feedback.user }}</div>
        <div class="comment">{{ feedback.comment }}</div>
        <div class="date">{{ feedback.date }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const feedbackList = [
  { user: 'Lucía Pérez', comment: 'Sesión muy útil, gracias.', date: '12/05' },
  { user: 'Carlos Ruiz', comment: 'Me ayudó a aclarar ideas.', date: '11/05' },
  { user: 'Ana Torres', comment: 'Excelente orientación.', date: '10/05' },
];
</script>

<style scoped>
.feedback-report {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  max-height: 300px;
  overflow-y: auto;
}

.report-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-align: center;
}

.report-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.report-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.user-name {
  font-weight: 600;
}

.comment {
  font-size: 0.95rem;
  margin: 0.25rem 0;
}

.date {
  font-size: 0.8rem;
  color: #888;
}
</style>
