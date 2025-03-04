<template>
  <div class="main">
    <h1 style="font-size: 36px;">主页</h1>
    <el-divider />
    <el-carousel height="400px">
    <el-carousel-item v-for="(image, index) in banners" :key="index">
      <img :src="image" alt="banner" style="width: 100%; height: 100%; object-fit: cover;">
    </el-carousel-item>
  </el-carousel>
    <p style="font-size: 12px; color: grey; font-weight: bold;">热门mv</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const banners = ref([]);

onMounted(() => {
  axios.get('https://netease-cloud-music-api-backup-eight.vercel.app/banner') // 替换为你的 API 地址
    .then(response => {
      banners.value = response.data.banners.map(item => item.imageUrl); // 提取所有图片链接
    })
    .catch(error => {
      console.error('请求失败:', error);
    });
});
</script>

<style lang="scss" scoped>
@import url("../assets/style/pages/home.scss");

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>