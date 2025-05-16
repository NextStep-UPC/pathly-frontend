<template>
  <form class="create-section" @submit.prevent="createSection">
    <label>Estudiante:</label>
    <select v-model="form.studentId" required>
      <option v-for="student in students" :key="student.id" :value="student.id">
        {{ student.name }}
      </option>
    </select>

    <label>Título:</label>
    <input v-model="form.title" required />

    <label>Descripción:</label>
    <textarea v-model="form.description"></textarea>

    <label>Fecha y hora:</label>
    <input type="datetime-local" v-model="form.date" required />

    <label>Estado:</label>
    <select v-model="form.status">
      <option>Confirmada</option>
      <option>Pendiente</option>
    </select>

    <label>Modalidad:</label>
    <select v-model="form.mode">
      <option>Presencial</option>
      <option>Videollamada</option>
    </select>

    <button type="submit">Crear Sección</button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionService from '@/app/psychologist/services/section.service'
const sectionService = new SectionService()
const form = ref({
  studentId: null,
  title: '',
  description: '',
  date: '',
  status: 'Pendiente',
  mode: 'Presencial'
})

const students = ref([])

onMounted(async () => {
  const { data } = await axios.get('http://localhost:3000/students')
  students.value = data
})

const createSection = async () => {
  await sectionService.create(form.value)
  alert('Sección creada correctamente')
  window.location.reload()
}
</script>

<style scoped>
.create-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  max-width: 400px;
}
</style>
