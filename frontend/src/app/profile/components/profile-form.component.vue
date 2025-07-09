<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="firstName">Nombre</label>
      <input id="firstName" v-model="model.firstName" type="text" required />
    </div>

    <div>
      <label for="lastName">Apellido</label>
      <input id="lastName" v-model="model.lastName" type="text" required />
    </div>

    <div>
      <label for="birthDate">Fecha de Nacimiento</label>
      <input id="birthDate" v-model="model.birthDate" type="date" />
    </div>

    <div>
      <label for="phoneNumber">Teléfono</label>
      <input id="phoneNumber" v-model="model.phoneNumber" type="tel" />
    </div>

    <div>
      <label for="bio">Biografía</label>
      <textarea id="bio" v-model="model.bio"></textarea>
    </div>

    <div>
      <label for="avatarUrl">URL Avatar</label>
      <input id="avatarUrl" v-model="model.avatarUrl" type="url" />
    </div>

    <div>
      <label for="role">Rol</label>
      <input id="role" v-model="model.role" type="text" disabled />
    </div>

    <p v-if="error" class="error">{{ error }}</p>
    <button type="submit" :disabled="loading">Guardar</button>
  </form>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { createProfileModel } from '../models/profile-form.model.js';
import { useProfile }        from '../services/use-profile.service.js';

const { profile, loading, error, load, save } = useProfile();
const model = reactive(createProfileModel());

// Carga datos al montar
onMounted(async () => {
  await load();
  if (profile.value) {
    Object.assign(model, createProfileModel(profile.value));
  }
});

function onSubmit() {
  // Prepara sólo los campos que acepta UpdateProfileRequestDto
  const payload = {
    firstName:   model.firstName,
    lastName:    model.lastName,
    birthDate:   model.birthDate || null,
    phoneNumber: model.phoneNumber || null,
    bio:         model.bio || null,
    avatarUrl:   model.avatarUrl || null,
  };
  save(payload);
}
</script>

<style scoped>
form > div { margin-bottom: 0.75rem; }
.error { color: #e00; }
</style>