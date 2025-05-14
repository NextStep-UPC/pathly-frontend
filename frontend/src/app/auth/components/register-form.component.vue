<template>
  <div class="register-form">
    <div class="register-form-content">
      <RouterLink to="/" class="back-link">← {{ $t('register.back') }}</RouterLink>

      <h1 class="register-title">{{ $t('register.title') }}</h1>
      <h2 class="register-subtitle">{{ $t('register.subtitle') }}</h2>

      <form @submit.prevent>
        <div class="form-group">
          <label for="name">{{ $t('register.name') }} <span>*</span></label>
          <input type="text" id="name" required :placeholder="$t('register.placeholderName')" />
        </div>

        <div class="form-group">
          <label for="lastname">{{ $t('register.lastname') }} <span>*</span></label>
          <input type="text" id="lastname" required :placeholder="$t('register.placeholderLastname')" />
        </div>

        <div class="form-group">
          <label for="birthdate">{{ $t('register.birthdate') }} <span>*</span></label>
          <input type="date" id="birthdate" required />
        </div>

        <div class="form-group">
          <label for="phone">{{ $t('register.phone') }} <span>*</span></label>
          <input type="tel" id="phone" required :placeholder="$t('register.placeholderPhone')" />
        </div>

        <div class="form-group">
          <label for="email">{{ $t('register.email') }} <span>*</span></label>
          <input type="email" id="email" required :placeholder="$t('register.placeholderEmail')" />
        </div>

        <div class="form-group">
          <label for="password">{{ $t('register.password') }} <span>*</span></label>
          <input type="password" id="password" required :placeholder="$t('register.placeholderPassword')" />
        </div>

        <div class="form-group">
          <label for="confirmPassword">{{ $t('register.confirmPassword') }} <span>*</span></label>
          <input type="password" id="confirmPassword" required :placeholder="$t('register.placeholderConfirmPassword')" />
        </div>

        <p class="form-link">
          {{ $t('register.haveAccount') }}
          <RouterLink to="/login">{{ $t('register.loginLink') }}</RouterLink>
        </p>

        <button type="submit" class="btn register-btn">{{ $t('register.submit') }}</button>

        <p class="technical-support">
          {{ $t('register.support') }}
          <RouterLink to="/contact">{{ $t('register.contact') }}</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
@import '../../shared/styles/register.css';
</style>