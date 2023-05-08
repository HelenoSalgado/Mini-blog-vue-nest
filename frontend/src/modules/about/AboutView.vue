<script setup lang="ts">
import HeaderComnt from '@/components/Header.vue';
</script>
<template>
<HeaderComnt />
  <main class="about">
    <h1>Sobre</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, officia. Ab natus eius neque dolorum blanditiis harum eum recusandae quisquam aperiam? Odit quam officia accusamus? Nesciunt earum nisi tenetur minima?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed placeat alias facilis nihil odio dolor. Reiciendis tenetur, dicta, inventore, sequi molestiae illo natus quod sint modi expedita laboriosam commodi.</p>
  </main>
</template>

<style>
.about{
  max-width: var(--max-width-conteiner);
  padding: var(--padding-conteiner);
}
.about h1{
  margin-bottom: 1rem;
}
</style>
