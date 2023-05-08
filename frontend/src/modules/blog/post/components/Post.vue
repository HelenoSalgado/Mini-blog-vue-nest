<script setup lang="ts">
import { ref } from 'vue';
import { likeAdd } from '../api/like';

const { 
  id, author, title, updatedAt, content, views, likes, comments
} = defineProps([
  'id',
  'author', 
  'title', 
  'updatedAt', 
  'content', 
  'views', 
  'likes',
  'comments'
]);

let likeInput = ref(likes);
let isLike = ref(true);

async function like(){
    if(isLike.value){
        var l = await likeAdd(id, likeInput.value+1);
        isLike.value = false;
    }else{
        var l = await likeAdd(id, likeInput.value-1);
        isLike.value = true;
    }
    likeInput.value = l.likes; 
}
</script>

<template>
    <div>
        <article class="article">
            <div class="article-author">
                <div class="author-info">
                  <img v-if="author?.avatar != null" :src="author?.avatar"/>
                  <span v-else class="pi pi-user" style="font-size: 1.5rem;" shape="circle"></span>
                    <div>
                        <h3>{{ author?.name }}</h3>
                        <span class="date-update">Atualizado em {{ updatedAt }}</span>
                    </div>
                </div>
                <span class="view">
                  <span>{{ views }}</span>
                  <i class="pi pi-eye"></i>
                </span>
                
            </div>
            <div class="body-article">
                <h1>{{ title }}</h1>
                <span v-html="content"></span>
            </div>
            <div class="interactions-article">
              <div @click="like" class="likes">
                <i class="pi pi-heart" :class="{'like-active': !isLike}"></i>
                <span>{{ likeInput }}</span>
              </div>
              <div class="comments">
                <i class="pi pi-comment"></i>
                <span>{{ comments }}</span>
              </div> 
            </div>
        </article>
    </div>
</template>
<style scoped>
  .body-article h1{
    margin: 1rem 0;
    font-weight: bold;
  }
  .article-author{
    margin-bottom: 2rem;
  }
  .author-info{
    line-height: 1rem;
  }
  .author-info h3{
    font-weight: bold;
  }
  .article-author, .author-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .article-author img{
    width: 50px;
    border-radius: 50%;
  }
  .date-update{
    font-size: small;
    font-style: oblique;
  }
  .view{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: small;
  }
  .interactions-article{
    margin: 2rem 0;
    display: flex;
  }
  .interactions-article i{
    margin: .5rem;
    vertical-align: middle;
  }
  .likes, .comments{
    min-width: 50px;
    padding: 0 .3rem;
    display: inline-flex;
    align-items: center;
    background-color: #ebebeb;
    border-radius: 7px;
    margin-right: .5rem;
    line-height: 0;
    cursor: pointer;
  }
  img{
    max-width: 800px;
    border-radius: 7px;
  }
</style>