<script setup lang="ts">
import { marked } from 'marked';
import { reactive } from 'vue';
import Post from '../post/api/Post';
import { likeAdd } from '../post/api/like';
import { ref } from 'vue';
import type { PreviaPost } from '../interfaces/PreviaPost'

const posts = reactive<PreviaPost[]>([]);
let isLike = ref(true);

const postsAll = await Post.getAll();

for (let i = 0; i < postsAll.length; i++) {
    const post = {
        id: postsAll[i].id,
        title: postsAll[i].title,
        content: marked(postsAll[i].content),
        comments: postsAll[i].comments.length,
        likes: postsAll[i].likes,
    }
    posts.push(post);
};

async function like(id: string, likes: number){
    if(isLike.value){
        var l = await likeAdd(id, likes+1);
        isLike.value = false;
    }else{
        var l = await likeAdd(id, likes-1);
        isLike.value = true;
    }
    let index = posts.findIndex((c) => { return c.id == id});
    posts[index].likes = l.likes; 
}

</script>

<template>
    <div class="previas-posts">
        <h2 v-if="posts == null">Nenhum post ainda</h2>
        <div v-for="p in posts" :key="p.id" class="previa-post">
            <div class="filter">
                <h1>{{ p.title }}</h1>
                <p v-html="p.content"></p>
            </div>
            <div class="info-buttons">
                <button>
                    <a :href="'http://localhost:5173/posts/' + p.id">Mais
                        <i class="pi pi-angle-double-right"></i>
                    </a>
                </button>
                <div class="button-interations">
                    <div
                    @click="like(p.id, p.likes)"
                    class="likes">
                        <span>{{ p.likes }}</span>
                        <i class="pi pi-heart" :class="{'like-active': !isLike}"></i>
                    </div>
                    <div class="comments">
                        <span>{{ p.comments }}</span>
                        <i class="pi pi-comment"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.previas-posts{
    margin-top: 2rem;
    display: flex;
    max-width: 1200px;
    flex-wrap: wrap;
    gap: 3rem;
}
.previas-posts h1{
    line-height: 1.9rem;
    margin-bottom: 1rem;
}
.previa-post{
   position: relative;
   margin: 2rem 0;
}
.filter{
  position: relative;
  height: 14.5rem;
  text-overflow: ellipsis; 
  overflow: hidden;   
}
.previa-post::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(transparent 50%, #FFFFFF);
    z-index: 1;
}
.previa-post{
    max-width: 300px;
}
.info-buttons{
    position: absolute;
    top: 15rem;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.previa-post button{
    z-index: 2;
    border: solid 1px var(--bkg-button);
    border-radius: 5px;
    padding: .5rem 1rem;
    font-size: .9rem;
    cursor: pointer;
    transition: all 300ms;
}
.previa-post button:hover{
    filter: brightness(80%);
}
.previa-post button > a > i{
   vertical-align: middle;
   left: .3rem;
}
.button-interations{
    display: inline-flex;
    gap: 10px;
}
.likes i, .comments i{
    vertical-align: middle;
    margin: .5rem;
    cursor: pointer;
}
</style>