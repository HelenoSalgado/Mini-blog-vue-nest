<script setup lang="ts">
</script>
<template>
<div class="blocks-info">
    <div>
       <i class="pi pi-user-plus" style="color: #8bad50;"></i>
       <div>
        <span>122k</span>
        <span>Seguidores</span>
       </div>
    </div>
    <div>
       <i class="pi pi-comments" style="color: #337272;"></i>
       <div>
        <span>122k</span>
        <span>Comentários</span>
       </div>
    </div>
    <div>
       <i class="pi pi-heart-fill" style="color: #FF3F69;"></i>
       <div>
        <span>122k</span>
        <span>Curtidas</span>
       </div>
    </div>
    <div>
       <i class="pi pi-eye" style="color: #508fad;"></i>
       <div>
        <span>122k</span>
        <span>Vizualizações</span>
       </div>
    </div>
</div>
</template>
<style scoped>
.blocks-info{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.blocks-info > div{
    flex: 1 1 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 100px;
    background-color: #8fe9ff;
    border-radius: 15px;
}
.blocks-info > div span{
    display: block;
}
.pi{
    font-size: 2rem;
}
</style>