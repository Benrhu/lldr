<script>
import JobBoard from "../../components/jobs/JobBoard.vue";

export default {
  components: {
    JobBoard,
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-center" style="height: 100vh">
    <h1 class="mb-20">Ofertas de trabajo</h1>
    <JobBoard />
  </div>
</template>
