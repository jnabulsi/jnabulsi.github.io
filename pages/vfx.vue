<template>
  <div class="vfx-container">
    <div class="video-container">
      <video autoplay loop muted playsinline aria-label="Background video showcasing video design work">
        <source src="/video/vfx.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <p class="vfx-text">
      For years, I have deeply immersed in the world of video design, developing her craft with Video editing tools
      like After Effects and Premiere Pro, Abode Illustrator, Blender and Nuke. My aim is to bring stories to life
      through the magic of moving images.
    </p>

    <p class="project-title">Projects</p>

    <div class="project-grid">
      <ProjectPane imageSrc="/img/vfx1.webp" title="Graceful Grace Series 2" info="Web Series, VFX artist" />
      <ProjectPane imageSrc="/img/vfx2.webp" title="Ad Nauseam (still currently in post)" info="Short Film, Editor" />
      <ProjectPane imageSrc="/img/vfx3.webp" title="I must be dreaming"
        info="Short Film, Animator, Compositioner, Effects artist and film maker" />
      <ProjectPane imageSrc="/img/vfx4.webp" title="First Run" info="Televison Show, Editor" />
      <ProjectPane imageSrc="/img/vfx5.webp" title="Evenings with Janine" info="Televsion Show, Editor" />
      <ProjectPane imageSrc="/img/vfx6.webp" title="Borderline (for BPD awareness week)"
        info="Theatrical show, Motion Graphics" />
    </div>
  </div>
</template>

<script setup>
import ProjectPane from '~/components/ProjectPane.vue';
</script>

<style scoped>
.video-container {
  width: 70%;
  height: 70%;
  overflow: hidden;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-title {
  font-size: 4rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}

.vfx-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}

.vfx-image {
  max-width: 100%;
  height: auto;
  display: block;
}

.vfx-text {
  font-size: 2rem;
  line-height: 1.6;
  text-align: center;
  margin-top: 70px;
  max-width: 80%;
}

.skills {
  text-align: left;
  width: 80%;
  margin: 40px auto;
}

.skills h1 {
  font-size: 4rem;
  margin-bottom: 10px;
}

.skills ul {
  padding-left: 20px;
  color: #3b3d3f;
  font-size: 2rem;
}

@media (max-width: 768px) {
  .project-title {
    font-size: 2.5rem;
  }

  .project-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .vfx-text {
    font-size: 1.5rem;
    margin-top: 40px;
  }

  .video-container {
    width: 100%;
    height: auto;
  }
}

.project-pane {
  transition: transform 0.3s ease;
}

.project-pane:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
</style>

