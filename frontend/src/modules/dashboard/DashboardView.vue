<script setup lang="ts">
import MenuDashboard from './components/Menu.vue';
import AnalyticsPost from './components/AnalyticsPost.vue';
import BlocksInfoGeneral from './components/BlocksInfoGeneral.vue';
import CommentsRecent from './components/CommentsRecent.vue';
import PostsRecent from './components/PostsRecent.vue';
import UsedDeviceVue from './components/UsedDevice.vue';
import NavTop from './components/NavTop.vue';

</script>
<template>
    <div class="container-dashboard">
    <MenuDashboard />
    <div>
    <NavTop />
    <div class="group-analytics-comments">
    <div class="blocks-analytics">
       <BlocksInfoGeneral />
       <AnalyticsPost/>  
    </div>
    <div class="comments-recent">
       <CommentsRecent />
    </div>
    </div>
    <div class="group-posts-devices">
      <PostsRecent />
      <UsedDeviceVue /> 
    </div>
    </div>
    </div>
</template>
<style scoped>
.container-dashboard{
    display: flex;
    gap: 2rem;
}
.group-analytics-comments, .group-posts-devices{
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    border-radius: 15px;
}
</style>