<script setup lang="ts">
import { marked } from 'marked';
import { computed, ref } from 'vue';
import Comment from '../api/Comment';

let input = ref('* Você pode escrever em markdown.');

let compiledMarkdown = computed(() => {
  return marked(input.value);
})

function update(e){
   input.value = e.target.value;
}

async function newComment(e){
   let dataComment = {
    content: input.value,
    postId: 'sssuxNHnCRs',
    profileId: 'FxB1AAb2jrw' 
   }
   await Comment.create(dataComment);
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
      <button type="submit">
        <li class="pi pi-check"></li>
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
button:hover{
  filter: brightness(110%);
}
</style>
