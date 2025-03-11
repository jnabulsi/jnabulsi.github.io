<template>
  <div class="app-container">
    <AppHeader />
    <main class="main-content">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>

html,
<style>
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  background: #ededed;
  font-family: 'Helvetica Neue LT Std', sans-serif;
  font-weight: 100;
}

@font-face {
  font-family: 'Helvetica Neue LT Std';
  src: url('@/public/fonts/italic.otf') format('opentype');
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: 'Helvetica Neue LT Std';
  src: url('@/public/fonts/light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}


html {
  scroll-behavior: smooth;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  text-align: center;
  padding: 20px;
}
</style>
