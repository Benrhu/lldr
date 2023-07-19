<script setup lang="ts">
import { ref } from "vue"
import Modal from "./Modal.vue"
import JobDetails from "./JobDetails.vue"

const jobs = ref([
  {
    position: "Programador/a Mobile Frontend",
    description:
      "Se ofrece una contratación para el desarrollo frontend de una App, tanto para Android como para iOS.",
    contract: "Proyecto puntual",
    stack: ["Java", "MySql"],
    url: "https://#",
  },
])

const showModal = ref(false)
const selectedJob = ref(null)

const openModal = (job) => {
  selectedJob.value = job
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <div class="job-offers">
    <h2>Ofertas de trabajo</h2>
    <div class="job-cards">
      <div v-for="(job, index) in jobs" :key="index" class="feature-card">
        <h3 class="feature-name job-position">{{ job.contract }}</h3>
        <p class="feature-name">{{ job.position }}</p>
        <p class="feature-description">{{ job.description }}</p>
        <button class="button" @click="openModal(job)">Ver más</button>
      </div>
    </div>
    <Modal :show="showModal" @close="closeModal">
      <JobDetails :job="selectedJob.value" />
    </Modal>
  </div>
</template>

<style>
.job-offers {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.feature-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 50px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.feature-name {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.feature-description {
  color: #666;
  line-height: 1.6;
  padding: 25px;
}

.button {
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
}

.button:hover {
  background-color: #0077b6;
}

.job-cards {
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.job-position {
  color: gray;
}
</style>
