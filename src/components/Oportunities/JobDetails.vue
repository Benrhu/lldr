<script setup lang="ts">
import { ref } from "vue"

const job = ref({
  position: "Programador/a Mobile Frontend",
  description:
    "Se ofrece una contratación para el desarrollo frontend de una App, tanto para Android como para iOS.",
  contract: "Proyecto puntual",
  stack: ["Java", "MySql"],
  url: "https://yousellvideo.typeform.com/to/HS5as9RR",
})
</script>

<template>
  <div class="job-details">
    <h1><i class="fas fa-briefcase"></i> {{ job.position }}</h1>
    <p><i class="fas fa-info-circle"></i> {{ job.description }}</p>
    <p><i class="fas fa-file-contract"></i> Contrato: {{ job.contract }}</p>
    <p><i class="fas fa-laptop-code"></i> Tecnologías: {{ job.stack.join(", ") }}</p>
    <a :href="job.url" class="details-link"
      ><i class="fas fa-external-link-alt"></i> Más detalles</a
    >
  </div>
</template>

<style scoped>
.job-details {
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.job-details:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.job-details h1 {
  color: #0093e9;
  font-size: 24px;
  margin-bottom: 10px;
}

.job-details p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 10px;
}

.details-link {
  display: inline-block;
  padding: 12px 24px;
  background-color: #0093e9;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  text-decoration: none;
}

.details-link:hover {
  background-color: #0077b6;
}
</style>
