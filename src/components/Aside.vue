<template>
    <el-menu>
        <RouterLink to="Home">首页</RouterLink>
        <RouterLink to="Playlist">歌单</RouterLink>
        <RouterLink to="Top">排行榜</RouterLink>
        <RouterLink to="LoginView">登录</RouterLink>
    </el-menu>
</template>

<script setup lang="ts">
</script>


<style scoped>
    .aside-list {
        height: calc(100vh- 60px);
       
      
        box-shadow: var(--el-box-shadow-light);
    }
</style>