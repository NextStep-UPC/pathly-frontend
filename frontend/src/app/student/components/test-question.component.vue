<template>
  <div class="test-question">
    <h3>{{ question.text }}</h3>
    <ul>
      <li v-for="(option, index) in question.options" :key="index">
        <label class="option-label">
          <input
              type="radio"
              :name="'question-' + question.id"
              :value="option"
              v-model="selectedAnswer"
          />
          {{ option }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  question: {
    type: Object,
    required: true,
  },
});

const selectedAnswer = ref(null);
</script>

<style scoped>
/* Estilo general del contenedor */
.test-question {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Estilo del título de la pregunta */
.test-question h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

/* Eliminar los puntos de la lista */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Estilo de las opciones */
.option-label {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.option-label:hover {
  background-color: #f0f8ff;
  border-color: #007bff;
}

/* Estilo del input radio */
input[type="radio"] {
  margin-right: 10px;
}
</style>
