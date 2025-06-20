<template>
  <div class="register-form">
    <div class="register-form-content">
      <RouterLink to="/" class="back-link">← {{ $t('register.back') }}</RouterLink>

      <h1 class="register-title">{{ $t('register.title') }}</h1>
      <h2 class="register-subtitle">{{ $t('register.subtitle') }}</h2>

      <form @submit.prevent="submit">
        <div class="form-group" v-for="input in inputs" :key="input.id">
          <label :for="input.id">
            {{ input.label }} <span>*</span>
          </label>
          <input
              v-model="form[input.id]"
              :type="input.type"
              :id="input.id"
              :placeholder="input.placeholder"
              required
          />
        </div>

        <p v-if="error" class="form-error">{{ error }}</p>

        <p class="form-link">
          {{ $t('register.haveAccount') }}
          <RouterLink to="/login">{{ $t('register.loginLink') }}</RouterLink>
        </p>

        <button :disabled="loading" type="submit" class="btn register-btn">
          {{ loading ? $t('register.loading') : $t('register.submit') }}
        </button>

        <p class="technical-support">
          {{ $t('register.support') }}
          <RouterLink to="/contact">{{ $t('register.contact') }}</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { registerForm as defaultForm } from '../models/register-form.model';
import { useRegister } from '../services/use-register.service';
import { useAuthStore } from '@/shared/stores/auth.store';

const { t } = useI18n();
const router = useRouter();
const { register } = useRegister();
const auth = useAuthStore();

const form = reactive({ ...defaultForm });
const loading = ref(false);
const error = ref('');

const redirectByRole = {
  Admin: '/admin',
  Psychologist: '/psychologist',
  Normal: '/students'
};

const inputs = computed(() => [
  {
    id: 'name',
    type: 'text',
    label: t('register.name'),
    placeholder: t('register.placeholderName'),
  },
  {
    id: 'lastname',
    type: 'text',
    label: t('register.lastname'),
    placeholder: t('register.placeholderLastname'),
  },
  {
    id: 'birthdate',
    type: 'date',
    label: t('register.birthdate'),
    placeholder: '',
  },
  {
    id: 'phone',
    type: 'tel',
    label: t('register.phone'),
    placeholder: t('register.placeholderPhone'),
  },
  {
    id: 'email',
    type: 'email',
    label: t('register.email'),
    placeholder: t('register.placeholderEmail'),
  },
  {
    id: 'password',
    type: 'password',
    label: t('register.password'),
    placeholder: t('register.placeholderPassword'),
  },
  {
    id: 'confirmPassword',
    type: 'password',
    label: t('register.confirmPassword'),
    placeholder: t('register.placeholderConfirmPassword'),
  },
]);

async function submit() {
  if (form.password !== form.confirmPassword) {
    error.value = t('register.passwordMismatch') ?? 'Las contraseñas no coinciden';
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    await register({ ...form }); // ya guarda token y user en el store

    const redirectPath = redirectByRole[auth.role] || '/';
    await router.push(redirectPath);
  } catch (err) {
    if (err.response) {
      const backendMsg = err.response.data?.errors?.[0] || err.response.data?.message;
      error.value = backendMsg || 'Ocurrió un error inesperado';
    } else {
      error.value = 'Error de red o del servidor';
    }
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
@import '../../shared/styles/register.css';

.form-error {
  color: #ef4444;
  margin-top: 0.5rem;
}
</style>