<script lang="ts" setup>
      import { RouterView , RouterLink } from 'vue-router';
      import Header from './components/Header.vue';
</script>

<template>
    <Header></Header>
    <div class="main">
      <div class="navigate">
      <RouterLink class="router-link" to="/home">首页</RouterLink>
      <RouterLink class="router-link" to="/top">排行榜</RouterLink>
      <RouterLink class="router-link" to="/playlist">歌单</RouterLink>


    </div>

    <div class="main-content">
        <RouterView></RouterView>
    </div>
    </div>    
    
</template>

<style scoped>
      
      .navigate {
        float: left; /* 固定在屏幕上 */
        left: 0;
        top: 0;
        bottom: 0; /* 填充整个屏幕 */
        width: 50px; /* 侧边栏宽度 */
        background-color: aliceblue; /* 侧边栏背景色 */
        padding: 20px; 
        }

      .router-link {
        display: block;
        text-decoration: none;
        margin-top: 20px;
        font-weight: 700;
        text-align: center;
      }

      .router-link-active  {
        background-color: hsl(0, 0%, 0%);
        color: rgb(255, 255, 255);
        transition: 0.4s;
        border-radius: 0.25rem;
        cursor: pointer;
      }

      .main-content {
        padding-left: 100px;
      }

</style>
