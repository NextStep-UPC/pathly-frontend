<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <img :src="logo" alt="Pathly Logo" />
        <p>© Pathly 2025<br />{{ $t('footer.rights') }}</p>
      </div>

      <div class="footer-links">
        <div class="footer-column">
          <h4>{{ $t('footer.explore') }}</h4>
          <ul>
            <li><a href="#">{{ $t('footer.feedback') }}</a></li>
            <li><a href="#">{{ $t('footer.faq') }}</a></li>
            <li><a href="#">{{ $t('footer.terms') }}</a></li>
            <li><a href="#">{{ $t('footer.privacy') }}</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>{{ $t('footer.social') }}</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Tik Tok</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>{{ $t('footer.help') }}</h4>
          <ul>
            <li><a href="#">{{ $t('footer.contact') }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const logo = new URL('@/assets/images/pathly-logo.png', import.meta.url).href;
</script>

<style scoped>
@import '../../shared/styles/home.css';
</style>
