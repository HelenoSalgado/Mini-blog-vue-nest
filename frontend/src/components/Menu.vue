<script setup lang="ts">
 import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
     <nav class="navigator">
        <RouterLink class="link-animation" to="/">Home</RouterLink>
        <RouterLink class="link-animation" to="/about">About</RouterLink>
        <RouterLink class="link-animation" to="/blog">Blog</RouterLink>
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