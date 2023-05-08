<script setup lang="ts">
import { ref } from "vue";
const search = ref('');
</script>
<template>
    <div>
        <label class="label-search"> 
            <div class="lupa">
                <span class="pi pi-search" style="color: #8fe9ff;"></span>
            </div>
            <input v-model="search" type="search">
        </label>
    </div>
</template>
<style scoped>
.label-search{
    display: flex;
    align-items: center;
}
.label-search input{
    padding: .3rem .5rem .3rem 25px;
    font-size: larger;
    border: .5px solid #8fe9ff;
    border-radius: 7px;
    margin: 0;
    transition: 300ms all;
    width: 100%;
    background-color: transparent;
    font-family: initial;
}
.label-search input:focus{
    outline: solid .6px var(--bkg-button);
    box-shadow: var(--shadow-elevation-medium);
}
.lupa{
    left: 20px;
    width: fit-content;
    z-index: -1;
}
.lupa:hover{
    left: 0;
}
</style>