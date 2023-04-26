<script setup lang="ts">

const postsData = await fetch('http://localhost:3000/posts');
const posts =  await postsData.json();

</script>

<template>
    <div class="previas-posts">
        <div v-for="p in posts" class="previa-post">
            <h1>{{ p.title }}</h1>
            <p>
                {{ p.content }}
            </p>
            <a href="#">Ler mais</a>
        </div>
    </div>
</template>

<style scoped>
.previas-posts{
    margin-top: 2rem;
    display: flex;
    max-width: 1200px;
    flex-wrap: wrap;
    gap: 3rem;
}
.previa-post{
    max-width: 300px;
}
</style>