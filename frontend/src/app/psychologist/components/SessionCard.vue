<template>
  <div :class="['session-card', { pending: status === 'Pendiente' }]">
    <div class="info">
      <h4>{{ name }}</h4>
      <p>{{ type }}</p>
      <p>{{ time }} - {{ method }}</p>
    </div>

    <div class="actions">
      <button v-if="status === 'Confirmada'">Unirse ahora</button>
      <button @click="showEdit = !showEdit">Reprogramar</button>
      <button v-if="status === 'Pendiente'">Confirmar</button>
      <button v-if="status === 'Pendiente'" class="cancel">Cancelar</button>
    </div>

    <div v-if="showEdit" class="edit-form">
      <input type="datetime-local" v-model="newDate" />
      <button @click="updateDate">Guardar</button>
    </div>

    <span class="badge">{{ status }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SectionService from '@/app/psychologist/services/section.service'
const sectionService = new SectionService()
const props = defineProps(['id', 'name', 'type', 'time', 'method', 'status'])

const showEdit = ref(false)
const newDate = ref('')

const updateDate = async () => {
  await sectionService.update(props.id, { date: newDate.value })
  showEdit.value = false
  window.location.reload() // Puedes mejorar con estado reactivo
}
</script>

<style scoped>
.edit-form {
  margin-top: 10px;
}
</style>
