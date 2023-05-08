<script setup lang="ts">
import type { CreatePost } from '@/interfaces';
import Post from '@/modules/blog/post/api/Post';
import Chart from 'chart.js/auto';
import { onMounted, ref, reactive } from 'vue';

const postsAll = await Post.getAll();

const interationsInPosts = reactive<CreatePost[]>([]);

const week = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
const dayPost = [
    {
        day: 'Segunda',
        views: 10
    },
    {
        day: 'Terça',
        views: 11
    },
    {
        day: 'Quarta',
        views: 0
    },
    {
        day: 'Quinta',
        views: 7
    },
    {
        day: 'Sexta',
        views: 15
    },
    {
        day: 'Sábado',
        views: 5
    },
    {
        day: 'Domingo',
        views: 2
    },
]

postsAll.map(p => {
    const post = {
        id: p.id,
        views: p.views,
        likes: p.likes,
        comments: p.comments,
    };
    return interationsInPosts.push(post);
});

onMounted(() => {
   new Chart(
    document.getElementById('postsAnalytics'),
    {
      type: 'bar',
      data: {
        labels:  dayPost.map(day => { return day.day}),
        datasets: [
          {
            label: 'visitas',
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            borderRadius: 5,
            data: dayPost.map(post => post.views)
          }
        ]
      }
    }
  );
})
 
</script>
<template>
<div class="container-analytics">
<div class="container-posts-views">
<h2>Visitas</h2>
<div class="posts-analytics">
  <canvas id="postsAnalytics"></canvas>
</div>
</div>
<div class="top-media-shared">
<h3>Top Shered Media</h3>
<div class="interations-media">
  <div><i class="pi pi-facebook" style="color: #508bce;"></i>
    <span>Facebook</span><span>100k</span>
  </div>
  <div><i class="pi pi-whatsapp" style="color: #50ce8f;"></i>
    <span>WhatsApp</span><span>600k</span>
  </div>
  <div><i class="pi pi-twitter" style="color: #5095ce;"></i>
    <span>Twitter</span><span>300k</span>
  </div>
  <div><i class="pi pi-telegram" style="color: #50bfce;"></i>
    <span>Telegram</span><span>50k</span>
  </div>
</div> 
</div>
</div>

</template>
<style scoped>
.container-analytics{
    margin: 3rem 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 100%;
    gap: 2rem;
}
.container-posts-views, .top-media-shared{
  background-color: #8fe9ff;
  padding: 1rem;
  border-radius: 15px;
}
.container-posts-views{
    width: 40vw;
}
.top-media-shared{
    width: 15vw;
}
.interations-media div{
  margin: 1rem 0;
  display: flex;
  align-items: center;
}
.interations-media div i{
    line-height: 0;
    margin-right: .5rem;
}
.interations-media div span:nth-child(3){
    margin-left: 1rem;
    font-weight: bold;
}

</style>