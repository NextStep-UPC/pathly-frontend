<template>
  <section class="profile-page">
    <form @submit.prevent="onSubmit" class="profile-form">
      <div class="avatar-section">
        <img :src="model.avatarUrl || defaultAvatar" alt="Avatar" class="avatar-preview" />
      </div>

      <div class="form-columns">
        <div class="form-group">
          <label for="firstName">Nombre</label>
          <input id="firstName" v-model="model.firstName" type="text" disabled />
        </div>

        <div class="form-group">
          <label for="lastName">Apellido</label>
          <input id="lastName" v-model="model.lastName" type="text" disabled />
        </div>

        <div class="form-group">
          <label for="birthDate">Fecha de Nacimiento</label>
          <input id="birthDate" v-model="model.birthDate" type="date" disabled />
        </div>

        <div class="form-group">
          <label for="phoneNumber">Teléfono</label>
          <input id="phoneNumber" v-model="model.phoneNumber" type="tel" />
        </div>

        <div class="form-group full-width">
          <label for="bio">Biografía</label>
          <textarea id="bio" v-model="model.bio" rows="3"></textarea>
        </div>

        <div class="form-group full-width">
          <label for="avatarUrl">URL Avatar</label>
          <input id="avatarUrl" v-model="model.avatarUrl" type="url" />
        </div>

        <div class="form-group">
          <label for="role">Rol</label>
          <input id="role" v-model="model.role" type="text" disabled />
        </div>
      </div>

      <div v-if="success" class="notification">Cambios guardados correctamente</div>
      <div v-if="error" class="error">{{ error }}</div>

      <div class="form-actions">
        <button type="button" @click="onCancel" class="btn cancel">Cancelar</button>
        <button type="submit" :disabled="loading" class="btn save">Guardar</button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { createProfileModel } from '../models/profile-form.model.js';
import { useProfile } from '../services/use-profile.service.js';
import { useRouter } from 'vue-router';

const { profile, loading, error, load, save } = useProfile();
const model = reactive(createProfileModel());
const success = ref(false);
const defaultAvatar = '/img/default-avatar.png';
const router = useRouter();

onMounted(async () => {
  await load();
  if (profile.value) {
    Object.assign(model, createProfileModel(profile.value));
  }
});

function onSubmit() {
  const payload = {
    phoneNumber: model.phoneNumber || null,
    bio:         model.bio || null,
    avatarUrl:   model.avatarUrl || null,
  };
  save(payload).then(() => {
    success.value = true;
    setTimeout(() => (success.value = false), 3000);
  });
}

function onCancel() {
  if (profile.value) {
    Object.assign(model, createProfileModel(profile.value));
  }
}
</script>

<style scoped>
.profile-page {
  padding: 2rem;
  max-width: 1500px;
  margin: 0 auto;
  background: white;
}

.profile-form {
  width: 100%;
}

.avatar-section {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.avatar-preview {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
}

.form-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.full-width {
  grid-column: span 2;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.form-group input,
.form-group textarea {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.notification {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 6px;
  text-align: center;
}

.error {
  color: #e00;
  margin: 1rem 0;
  text-align: center;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.btn.save {
  background-color: #2c7a7b;
  color: white;
}

.btn.cancel {
  background-color: #e2e8f0;
  color: #2d3748;
}
</style>
