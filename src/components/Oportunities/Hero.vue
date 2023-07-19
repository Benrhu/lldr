<script lang="ts">
export default {
  name: 'AboutHero'
}
</script>

<template>
  <div class="grid grid-cols-3 gap-4 relative dark:text-elucidator-50 custom-background">
    <div class="col-span-full md_col-span-2 pt-15 md_pt-24 text-center md_text-left">
      <span class="fs-base medium-fs-large font-semibold">Talento. Comunidad. Sinergias</span>
      <h1
        class="fs-8 medium-fs-2 font-bold leading-9 md_leading-tight mt-4 mb-10 md_mb-8 relative md_w-auto mx-auto z-20 w-[450px]"
      >
      Esta sección está destinadda a publicar oportunidades para esta comunidad.
      </h1>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
.float {
  animation: float 3s ease-in-out;
}

.custom-background {
  border-radius: 50px;
  color: white;
  width: auto;
  height: 100%;
  margin: 0;
  background-size: 200% 200%;
  background-image: linear-gradient(45deg, skyblue, #ff00ff);
  animation: gradient 5s infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
