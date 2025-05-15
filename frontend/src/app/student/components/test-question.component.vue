<template>
  <div class="test-question">
    <h3>{{ question.text }}</h3>
    <ul>
      <li v-for="(option, index) in question.options" :key="index">
        <label>
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
/* Estilos específicos para la pregunta */
</style>