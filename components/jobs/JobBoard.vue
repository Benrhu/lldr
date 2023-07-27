<script>
import Modal from "@/components/modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      category: "Programming",
      title: "Senior Full Stack Backend Engineer",
      jobType: "Full-time",
      location: "Remote",
      requirements: `Experiencia demostrable en el desarrollo de aplicaciones web. Conocimiento sólido de lenguajes de programación web como JavaScript, HTML y CSS. Experiencia con bases de datos y sistemas de seguridad. Experiencia en la integración de APIs y pasarelas de pago. Conocimiento en diseño de interfaces y experiencia de usuario. Experiencia en el desarrollo de sistemas de seguridad y ciberseguridad. Capacidad para trabajar en equipo y de manera independiente. Excelentes habilidades de comunicación y resolución de problemas.`,
      showModal: false,
    };
  },
  methods: {
    applyNow() {
      // Logic for applying to the job
    },
    openModal() {
      this.showModal = true;
    },
  },
};
</script>

<template>
  <div
    class="bg-gradient-to-r from-green-400 to-blue-500 shadow-xl w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md text-white"
  >
    <div>
      <span class="text-white text-sm">{{ category }}</span>
      <h3 class="font-bold mt-px">{{ title }}</h3>
      <div class="flex items-center gap-3 mt-2">
        <span class="bg-white text-blue-700 rounded-full px-3 py-1 text-sm">{{
          jobType
        }}</span>
        <span
          class="bg-white text-blue-700 rounded-full px-3 py-1 text-sm was gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {{ location }}
        </span>
      </div>
    </div>
    <div>
      <button
        class="bg-white text-blue-700 font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-blue-700 hover:text-white transition-colors duration-200"
        @click="
          $emit('viewJob', { category, title, jobType, location, requirements })
        "
      >
        Ver
      </button>
    </div>
    <Modal :show="showModal" @close="showModal = false" />
  </div>
</template>

<style scoped>
.was {
  display: flex;
}
</style>
