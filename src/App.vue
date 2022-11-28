<template>
  <NavBar/>
  <div class="container is-max-desktop">
    <RouterView/>
  </div>
</template>
<script setup>
/*
import
 */
import NavBar from '@/components/Layout/NavBar.vue'
</script>
<style>
@import 'bulma/css/bulma.min.css';
</style>
