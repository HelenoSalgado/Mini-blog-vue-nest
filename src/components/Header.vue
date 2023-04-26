<script setup lang="ts">
import Menu from './Menu.vue';
</script>

<template>
    <header class="header">
        <Menu/>
    </header>
</template>

<style>
  .header{
    width: 100%;
    margin: auto;
    padding: .5rem;
    border-bottom: 1px solid var(--color-text-black-soft);
    margin-bottom: 4rem;
  }
</style>