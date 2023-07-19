<script setup lang="ts">
import Hero from "../components/Home/Hero.vue"
import Features from "~/components/Home/Features.vue"
import { getArticles } from "~/data"
import { limitString, slug } from "~/utils"

// Get articles data
const articles = computed(() => {
  return getArticles(3)
})
</script>

<template>
  <div class=" mx-auto">
    <Hero />
    <Features />
  </div>
</template>

<style scoped>
.container {
  max-width: 80rem;
}

.top-space {
  margin-top: 124px;
}
</style>
