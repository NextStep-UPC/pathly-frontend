// src/bounded-contexts/sessions/views/session-view.vue

<template>
  <div class="flex min-h-screen">
    <HomeSidebarComponent />
    <div class="flex-1 bg-white">
      <HomeNavbarComponent />
      <div class="p-6 max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Mis Sesiones</h1>

        <div v-if="loading" class="text-center text-gray-500">Cargando sesiones...</div>
        <div v-else-if="error" class="text-red-500 text-center">Error: {{ error.message }}</div>

        <div v-else-if="!sessions.length" class="text-gray-500 text-center">No hay sesiones registradas.</div>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3" v-else>
          <div v-for="s in sessions" :key="s.id" class="border p-4 rounded-lg shadow hover:shadow-md transition">
            <p><strong>Fecha:</strong> {{ formatDate(s.startsAt) }}</p>
            <p><strong>Estado:</strong> {{ s.state }}</p>
            <p v-if="role === 'Admin'"><strong>Estudiante:</strong> {{ s.student?.email }}</p>
            <p v-if="role === 'Admin' || role === 'Student'"><strong>Psicólogo:</strong> {{ s.psychologist?.email ?? 'Sin asignar' }}</p>

            <div class="mt-4 space-x-2">
              <button
                  v-if="role === 'Psychologist' && s.state === 'Pending'"
                  class="px-3 py-1 text-sm bg-blue-600 text-white rounded"
                  @click="confirm(s.id)"
              >Confirmar</button>

              <button
                  v-if="role === 'Psychologist' && s.state === 'Confirmed'"
                  class="px-3 py-1 text-sm bg-green-600 text-white rounded"
                  @click="finish(s.id)"
              >Finalizar</button>

              <button
                  v-if="role === 'Student' && s.state === 'Pending'"
                  class="px-3 py-1 text-sm bg-red-600 text-white rounded"
                  @click="cancel(s.id)"
              >Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useSessionStore } from '../stores/session.store';
import { useAuthStore } from '@/shared/stores/auth.store';
import HomeNavbarComponent from '@/app/shared/components/home-navbar.component.vue';
import HomeSidebarComponent from '@/app/shared/components/home-sidebar.component.vue';

const auth = useAuthStore();
const sessionStore = useSessionStore();

const role = computed(() => auth.role);
const sessions = computed(() => sessionStore.sessions);
const loading = computed(() => sessionStore.loading);
const error = computed(() => sessionStore.error);

onMounted(() => {
  if (role.value === 'Admin') sessionStore.fetchByState('Pending');
  else sessionStore.fetchMySessions();
});

function cancel(id) {
  const reason = prompt('Motivo de cancelación:');
  if (reason) sessionStore.cancelSession(id, reason);
}

function confirm(id) {
  if (confirm('¿Deseas confirmar esta sesión?')) sessionStore.confirmSession(id);
}

function finish(id) {
  if (confirm('¿Deseas finalizar esta sesión?')) sessionStore.finishSession(id);
}

function formatDate(date) {
  return new Date(date).toLocaleString('es-PE', { dateStyle: 'medium', timeStyle: 'short' });
}
</script>

<style scoped>
button:hover {
  opacity: 0.9;
}
</style>