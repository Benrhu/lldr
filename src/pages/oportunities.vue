<script setup lang="ts">
import Hero from '~/components/Oportunities/Hero.vue'
import Jobs from '~/components/Oportunities/Jobs.vue'
import Oportunities from '~/components/Oportunities/Oportunities.vue'
</script>

<template>
  <div class="container mx-auto">
    <Hero />
    <Oportunities />
    <Jobs />
  </div>
</template>

<style scoped>
.container {
  max-width: 80rem;
}
</style>
