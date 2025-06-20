<template>
  <div class="login-form">
    <div class="login-form-content">
      <RouterLink to="/" class="back-link">← {{ $t('login.back') }}</RouterLink>

      <h1 class="login-title">{{ $t('login.title') }}</h1>
      <h2 class="login-subtitle">{{ $t('login.welcome') }}</h2>

      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="email">{{ $t('login.email') }} <span>*</span></label>
          <input
              v-model="form.email"
              type="email"
              id="email"
              required
              :placeholder="$t('login.placeholderEmail')"
          />
        </div>

        <div class="form-group">
          <label for="password">{{ $t('login.password') }} <span>*</span></label>
          <input
              v-model="form.password"
              type="password"
              id="password"
              required
              :placeholder="$t('login.placeholderPassword')"
          />
        </div>

        <p v-if="error" class="form-error">{{ error }}</p>

        <p class="form-link">
          {{ $t('login.noAccount') }}
          <RouterLink to="/register">{{ $t('login.createAccount') }}</RouterLink>
        </p>

        <button :disabled="loading" type="submit" class="btn login-btn">
          {{ loading ? $t('login.loading') : $t('login.submit') }}
        </button>

        <p class="form-link">
          {{ $t('login.forgot') }}
          <RouterLink to="/reset-password">{{ $t('login.recover') }}</RouterLink>
        </p>
      </form>

      <p class="technical-support">
        {{ $t('login.support') }}
        <RouterLink to="/contact">{{ $t('login.contact') }}</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { loginForm as defaultForm } from '../models/login-form.model';
import { useLogin } from '../services/use-login.service';
import { useAuthStore } from '@/shared/stores/auth.store';

const { t } = useI18n();
const router = useRouter();
const { login } = useLogin();
const auth = useAuthStore();

const form = reactive({ ...defaultForm });
const loading = ref(false);
const error = ref('');

const redirectByRole = {
  Admin: '/admin',
  Psychologist: '/psychologist',
  Normal: '/students',
};

async function submit() {
  loading.value = true;
  error.value = '';

  try {
    await login({ ...form });

    const role = auth.role;
    const redirectPath = redirectByRole[role] || '/';
    await router.push(redirectPath);
  } catch (err) {
    const backendMsg = err.response?.data?.message ?? err.message;
    error.value = backendMsg || t('login.error');
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
@import '../../shared/styles/login.css';
.form-error {
  color: #ef4444;
  margin-top: 0.5rem;
}
</style>