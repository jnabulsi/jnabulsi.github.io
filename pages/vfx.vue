<template>
  <div class="photo-container">

    <WorkHero videoSrc="/video/vfx.mp4" title="VFX & Video editing"
      subHeading="[I work in the After Effects, Blender & Nuke]" text="For years, I’ve been deeply immersed in the world of video design, refining my skills with a range of powerful tools.
From After Effects and Premiere Pro, to Adobe Illustrator, Blender, and Nuke, I’ve developed expertise in motion
graphics, video editing, 3D modeling, and compositing. These programs have enabled me to craft visually engaging
narratives and seamless visual experiences. My passion lies in bringing stories to life through the magic of moving
images, using these tools to evoke emotion and create immersive visual experiences that resonate with audiences" />

    <div class="projects">
      <p class="section-title">Projects</p>

      <PhotoProjects imageSrc="/img/vfx1.webp" title="Graceful Grace, Season 2" subHeading="Web series, VFX artist"
        text="Text and Camera Animation: After effects
Text Icons : Illustrator" />
      <PhotoProjects imageSrc="/img/vfx2.webp" title="Ad Nauseam" subHeading="Short Film, Editor"
        text="Sequencing, Masking, Effects : Premier Pro" />
      <PhotoProjects imageSrc="/img/vfx3.webp" title="I must be dreaming" subHeading="Short Film, VFX artist" text="3D Animations : Blender
Effects, Rotoscoping and 2D Animation: After effects
Masking : Premier Pro and Photoshop" />
      <PhotoProjects imageSrc="/img/vfx4.webp" title="BORDERLINE" subHeading="Theatrical Show, AV" text="Motion Graphics :After Effects
Projection Mapping : MadMapper
Queues : Qlab" />
      <PhotoProjects imageSrc="/img/vfx5.webp" title="Evenings with Janine" subHeading="Televsion show, Editor" text="Sequencing multicam footage, effects,
masking and credits : Premier Pro" />
      <PhotoProjects imageSrc="/img/vfx6.webp" title="First Run" subHeading="Televsion show, Editor" text="Sequencing multicam footgae, effects,
masking and credits : Premier Pro" />
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
