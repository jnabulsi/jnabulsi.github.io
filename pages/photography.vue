<template>
  <div class="photo-container">

    <WorkHero videoSrc="/video/sculptures.mp4" title="Photography"
      subHeading="[I work in Lightroom, Photoshop and with a DSLR]" text="Over the years, I’ve developed a deep passion for photography, particularly through capturing people
with a surrealistic lens. I love the idea that with a camera, a computer, and a few creative tools, I can
bring my imagination to life and transform everyday moments into something extraordinary." />

    <div class="projects">
      <p class="section-title">Projects</p>

      <PhotoProjects imageSrc="/img/Photography/photo1.png" title="Dreams" subHeading="Photographic Sculptures" text="Dreams (2020) explores the transformative nature of dreams
through surrealist portrait photography. Using laser cutting
and traditional portraiture, it creates a dreamlike atmosphere
with suspended 3D portraits. The project symbolizes themes
of space, love, and peace, enhanced by carefully crafted
costumes, props, and makeup." />
      <PhotoProjects imageSrc="/img/Photography/photo2.png" title="Blossom Bonds: Portraits of Friends"
        subHeading="Photographic Series" text="Similar to friendships in my life, nature possess the
remarkable ability to heal, rejuvenate,and uplift my spirit.
They serve as constant reminder of the beauty that surrounds us." />
      <PhotoProjects imageSrc="/img/Photography/photo3.png" title="Multi Portraits" subHeading="Photographic Series"
        text="Portraiture project focused on refining Photoshop masking skills.
Through experimentation and attention to detail, I aim to transform
raw images into polished, creative compositions" />


    </div>
  </div>
</template>

<script setup>
import WorkHero from '~/components/WorkHero.vue';
import PhotoProjects from '~/components/PhotoProjects.vue';
</script>

<style scoped>
.photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.section-title {
  font-size: 8rem;
  font-weight: 100;
  font-style: italic;
  text-align: left;
  padding-left: 15%;
  margin-bottom: 60px;
}
</style>
