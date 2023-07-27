<script>
import Init from "../components/home/Init.vue";

export default {
  components: {
    Init,
  },
  methods: {
    openInNewTab(event) {
      event.preventDefault();
      global.window.open(event.target.href, "_blank");
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-center" style="height: 100vh">
    <Init />
    <NuxtLink
      class="m-3 bg-white hover:bg-blue-400 text-blue-600 font-bold py-2 px-4 border border-b-4 border-blue-700 hover:border-blue-500 rounded"
      to="/jobs/"
      target="_blank"
      >Oportunidades de trabajo</NuxtLink
    >
    <NuxtLink
      class="m-3 bg-white hover:bg-blue-400 text-blue-600 font-bold py-2 px-4 border border-b-4 border-blue-700 hover:border-blue-500 rounded"
      to="https://tiktok.com/@lalocuraderuben"
      target="_blank"
      >Mi canal de TikTok</NuxtLink
    >
    <NuxtLink
      class="m-3 bg-white hover:bg-blue-400 text-blue-600 font-bold py-2 px-4 border border-b-4 border-blue-700 hover:border-blue-500 rounded"
      to="https://hostinger.es?REFERRALCODE=1RUBN06"
      target="_blank"
      >La mejor oferta de Hosting WordPress</NuxtLink
    >
    <NuxtLink
      class="m-3 bg-white hover:bg-blue-400 text-blue-600 font-bold py-2 px-4 border border-b-4 border-blue-700 hover:border-blue-500 rounded"
      to="https://www.youtube.com/@OpenBootcamp/playlists"
      target="_blank"
      >Aprende programación GRATIS con OB &hearts;</NuxtLink
    >
    <NuxtLink
      class="m-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      to="/resources/"
      target="_blank"
      >Ir a recursos!</NuxtLink
    >
  </div>
</template>
