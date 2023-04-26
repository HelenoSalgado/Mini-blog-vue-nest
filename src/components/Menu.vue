<script setup lang="ts">
 import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
     <nav class="navigator">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
      </nav>
    </div>
</template>

<style scoped>
.navigator{
  display: flex;
  max-width: 500px;
  justify-content: start;
  align-items: center;
  gap: 2rem;
}
</style>