<template>
  <div class="photo-container">
    <SlideShow />
    <p class="photo-text">
      For years, Tess has been deeply immersed in the world of video design, developing her craft with tools
      like After Effects, Premiere Pro, and Adobe Illustrator. She thrives in the realm of motion graphics, seamlessly
      blending illustrations into motion to bring stories to life.
    </p>

    <h2 class="section-title">Dreams (2020)</h2>

    <div class="media-section">
      <!-- Video -->
      <div class="video-container">
        <video autoplay loop muted playsinline>
          <source src="/video/sculptures.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <!-- Image Grid -->
      <div class="image-grid">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Gallery Image" class="grid-image" />
      </div>
    </div>

    <p class="photo-text">
      Dreams (2020) explores the euphoric and transformative nature of dreams through portrait
      photography.
      Using laser cutting techniques, a surreal experience was created—where circular shapes symbolized fluidity and
      freedom.
      The final work featured a series of laser-cut portraits suspended within wooden boxes, forming an immersive 3D
      experience.
    </p>
  </div>
</template>

<script setup>
import SlideShow from '~/components/SlideShow.vue';
import { ref } from 'vue';

const images = ref([
  '/img/photography/2.jpg',
  '/img/photography/10.jpg',
  '/img/photography/4.jpg',
  '/img/photography/15.jpg',
]);
</script>

<style scoped>
/* General Styling */
.photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
}

.photo-title {
  font-size: 3rem;
  margin-bottom: 20px;
}

.photo-text {
  font-size: 1.8rem;
  line-height: 1.6;
  text-align: center;
  margin-top: 50px;
  max-width: 60%;
}

.section-title {
  font-size: 2.5rem;
  margin: 40px 0 20px;
  font-weight: bold;
}

/* Media Section */
.media-section {
  display: flex;
  gap: 40px;
  padding: 40px;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
}

/* Video Styling */
.video-container {
  flex: 2;
  max-width: 600px;
}

video {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Image Grid - FIXED */
.image-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  max-width: 400px;
  height: 400px;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .photo-title {
    font-size: 2.5rem;
  }

  .photo-text {
    font-size: 1.4rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .media-section {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  .video-container {
    max-width: 100%;
  }

  /* Ensure the image grid stacks properly */
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: auto;
    max-width: 100%;
  }
}

@media (max-width: 480px) {

  /* Switch to a single-column layout on very small screens */
  .image-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}
</style>

