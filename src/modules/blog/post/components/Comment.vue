<script setup lang="ts">
import type { CommentCreate } from '../interface/Comment';
import Button from '../../components/Button.vue';
import Comment from '../api/Comment'
import { ref, reactive } from 'vue';
import { marked } from 'marked';

const isAutentication = ref(false);

const { idPost } = defineProps(['idPost']);
const comnts = reactive<CommentCreate[]>([]);
const comments: CommentCreate[] = await Comment.getAll(idPost);

for (let i = 0; i < comments.length; i++) {

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

console.log()
</script>

<template>
  <div v-for="c in comnts" :key="c.id" class="commented">
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
    <div class="comment-buttons">
      <div v-if="isAutentication">
      <button @click="editeComment(c.id)" class="update">
        <li class="pi pi-pencil"></li>
        <span>Editar</span> 
      </button>
      <button @click="deleteComment(c.id)" class="delete">
        <li class="pi pi-trash"></li>
        <span>Deletar</span>
      </button>
      </div>
      <div class="likes">
        <span>{{ 1 }}</span>
        <i class="pi pi-heart"></i>
      </div>  
    </div>
  </div>
</template>
  
<style scoped>
.commented{
  max-width: 500px;
  margin-top: 3rem;
  background-color: #eeeeee;
  padding: .5rem;
  border-radius: var(--radius-container);
}
.update, .delete{
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-right: 1rem;
  border: none;
  padding: .4rem .5rem;
  border-radius: 3px;
  color: #000;
  font-size: .8rem;
  line-height: 0;
  transition: 200ms all;
  cursor: pointer;
}
.update{
  background-color: var(--bkg-button);
}
.delete{
  background-color: var(--bkg-button-delete);
}
.likes{
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  line-height: 0;
  cursor: pointer;
}
.update:hover, .delete:hover{
  filter: brightness(110%);
}
.comment-author-info{
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
  border-radius: 50%;
}
.comment-content{
  margin: 1rem 0;
}
</style>