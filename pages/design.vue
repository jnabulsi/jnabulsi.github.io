<template>
  <div class="photo-container">

    <WorkHero videoSrc="/video/" title="3D & Game Design"
      subHeading="[I work in Blender, Maya, Photoshop, Substance Painter, Unity and Visual Studio Code]" text="Over the last few years I have immersed herself in the world of 3D design, learning tools like Maya, Blender, Illustrator,
Substance Painter, Photoshop, and Unity.From texturing and modeling to shadingand sculpting, my aim is to bring digital
creations to life. I have explored the exciting realm of game development,blending creativity with technical expertise to craft
immersive experience." />

    <div class="projects">
      <p class="section-title">Projects</p>

      <PhotoProjects imageSrc="/img/Design/design1.png" title="Reminisce" subHeading="Click through dialogue Game" text="3D modelling, UV unwrapping, Sculpting : Maya
Texturing : Photoshop
Sound Design : Reaper
Game design : Unity
Object Trigger Scripts : Visual Studio" />
      <PhotoProjects imageSrc="/img/Design/design2.png" title="In a field of flowers"
        subHeading="Video Composited into 3D envrioment" text="3D modelling, UV unwrapping,
Sculpting & Texturing: Blender
Real life footage: Green Screen & DSLR" />
      <PhotoProjects imageSrc="/img/Design/design3.png" title="Dancing Jellyfish" subHeading="3D animation" text="3D modelling, UV unwrapping,
Sculpting & Texturing: Blender" />
      <PhotoProjects imageSrc="/img/Design/design4.png" title="I must be Dreaming Computer" subHeading="3D animation"
        text="3D modelling, UV unwrapping,
Sculpting, Texturing and Compositing: Blender
Video Design : After effects" />
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
