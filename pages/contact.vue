<template>
  <div class="contact-container">
    <img src="/img/contactphoto.png" alt="Home Image" class="home-image" />
    <ContactForm class="contact-form" />
  </div>
</template>

<script setup>
import ContactForm from '~/components/ContactForm.vue';
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}

.home-image {
  max-width: 35%;
  height: auto;
}

.contact-form {
  width: 100%;
  max-width: 400px;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .home-image {
    display: none;
  }

  .contact-form {
    width: 90%;
    max-width: 350px;
  }
}
</style>
