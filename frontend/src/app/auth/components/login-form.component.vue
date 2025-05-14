<template>
  <div class="login-form">
    <div class="login-form-content">
      <RouterLink to="/" class="back-link">← {{ $t('login.back') }}</RouterLink>

      <h1 class="login-title">{{ $t('login.title') }}</h1>
      <h2 class="login-subtitle">{{ $t('login.welcome') }}</h2>

      <form @submit.prevent>
        <div class="form-group">
          <label for="email">{{ $t('login.email') }} <span>*</span></label>
          <input
            type="email"
            id="email"
            required
            :placeholder="$t('login.placeholderEmail')"
          />
        </div>

        <div class="form-group">
          <label for="password">{{ $t('login.password') }} <span>*</span></label>
          <input
            type="password"
            id="password"
            required
            :placeholder="$t('login.placeholderPassword')"
          />
        </div>

        <p class="form-link">
          {{ $t('login.noAccount') }}
          <RouterLink to="/register">{{ $t('login.createAccount') }}</RouterLink>
        </p>

        <button type="submit" class="btn login-btn">{{ $t('login.submit') }}</button>

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
import { RouterLink } from 'vue-router';
</script>

<style scoped>
@import '../../shared/styles/login.css';
</style>