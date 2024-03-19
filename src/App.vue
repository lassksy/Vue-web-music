<script lang="ts" setup>
      import { RouterView , RouterLink } from 'vue-router';
</script>

<template>
    <div class="navigate">
      <RouterLink to="/home">首页</RouterLink>
      <RouterLink to="/top">排行榜</RouterLink>
      <RouterLink to="/playlist">歌单</RouterLink>


    </div>

    <div class="main-content">
        <RouterView></RouterView>
    </div>
</template>

<style scoped>

</style>
