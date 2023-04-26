<script setup lang="ts"> 
import ArticleCompnt from '@/components/Article.vue';
import Comments from '@/components/Comment.vue';
import { useRoute } from 'vue-router';

interface Post {
  author:{
    name: string;
  };
  title?: string;
  content?: string;
  likes?: number | string;
  message?: string;
}


const route = useRoute();
const postsData = await fetch('http://localhost:3000/posts/' + route.params.id);
const post: Post =  await postsData.json();

</script>
 
<template>
    <main>

        <ArticleCompnt 
          :author="post.author"
          :title="post.title"
          :content="post.content"
          :likes="post.likes" 
        />

        <h2 v-if="post.message">{{ post.message }}</h2>

        <Comments />

    </main>
</template>

<style scoped>

</style>