<script>
export default {
  props: ["show"],
  methods: {
    closeModal() {
      this.$emit("close")
    },
  },
}
</script>

<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <slot></slot>
      <button @click="closeModal">Cerrar</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  /* Estilos para el modal */
}

.modal-content {
  /* Estilos para el contenido del modal */
}
</style>
