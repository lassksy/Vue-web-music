<template>
  <div class="main">
    <h1 style="font-size: 36px;">主页</h1>
    <el-divider />

    <!--热门推荐-->
    <p style="font-size: 12px; color: grey; font-weight: bold;">热门推荐</p>
    <el-carousel height="500px">
    <el-carousel-item v-for="(image, index) in banners" :key="index">
      <img :src="image" alt="banner" style="width: 100%; height: 100%; object-fit: cover;">
    </el-carousel-item>
  </el-carousel>
      <el-divider />

    <!--热门mv-->
      <p style="font-size: 12px; color: grey; font-weight: bold;">热门mv</p>


  <div class="mv-container" v-if="mvList && mvList.length > 0">
      <div v-for="(mv, index) in mvList" :key="index" class="mv-item">
        <el-image
          v-if="mv.cover"
          :src="mv.cover"
          alt="MV Image"
          class="mv-image"
        />
        <p class="mv-title">{{ mv.title }}</p>
      </div>
    </div>
    <p v-else>加载中或暂无数据...</p>



      <el-divider />

      <!--热门歌单-->
      <p style="font-size: 12px; color: grey; font-weight: bold;">热门歌单</p>

  <div class="playlist-container" v-if="playlist && playlist.length > 0">
      <div v-for="(playlist, index) in playlist" :key="index" class="playlist-item">
        <el-image
          v-if="playlist.coverImgUrl"
          :src="playlist.coverImgUrl"
          alt="MV Image"
          class="playlist-image"
        />
        <p class="playlist-title">{{ playlist.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getBanners } from '../service/banners.ts';
import { getMV } from '../service/mv.ts';
import { getPlaylist } from '../service/playlist.ts';

const banners = ref([]);
const mvList = ref([]); 
const playlist = ref([]);

onMounted(async () => {
});

onMounted(async () => {
  banners.value = await getBanners();
  mvList.value = await getMV();
  playlist.value = await getPlaylist();

});
</script>

<style lang="scss" scoped>
@import url("../assets/style/pages/home.scss");


</style>