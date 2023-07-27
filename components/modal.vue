<script>
export default {
  data() {
    url: "https://mpt6p50zrwq.typeform.com/to/lvVULsIQ";
  },
  props: ["show", "jobOffer"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div v-if="show" class="modal">
      <div class="modal-overlay" @click="$emit('close')"></div>
      <div class="modal-content">
        <button class="close" @click="$emit('close')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2 class="text-2xl font-bold mb-4">{{ jobOffer.title }}</h2>
        <p class="mb-2"><strong>Categoría:</strong> {{ jobOffer.category }}</p>
        <p class="mb-2">
          <strong>Tipo de trabajo:</strong> {{ jobOffer.jobType }}
        </p>
        <p class="mb-2"><strong>Ubicación:</strong> {{ jobOffer.location }}</p>
        <p class="mb-2"><strong>Requisitos:</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li
            v-for="(requirement, index) in jobOffer.requirements
              .split('.')
              .filter((r) => r)"
            :key="index"
          >
            {{ requirement.trim() }}
          </li>
        </ul>
        <NuxtLink
          to="https://mpt6p50zrwq.typeform.com/to/lvVULsIQ"
          target="_blank"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Aplicar
        </NuxtLink>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
