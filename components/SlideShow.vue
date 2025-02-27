<template>
  <div class="slideshow-container">
    <div class="slide">
      <img :src="images[currentIndex]" alt="Slideshow Image" class="image" />
    </div>
    <!-- Navigation Arrows -->
    <div class="controls">
      <button @click="prevSlide" class="arrow left">❮</button>
      <button @click="nextSlide" class="arrow right">❯</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Image array
const images = ref([
  '/img/photography/1.jpg',
  '/img/photography/2.jpg',
  '/img/photography/3.jpg',
  '/img/photography/4.jpg',
  '/img/photography/5.jpg',
  '/img/photography/6.jpg',
  '/img/photography/7.jpg',
  '/img/photography/8.jpg',
  '/img/photography/9.jpg',
  '/img/photography/10.jpg',
  '/img/photography/11.jpg',
  '/img/photography/12.jpg',
  '/img/photography/13.jpg',
  '/img/photography/15.jpg',
  '/img/photography/16.jpg',
  '/img/photography/17.jpg',
  '/img/photography/18.jpg',
  '/img/photography/19.jpg',
  '/img/photography/20.jpg',
  '/img/photography/21.jpg',
  '/img/photography/22.jpg',
  '/img/photography/23.jpg',
  '/img/photography/24.jpg',
])

const currentIndex = ref(0)

// Previous Slide
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}

// Next Slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}
</script>

<style scoped>
.slideshow-container {
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background-color: black;
}

.image {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
}

.arrow {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 5px;
  transition: background 0.3s;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.8);
}
</style>
