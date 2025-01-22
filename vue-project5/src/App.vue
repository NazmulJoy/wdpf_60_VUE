<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
   

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Ref</RouterLink> &nbsp;
        <RouterLink to="/life">Life Cycle</RouterLink> &nbsp;
        <RouterLink to="/form">Form Input</RouterLink> &nbsp;
        <RouterLink to="/flower">Flower</RouterLink> &nbsp;
        <RouterLink to="/flowerlist">Flower List</RouterLink>
      </nav>
    </div>
  </header>
<br>
  <RouterView />
</template>

<style scoped>

</style>
