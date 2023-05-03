<script setup lang="ts">

const buttons = defineProps(['']);
const options = {}
const { value } = defineProps(['value']);

</script>
<template>
<header>
    {{ buttons }}
</header>
<textarea 
name="" 
id="" 
cols="30" 
rows="10">
{{value}}
</textarea>

</template>
<style scoped>
</style>