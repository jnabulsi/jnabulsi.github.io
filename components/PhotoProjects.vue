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
  align-items: flex-start;
  gap: 30px;
  max-width: 80%;
  margin: 0 auto;
  padding-bottom: 80px;
}

.project-image {
  flex-shrink: 0;
  width: auto;
  max-width: 65%;
  height: auto;
  object-fit: cover;
}

.text-container {
  flex-grow: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 3rem;
  margin-bottom: 0rem;
  margin-top: 0rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.subHeading {
  font-size: 2rem;
  font-style: italic;
  margin-bottom: 0rem;
  margin-top: 0rem;
}

.text {
  font-size: 1.5rem;
  white-space: pre-wrap;
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
