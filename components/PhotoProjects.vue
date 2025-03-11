<template>
  <div class="photo-project">
    <img :src="imageSrc" alt="Project Image" class="project-image" />
    <div class="text-container">
      <p class="title">{{ title }}</p>
      <p class="subHeading">{{ subHeading }}</p>
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.photo-project {
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 70%;
  margin: 0 auto;
  padding-bottom: 80px;
}

.project-image {
  width: 40%;
  height: auto;
}

.text-container {
  flex: 1;
  text-align: left;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.subHeading {
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 1rem;
}

.text {
  font-size: 1.2rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .photo-project {
    flex-direction: column;
    text-align: center;
  }

  .project-image {
    width: 80%;
    max-width: 100%;
  }

  .text-container {
    width: 100%;
    text-align: center;
  }
}
</style>
