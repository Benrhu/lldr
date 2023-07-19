<script lang="ts"></script>

<template>
  <div class="grid grid-cols-3 gap-4 relative dark:text-elucidator-50 custom-background">
    
  </div>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
.float {
  animation: float 3s ease-in-out;
}

.custom-background {
  background: rgb(50, 50, 50);
  background: url('../../assets//images//tiktok.png');
  color: white;
  width: auto;
  height: 70vh;
  margin: 0;
  background-size: 100%;
}

.custom-background input {
  background-color: white;
  width: 50%;
}

.container {
  max-width: 80rem;
}

.color-blue {
  color: #3056d3;
}

.bg-blue {
  background-color: white;
}

.bg-blue:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
