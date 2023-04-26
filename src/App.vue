<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderCompont from './components/Header.vue';
</script>

<template>
  
    <HeaderCompont/>

    <Suspense>
      <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </template>
    </RouterView>
    </Suspense>

</template>



<style scoped>
</style>
