<script setup lang="ts">

</script>
<template>
<div class="container-menu">
    <div class="logo">
        <h2>BLOG</h2>
    </div>
<nav class="nav-menu">
    <li><i class="pi pi-chart-pie"></i><a href="#">Dashboard</a></li>
    <li><i class="pi pi-user-edit"></i><a href="#">Perfil</a></li>
    <li><i class="pi pi-file-edit"></i><a href="#">Posts</a></li>
    <li><i class="pi pi-envelope"></i><a href="#">Emails</a></li>
    <li><i class="pi pi-cog"></i><a href="#">Configurações</a></li>
</nav>
</div>
</template>
<style scoped>
.container-menu{
    padding: 1rem 2rem 1rem 0;
    border-right: 1px solid #8fe9ff;
}
.logo h2{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
}
.nav-menu{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.nav-menu li{
    display: inline-flex;
    align-items: center;
    gap: 5px;
    line-height: 0;
    margin: 1rem 0;
    padding: .5rem;
    transition: 200ms all;
}
.pi{
    font-size: 1.1rem;
    color: #7D95FC;
}
.nav-menu li:hover{
    background-color: #8fe9ff;
    border-radius: 7px;
}
</style>