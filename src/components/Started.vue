<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="started">
      <h1>
        Comece com uma página simples para sua bio nas redes sociais
      </h1>
        <div class="started-buttons">

            <RouterLink to="/register">
               <button>Começar</button> 
            </RouterLink>
            <RouterLink to="/login">
               <button>Login</button>
            </RouterLink>

        </div>

    </div>
</template>

<style>
.started{
    max-width: 600px;
    background-color: #ddd;
    padding: 1rem;
    border-radius: 7px;
    color: var(--color-text-black-soft);
    background-color: var(--background-gradient-blue-soft);
}
.started h1{
    margin: 2rem 0;
}
.started-buttons{
    display: flex;
    align-items: center;
    gap: 40px;
}
.started-buttons button{
    width: 150px;
    padding: 1rem;
    border: none;
    background-color: #b6b6b6;
    border-radius: 7px;
    font-size: 1rem;
}
</style>