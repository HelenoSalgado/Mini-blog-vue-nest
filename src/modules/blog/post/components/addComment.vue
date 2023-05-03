<script setup lang="ts">

import { marked } from 'marked';
import { computed, ref } from 'vue';
let input = ref('* Você pode escrever em markdown.');


let compiledMarkdown = computed(() => {
  return marked(input.value);
})

function update(e){
   input.value = e.target.value;
}
      


</script>
<template>
  <div class="form-container">
    <form>
      <label>Deixe seu comentário</label>
      <div class="editor-comment">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
      </div>
      <button>Submeter</button>
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
