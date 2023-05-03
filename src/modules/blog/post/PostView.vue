<script setup lang="ts"> 
import PostCompnt from './components/Post.vue';
import addComment from './components/addComment.vue';
import Comment from './components/Comment.vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import { computed, reactive, ref } from 'vue';
import Post from './api/Post';

const route = useRoute();
const postOne = new Post();
const p = await postOne.get(route.params.id);
console.log(p);
const post = reactive({
  author: '',
  title: '',
  updatedAt: '',
  content: '',
  views: 0,
  likes: 0,
});

post.author = p.author;
post.title = p.title;
post.updatedAt = p.updatedAt.split('T')[0];
post.views = p.views;
post.likes = p.likes;
post.content = marked(p.content);

let newComment = ref('Olá');

console.log(newComment);

</script>
 
<template>
    <main class="main">
    
        <Suspense>
        <PostCompnt
          :author="post.author"
          :title="post.title"
          :updatedAt="post.updatedAt"
          :content="post.content"
          :views="post.views"
          :likes="post.likes"
        />
        <template #fallback>
          <i class="pi pi-spin pi-spinner spinner-global"></i>
        </template>
        </Suspense>
        <div>
           <Comment 
           class="message" 
           :author="post.author"
           />
        </div>
        <addComment 
         :newComment="newComment"
        />

    </main>
</template>

<style scoped>
.main{
  max-width: var(--max-width-conteiner);
  contain: content;
  margin: auto;
  background-color: var(--bkg-white-shaded);
  padding: var(--padding-conteiner);
  border-radius: 7px;
}
img{
    max-width: 800px;
    border-radius: 15px;
    display: block;
    margin: 2rem auto;
}
</style>