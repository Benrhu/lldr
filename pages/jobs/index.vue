<script>
import Modal from "@/components/modal.vue";
import JobBoard from "../../components/jobs/JobBoard.vue";

export default {
  components: {
    JobBoard,
    Modal,
  },
  data() {
    return {
      showModal: false,
      currentJobOffer: null,
    };
  },
  methods: {
    viewJob(jobOffer) {
      this.currentJobOffer = jobOffer;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-center" style="height: 100vh">
    <h1 class="mb-20">Ofertas de trabajo</h1>
    <JobBoard @viewJob="viewJob" />
    <Modal :show="showModal" :jobOffer="currentJobOffer" @close="closeModal" />
  </div>
</template>
