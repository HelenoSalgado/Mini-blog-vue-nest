<script setup lang="ts">
import Button from '../../components/Button.vue';

const { author } = defineProps(['author']);

</script>

<template>
  <div class="commented">
    <div class="comment-author-info">
      <img v-if="author?.avatar != null" :src="author?.avatar" />
      <span v-else class="pi pi-user" style="font-size: 1.5rem;"></span>
      <div>
        <h5>{{ author?.name }}</h5>
      </div>
    </div>
    <div class="comment-content">
       <p>I found this article helpful</p>
    </div>
   
    <div class="comment-buttons">
      <button class="update">Atualizar</button>
      <button class="delete">Deletar</button>
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
  background-color: #e9e9e9;
  padding: .5rem;
  border-radius: var(--radius-container);
}
.update, .delete{
  margin-right: 1rem;
  border: none;
  padding: .3rem .5rem;
  border-radius: 3px;
  color: #000;
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