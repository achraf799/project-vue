<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  background-color: #f3eee8;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
}
</style>
