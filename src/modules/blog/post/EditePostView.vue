<script setup lang="ts">

import { ref } from "vue";
import ButtonVue from './../components/Button.vue';
import { useRoute } from 'vue-router';
import Post from './api/Post';
import type { UpdatePost } from "@/interfaces";
import { VMarkdownEditor } from 'vue3-markdown';
import 'vue3-markdown/dist/style.css';

const route = useRoute();

const p = await Post.get(route.params.id);
const id = ref(p.id);
const title = ref(p.title);
const content = ref(p.content);
const message = ref('');
const isUpdate = ref(false);
const isDelete = ref(false);

async function updatePost(){

    isUpdate.value = true;
    message.value = '';

    const data: UpdatePost = {
        title: title.value,
        content: content.value,
        published: true
    }
 
    const updatePost = await Post.update(data, id.value);
    isUpdate.value = false;
    message.value = updatePost.message;
   
}

async function deletePost(){
    isDelete.value = true;
    message.value = '';
    const deletePost = await Post.delete(id.value);
    message.value = deletePost.message;
    isDelete.value = false;
}

console.log(content.value)
</script>

<template>
    <div class="editor-container">
    <div>
        <input 
        class="input-edite-title" 
        type="text" 
        v-model="title">
    </div>
    <VMarkdownEditor
    class="editor"
    v-model="content"
    locale="en"
    />
    <!-- Buttons -->
    <span class="message">{{ message }}</span>
    <div class="action-buttons">
        <ButtonVue v-on:click="updatePost">
            <span>Atualizar</span>
            <i class="pi pi-sync" :class="{ loading: isUpdate }"></i>
        </ButtonVue>
        <ButtonVue v-on:click="deletePost">
            <span>Deletar</span>
            <i class="pi pi-times" :class="{ 'pi-spinner': isDelete }"></i>
        </ButtonVue>
    </div>
    </div>
</template>
<style scoped>
.config-buttons{
    max-width: 500px;
    display: flex;
}
.config-buttons span{
    flex: 1 2 50px;
    cursor: pointer;
}
.editor {
  min-height: 50vh;
}
.input-edite-title{
   margin: 1rem 0;
   padding-bottom: .5rem;
   width: 100%;
   height: auto;
   border: none;
   outline: none;
   border-bottom: .3px solid #8d8d8d;
   transition: all 200ms;
   overflow-y: hidden;
}
.input-edite-title:focus{
   border-bottom: .5px solid var(--bkg-button);
}
.input-edite-title, .input-edite-title::placeholder{
    color: #000000;
    font-size: 2rem;
}
.action-buttons{
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 450px;
    gap: 50px;
}
.pi{
    line-height: 0;
}
.loading, .pi-spinner{
    animation: loading 500ms infinite;
}
@keyframes loading {
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
}
.message{
    color: var(--color-message-sucess);
}
</style>