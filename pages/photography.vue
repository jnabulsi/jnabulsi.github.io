<template>
  <div class="photo-container">
    <SlideShow />
    <p class="photo-text">
      For years, Tess has been deeply immersed in the world of video design, developing her craft with tools
      like After Effects and Premiere Pro and Abode Illustrator. She thrives in the realm of motion graphics, seamlessly
      blending illustrations from Illustrator to breathe life into my creations. She is here to bring stories to life
      through the magic of moving images.
    </p>

    <p class="photo-title">Dreams (2020)</p>

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
      About Work ContactFor years, Tess has been deeply immersed in the world of video design, developing her craft with
      tools
      like After Effects and Premiere Pro and Abode Illustrator. She thrives in the realm of motion graphics, seamlessly
      blending illustrations from Illustrator to breathe life into my creations. She is here to bring stories to life
      through the magic of moving images.
      Dreams (2020)
      With a surrealist approach, Dreams (2020) explores the euphoric and transformative nature of Dreams through
      portrait
      photography. Through experimentation with multiple techniques and materials, laser cutting techniques provided
      precision aesthetics and enhanced the surreal experience, where the circular shape symbolized fluidity and
      freedom.
      Additionally, there was a focus on traditional portraiture, emphasising facial expressions and body language to
      convey
      a dreamlike atmosphere. Allowing deeper exploration of human emotions within the dream context, final stages
      created a series of laser-cut portraits suspended within wooden boxes, creating an immersive,3D experience for
      viewers, highlighting the transition between dream states. Dreams(2020) represents different aspects such as
      space, love, and peace. Symbolism, including natural motifs and color schemes, was utilised to create a cohesive
      and impactful arrangement. Meticulously planned costumes, props, and makeuplooks for the models conveyed
      the projected affective experience. High-end studio equipment combined with sophisticated post-processing
      software augmented the desired aesthetic.
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
.photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.photo-text {
  font-size: 2rem;
  line-height: 1.6;
  text-align: center;
  margin-top: 70px;
  max-width: 80%;
}

.photo-title {
  font-size: 4rem;
}

.media-section {
  display: flex;
  gap: 40px;
  padding: 40px;
  align-items: stretch;
  justify-content: center;
}

.video-container {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 720px;
}

video {
  width: 100%;
  height: 100%;
}

.image-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  height: 700px;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

