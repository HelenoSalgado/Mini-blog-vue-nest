<script setup lang="ts"> 
import PreviasPosts from './components/PreviaPost.vue';
</script>
<template>
   <div class="blog">
    <main>
        <div class="blog-header">
            
        </div>
        <Suspense>
            <PreviasPosts/>
        </Suspense>
    </main>
   </div>
</template>

<style scoped>

</style>