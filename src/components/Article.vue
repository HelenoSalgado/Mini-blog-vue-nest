<script setup lang="ts">

interface Post {
    author:{
    name: string;
  };
  title?: string;
  content?: string;
  likes?: number | string;
}

const {author, title, content, likes} = defineProps<Post>()

console.log(author);

</script>

<template>
    <div>
    <article class="article">
        <div class="author-article">
            <h3>Autor: {{ author?.name }}</h3>
        </div>
        <div class="body-article">
            <h1>{{ title }}</h1>
            <p>
              {{ content }}
            </p>
        </div>
        <span class="likes-article">
            {{ likes }}
        </span>
        </article>
    </div>
</template>