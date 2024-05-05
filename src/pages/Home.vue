<template>
    <h1>
        <el-carousel :interval="4000" type="card" height="250px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </h1>
  <h1>推荐歌单</h1>
  <div class="cards">
    <el-card shadow="hover" style="max-width: 256px">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%"
    />
    <template #footer>一个歌单</template>

    </el-card>
  </div>
</template>

<script setup lang="ts">
import {getTopList} from '../../service'
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.h1 {
  font-weight: bold;
  font-size: 20px;
  padding-top: 25px;
}
</style>