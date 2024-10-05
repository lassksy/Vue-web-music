<template>
    <div class="main">
        <h1 style="font-size: 36px;">新发现</h1>
   
    </div>

         <div class="daily-songs">
            <div>
 <!-- 确保 dailySongs 有数据时才渲染，否则显示加载中 -->
 <div v-if="dailySongs && dailySongs.length > 0" class="daily-songs">
      <el-row :gutter="20">
        <el-col :span="8" v-for="song in dailySongs" :key="song.id">
          <el-card :header="song.name">
            <img :src="song.al.picUrl" alt="专辑封面" style="width: 100%; height: auto; margin-bottom: 10px;">
            <div>歌手: {{ song.ar[0].name }}</div>
            <div>推荐理由: {{ song.recommendReason }}</div>
            <el-button type="primary" @click="playSong(song.id)">播放</el-button>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 当 dailySongs 没有加载完毕时显示加载中 -->
    <div v-else>
      加载中...
    </div>
  </div>
        </div>
    
    
    
</template>

<script setup>

import { ref, onMounted } from 'vue';
import {getDailySongs} from '../service/song'

// 定义响应式变量 dailySongs
const dailySongs = ref([]);

// 获取每日推荐歌单的函数
const fetchDailySongs = async () => {
  try {
    const response = await getDailySongs();
    console.log(response.data);  // 调试输出返回数据
    dailySongs.value = response.data.data.dailySongs || [];  // 确保 dailySongs 赋值成功
  } catch (error) {
    console.error('获取每日推荐歌单失败', error);
    dailySongs.value = [];  // 发生错误时，dailySongs 设为空数组，防止页面渲染崩溃
  }
};

// 播放歌曲的函数
const playSong = (id) => {
  console.log('播放歌曲 ID:', id);
  // 实际播放逻辑
};

// 当组件挂载时调用 fetchDailySongs
onMounted(() => {
  fetchDailySongs();
});
//  dailySongs.value = [
//   {
//     "name": "her",
//     "id": 2621307695,
//     "ar": [{ "name": "JVKE" }],
//     "al": { "picUrl": "http://p2.music.126.net/taVIGxnWf19S-uhq0UutZQ==/109951169908867905.jpg" },
//     "recommendReason": "超44%人收藏"
//   }
// ];







</script>

<style scoped>
    .main {
        margin: 20px;
        border-bottom:  solid #f7f7f7;
        padding-bottom: 8px;
        width: 80%;
        
    }

    .daily-songs {
  padding: 20px;
}

</style>

