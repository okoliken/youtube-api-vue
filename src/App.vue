<script setup>

import Nav from "./components/Nav.vue";
// import Sidebar from "./components/Sidebar.vue";

</script>

<template>
  <div>
    <Nav />
    <!-- <Sidebar /> -->
    <RouterView />
  </div>
</template>

<style>
html.dark{
  color-scheme: dark;
}
</style>
