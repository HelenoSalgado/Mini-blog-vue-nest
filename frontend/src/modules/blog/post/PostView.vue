<script setup lang="ts"> 
import HeaderComnt from '@/components/Header.vue';
import PostCompnt from './components/Post.vue';
import addComment from './components/addComment.vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import { defineAsyncComponent, reactive, ref } from 'vue';
import Post from './api/Post';

const Comment = defineAsyncComponent(() =>
  import('./components/Comment.vue')
)

const route = useRoute();
const postId = ref(route.params.id)
const p = await Post.get(postId.value);

const post = reactive({
  id: '',
  author: '',
  title: '',
  updatedAt: '',
  content: '',
  views: 0,
  likes: 0,
  comments: '',
});

post.id = p.id;
post.author = p.author;
post.title = p.title;
post.updatedAt = p.updatedAt.split('T')[0];
post.views = p.views;
post.likes = p.likes;
post.comments = p.comments;
post.content = marked(p.content);

</script>
 
<template>
    <HeaderComnt />
    <main class="main">
    
        <Suspense>
        <PostCompnt
          :id="post.id"
          :author="post.author"
          :title="post.title"
          :updatedAt="post.updatedAt"
          :content="post.content"
          :views="post.views"
          :likes="post.likes"
          :comments="post.comments.length"
        />
        <template #fallback>
          <i class="pi pi-spin pi-spinner spinner-global"></i>
        </template>
        </Suspense>
        <div>
           <!-- <Comment 
           class="message" 
           :idPost="postId"
           /> -->
        </div>
        <addComment 
          :postId="postId"
          :profileId="'FxB1AAb2jrw'"
        />
        <div v-if="post.comments.length > 0">
          <Comment 
           class="message" 
           :id-post="postId"
           />
        </div>

    </main>
</template>

<style scoped>
.main{
  max-width: var(--max-width-conteiner);
  contain: content;
  margin: auto;
  background-color: var(--bkg-white-shaded);
  color: var(--color-text-black-soft);
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