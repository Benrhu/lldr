<template>
  <div class="home">
    <main>
      <section class="text-center">
        <h1 class="text-center">La Locura Rubén</h1>
        <h3 class="text-gray-400">Recursos, herramientas y guías para Devs freelancers</h3>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
}

header {
  background-color: #35495e;
  color: white;
  padding: 20px;
}

header h1 {
  margin: 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

main {
  padding: 20px;
}

main section {
  margin-bottom: 20px;
}

footer {
  background-color: #35495e;
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
