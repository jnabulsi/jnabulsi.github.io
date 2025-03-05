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
  align-items: flex-start;
  gap: 150px;
  padding: 50px 20px;
  width: 100%;
  flex-wrap: wrap;
}

/* Image Styling */
.home-image {
  max-width: 35%;
  height: auto;
}

/* Form Styling */
.contact-form {
  width: 100%;
  max-width: 300px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
    justify-content: center;
  }

  .home-image {
    display: none;
  }

  .contact-form {
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
