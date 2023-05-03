<script setup lang="ts">

const { 
  author, title, updatedAt, content, views, likes 
} = defineProps([
  'author', 
  'title', 
  'updatedAt', 
  'content', 
  'views', 
  'likes'
]);
console.log(author)
</script>

<template>
    <div>
        <article class="article">
            <div class="article-author">
                <div class="author-info">
                  <img v-if="author?.avatar != null" :src="author?.avatar"/>
                  <span v-else class="pi pi-user" style="font-size: 1.5rem;"></span>
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
            <div class="likes-article">
              <span>{{ likes }}</span>
              <i class="pi pi-heart"></i>
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
  .likes-article{
    width: 50px;
    background-color: #d6d6d6;
    border-radius: 7px;
    padding: 0 .3rem;
    margin: .5rem 0;
    cursor: pointer;
  }
  .likes-article i{
    margin: .5rem;
    vertical-align: middle;
  }
  img{
    max-width: 800px;
    border-radius: 7px;
  }
</style>