<script setup lang="ts">
import { marked } from 'marked';
import { computed, onMounted, reactive } from 'vue';
import Post from '../post/api/Post';

const p = [];
const posts = reactive(p);


onMounted(async () => {
    const post = new Post();
    const postsAll = await post.getAll();

    for (let i = 0; i < postsAll.length; i++) {
        const post = {
            id: postsAll[i].id,
            title: postsAll[i].title,
            content: marked(postsAll[i].content),
            likes: postsAll[i].likes,
        }
        posts.push(post);

    };
});
</script>

<template>
    <div class="previas-posts">
        <h2 v-if="posts==null">Nenhum post ainda</h2>
        <div v-for="p in posts" :key="p.id" class="previa-post">
            <div class="filter">
            <h1>{{ p.title }}</h1>
            <p v-html="p.content"></p>
            </div>
            <div class="info-buttons">
               <button>
                  <a :href="'http://localhost:5173/posts/'+p.id">Mais
                     <i class="pi pi-angle-double-right"></i>
                  </a>
                </button>
                <div class="like">
                    <span>{{ p.likes }}</span>
                    <i class="pi pi-heart"></i>
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
    width: 80%;
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
.like i{
    vertical-align: middle;
    margin: .5rem;
    cursor: pointer;
}
</style>