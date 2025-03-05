<template>
  <header class="header">
    <NuxtLink v-if="!isIndexPage" to="/" class="logo-link">
      <img v-if="!isIndexPage" src="/img/logo.webp" alt="Logo" class="logo" />
    </NuxtLink>
    <div class="nav-container">
      <NavBar />
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '~/components/NavBar.vue';

const route = useRoute();
const isIndexPage = ref(route.path === '/');

watch(route, (newRoute) => {
  isIndexPage.value = newRoute.path === '/';
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 180px;
  position: relative;
}

/* Logo always stays on the left */
.logo-link {
  position: absolute;
  left: 5%;
  top: 15%;
}

.logo {
  width: 200px;
  height: auto;
}

.nav-container {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .header {
    min-height: 120px;
  }

  .logo {
    width: 120px;
  }
}

@media (max-width: 768px) {
  .header {
    min-height: 120px;
  }

  .logo-link {
    top: 25%;
  }

  .logo {
    width: 75px;
  }
}
</style>

