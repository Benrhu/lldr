<script setup lang="ts">
// In this section, we use @vueuse/head. Check this for more detail
// https://github.com/vueuse/head
useHead({
  title: "La Locura de Rubén - Emprendedor, programador, creador de contenido y eterno estudiante",
  meta: [
    {
      name: "description",
      content: "Comparto mi experiencia, recursos útiles para programador@s junior y doy oportunidades de trabajo.",
    },
  ],
})
</script>

<template>
  <div class="min-h-100vh block relative pb-30 flex flex-col">
    <Navbar />
    <main>
      <router-view :key="$route.path" />
      <ToTopBtn />
    </main>
  </div>
</template>
