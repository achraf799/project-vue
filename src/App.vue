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
}

body {
  background-color: #f3eee8;
  margin: 0;
  padding: 0;
  /* width: 100%; */
  overflow-x: hidden;
}
</style>
