<script setup lang="ts">
import HeaderComnt from '@/components/Header.vue'; 
import PreviasPosts from './components/PreviaPost.vue';
</script>
<template>
   <HeaderComnt />
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