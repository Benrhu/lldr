<script setup lang="ts">
import { ref } from "vue"

const features = ref([
  {
    name: "Crear una comunidad de Discord",
    description:
      "Me encanta ayudar a otras personas que se sienten inseguras debido a sus creencias, que nececsitan conocimiento o simplemnte creerse capaces",
  },
  {
    name: "Ofertas de trabajo",
    description: "Quiero conectar buenas ofertas de buenas empresas con l@s Devs de mi canal",
  },
  {
    name: "Crear empresas con vosotr@s",
    description:
      "Quiero ayudar a crear más empresas y si pueden ser las empresas de personas de esta comunidad, mucho mejor.",
  },
  {
    name: "Crear cursos y guías interactivas",
    description:
      "Crear cursos y guías interactivas Quiero ayudar a crear más empresas y si pueden ser las empresas de personas de esta comunidad, mucho mejor.",
  },
])
</script>

<template>
  <div class="container">
    <div class="about-us">
      <div
        class="col-span-full md_col-span-2 pt-12 md_pt-24 text-center md_text-left dark:text-white"
      >
        <p
          class="fs-8 medium-fs-2 text-1xl leading-9 md_leading-tight mt-4 mb-10 md_mb-8 relative md_w-auto mx-auto z-20 w-full"
        >
          Ya somos unos cuantos en
          <a href="htpps://tiktok.com/@lalocuraderuben"> mi canal de TikTok</a> y llevo unos meses
          pensando qué hacer con esta comunidad. Tengo las siguientes ideas:
        </p>
        <div class="features-container grid-cols-3">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card dark:text-black"
          >
            <p class="feature-name">{{ feature.name }}</p>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features-container {
  margin-top: 10px;
  display: grid;
  justify-content: space-around;
  flex-wrap: wrap;
}
.feature-card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 30px;
  width: 400px;
  text-align: center;
}

.feature-name {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;
}
.feature-description {
  font-size: 16px;
  margin-bottom: 10px;
}
.shadow {
  box-shadow: rgba(149, 157, 165, 0.2) 1px 18px 44px 10px;
}

.skyblue {
  color: #3400ff;
}

.container {
  max-width: 80 rem;
}
</style>
