<template>
  <div class="work-hero">
    <p class="title">{{ title }}</p>
    <video :src="videoSrc" autoplay loop muted playsinline class="work-video"></video>
    <div class="text-container">
      <p class="subHeading">{{ subHeading }}</p>
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videoSrc: {
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
.work-hero {
  background-color: #e4edf9;
  text-align: center;
  padding-bottom: 3rem;
}

.work-video {
  width: 66%;
  display: block;
  margin: 1rem auto;
  border-radius: 8px;
  padding-top: 1rem;

}

.text-container {
  width: 66%;
  margin: 0 auto;
  font-weight: 100;
}

.title {
  padding-left: 15%;
  text-align: left;
  font-size: 6rem;
  font-style: italic;
  font-weight: 100;
  color: #5272b0;
  margin-bottom: 1rem;
}

.subHeading {
  font-size: 2.2rem;
  font-weight: normal;
  font-style: italic;
  margin-bottom: 2.5rem;
}

.text {
  font-size: 1.7rem;
  line-height: 1.5;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .work-video {
    width: 90%;
  }

  .text-container {
    width: 80%;
  }

  .title {
    text-align: center;
    font-size: 4rem;
    padding-left: 0%;
  }

  .subHeading {
    font-size: 1.6rem;
  }

  .text {
    font-size: 1.4rem;
  }
}
</style>
