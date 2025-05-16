<script setup>
import { ref, onMounted } from 'vue'
import { SectionService } from "@/app/psychologist/services/Sectionservice.js"
import axios from 'axios'
const sectionService = new SectionService()
const sections = ref([])
const students = ref([])
const editingSectionId = ref(null)
const newDate = ref('')
const form = ref({
  studentId: null,
  title: '',
  description: '',
  date: '',
  status: 'Pendiente',
  mode: 'Presencial'
})
// Carga inicial
onMounted(async () => {
  const secRes = await sectionService.getAllExpanded()
  sections.value = secRes.data

  const studentRes = await axios.get('http://localhost:3000/students')
  students.value = studentRes.data
  console.log('Estudiantes cargados:', students.value)
})

// Función para mostrar/ocultar fecha editable
function toggleEdit(id) {
  editingSectionId.value = editingSectionId.value === id ? null : id
  newDate.value = ''
}

// PATCH para cambiar la fecha
async function updateDate(id) {
  if (!newDate.value) return alert('Selecciona nueva fecha')
  await sectionService.update(id, { date: newDate.value })
  refreshSections()
  editingSectionId.value = null
}

// POST para crear sección nueva
async function createSection() {
  await sectionService.create(form.value)
  alert('Sección creada correctamente')
  resetForm()
  refreshSections()
}

// Recarga datos
async function refreshSections() {
  const { data } = await sectionService.getAllExpanded()
  sections.value = data
}

// Reset form
function resetForm() {
  form.value = {
    studentId: null,
    title: '',
    description: '',
    date: '',
    status: 'Pendiente',
    mode: 'Presencial'
  }
}

// Utilitario de fecha
function formatDate(date) {
  return new Date(date).toLocaleString()
}
</script>
<template>
  <div class="agenda-today">
    <h2>Agenda de hoy</h2>
    <!-- Formulario de creación -->
    <h3>Agregar nueva sección</h3>
    <form @submit.prevent="createSection" class="create-section">
      <label>Estudiante:</label>
      <select v-model="form.studentId" required>
        <option v-for="student in students" :key="student.id" :value="student.id">
          {{ student.name}}
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
    <!-- Listado de sesiones -->
    <div v-for="section in sections" :key="section.id" class="session-card" :class="{ pending: section.status === 'Pendiente' }">
      <div class="info">
        <h4>{{ section.student.name }}</h4>
        <p>{{ section.title }}</p>
        <p>{{ formatDate(section.date) }} - {{ section.mode }}</p>
      </div>

      <div class="actions">
        <button v-if="section.status === 'Confirmada'">Unirse ahora</button>
        <button @click="toggleEdit(section.id)">Reprogramar</button>
        <button v-if="section.status === 'Pendiente'">Confirmar</button>
        <button v-if="section.status === 'Pendiente'" class="cancel">Cancelar</button>
      </div>

      <!-- Reprogramar -->
      <div v-if="editingSectionId === section.id" class="edit-form">
        <input type="datetime-local" v-model="newDate" />
        <button @click="updateDate(section.id)">Guardar</button>
      </div>

      <span class="badge">{{ section.status }}</span>
    </div>

    <hr />


  </div>
</template>

<style scoped>
@import '@/app/shared/styles/session-card.css';
select, option {
  background-color: white;
  color: black;
  padding: 6px;
  font-size: 14px;
}

</style>