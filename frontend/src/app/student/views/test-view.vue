<template>
  <section class="test-view">
    <h1>Test Vocacional</h1>
    <div v-if="questions.length">
      <TestQuestion
          v-for="question in questions"
          :key="question.id"
          :question="question"
          v-model="answers[question.id]"
      />
    </div>
    <div v-else>
      <p>Cargando preguntas...</p>
    </div>
    <button @click="submitTest" :disabled="!isComplete">Enviar Respuestas</button>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { TestService } from '../services/test.service.js';
import TestQuestion from '../components/test-question.component.vue';

const questions = ref([]);
const answers = ref({});

// Cargar preguntas al montar el componente
onMounted(async () => {
  try {
    questions.value = await TestService.fetchQuestions();
    // Inicializar respuestas vacías
    questions.value.forEach((question) => {
      answers.value[question.id] = null;
    });
  } catch (error) {
    console.error('Error al cargar las preguntas:', error);
  }
});

// Verificar si todas las preguntas tienen respuesta
const isComplete = computed(() =>
    questions.value.every((question) => answers.value[question.id] !== null)
);

// Manejar el envío del test
const submitTest = () => {
  console.log('Respuestas enviadas:', answers.value);
  alert('Test enviado con éxito');
};
</script>

<style scoped>
.test-view {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>