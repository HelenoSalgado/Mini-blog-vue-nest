<script setup lang="ts">
import SearchDashboard from './SearchDashboard.vue';
</script>
<template>
<div class="container-nav-top">
<div class="search">
<SearchDashboard />
</div>
<div class="infos">
<div class="notifications">
    <div>
        <i class="pi pi-bell" style="color: #7D95FC;"></i>
        <span>5</span>
    </div>
    <div>
        <i class="pi pi-comment" style="color: #7D95FC;"></i>
        <span>8</span>
    </div>
</div>
<div class="user">
    <h3>Olá, Heleno</h3>
    <img src="https://avatars.githubusercontent.com/u/73316162?s=400&u=e9fb989b32a0b6c554418dfc09fb4c0e4784e773&v=4" alt="">
</div>
</div>
</div>
</template>
<style scoped>
.container-nav-top{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search{
  width: 72%;  
}
.infos{
  display: flex;
  gap: 2rem;
}
.notifications{
    display: flex;
    padding: 1rem;
    gap: 1rem;
}
.notifications div{
    flex: 1 1 50px;
    background-color: #8fe9ff;
    border-radius: 5px;
    padding: .3rem;
}
.notifications div i{
    margin: .3rem;
}
.notifications div span{
    position: absolute;
    font-size: 13px;
    line-height: 0;
    color: #7D95FC;
}
.user{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.user img{
    width: 40px;
    border-radius: 50%;
}
</style>