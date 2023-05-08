<script setup lang="ts">
import type { CommentCreate } from '../../blog/post/interface/Comment';
import Comment from '../../blog/post/api/Comment'
import { ref, reactive } from 'vue';
import { marked } from 'marked';

const isAutentication = ref(false);

//const { idPost } = defineProps(['idPost']);
const idPost = 'uU5ik4QVCvb';
const comnts = reactive<CommentCreate[]>([]);
const comments: CommentCreate[] = await Comment.getAll(idPost);

for (let i = 0; i < 4; i++) {

  const comment = {
    id: comments[i].id,
    profile: comments[i].profile,
    content: marked(comments[i].content),
    likes: comments[i].likes,
  }
  comnts.push(comment);
}

async function deleteComment(id: string){
  await Comment.delete(id);
  let i = comnts.findIndex((c) => { return c.id == id});
  comnts.splice(i, 1);
}

function editeComment(id: string){
  console.log(id)
}
</script>
<template>
<div class="container-comments">
    <h3>Comentários Recentes</h3>
<div v-for="c in comnts" :key="c.id" class="comments">
    <div class="comment-author-info">
      <img v-if="c?.profile?.avatar != null" :src="c?.profile?.avatar" />
      <span v-else class="pi pi-user" style="font-size: 1.5rem;"></span>
      <div>
        <h5>{{ c?.profile?.name }}</h5>
      </div>
    </div>
    <div class="comment-content">
       <p v-html="c?.content"></p>
    </div>
    </div>
  </div>
</template>
<style scoped>
.container-comments{
    max-width: 300px;
    height: calc(100% - 3rem);
    background-color: #8fe9ff;
    padding: 1rem;
    border-radius: 15px;
}
.comments{
    display: flex;
    flex-direction: column;
}
.comment-author-info{
  margin-top: 1rem;
  max-width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.comment-author-info h5{
  font-weight: 600;
}
.comment-author-info img{
  width: 30px;
  border-radius: 5px;
}
.comment-content{
  margin: .5rem 0;
}
</style>