<script setup lang="ts">
import { marked } from 'marked';
import { computed, ref } from 'vue';
import Comment from '../api/Comment';

let input = ref('* Você pode escrever em markdown.');
let message = ref('');
let isSubmit = ref(false);
const { postId, profileId } = defineProps(['postId', 'profileId'])

let compiledMarkdown = computed(() => {
  return marked(input.value);
})

function update(e){
   input.value = e.target.value;
}

async function newComment(e){
  isSubmit.value = true;
   let dataComment = {
    content: input.value,
    postId,
    profileId,
   }
   const comnt = await Comment.create(dataComment);
   isSubmit.value = false;
   message.value = comnt.message;
}

</script>
<template>
  <div class="form-container">
    <form @submit.prevent="newComment">
      <label>Deixe seu comentário</label>
      <div class="editor-comment">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
      </div>
      <div class="message">{{ message }}</div>
      <button type="submit">
        <li v-if="!isSubmit" class="pi pi-check"></li>
        <li v-else class="pi pi-spin pi-spinner"></li>
        <span>Submeter</span>
      </button>
    </form>
  </div>
</template>
<style scoped>
.form-container form{
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
}
.form-container form > h1{
  font-size: 1rem;
}
label {
  font-weight: 700;
  font-family: 'Yeseva One', cursive;
}
.editor-comment textarea{
  width: 100%;
  max-width: 600px;
  min-height: 100px;
  max-height: 200px;
  margin-top: 0.5em;
}
button {
  max-width: 150px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: unset;
  background-color: var(--bkg-button);
  color: #230c0f;
  font-weight: 700;
  padding: 1em 2.5em;
  margin-top: 1em;
  border-radius: 5px;
  transition: all 200ms;
  cursor: pointer;
}
button i{
  line-height: 0;
}
button:hover{
  filter: brightness(110%);
}
.message{
  color: var(--color-message-sucess);
}
</style>
