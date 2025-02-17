<template>
  <div class="main">
    <h1 style="font-size: 36px;">新发现</h1>


  <el-divider />
    <div class="playlist">
    <h1 style="font-size: 24px; padding-bottom: 20px;">每日推荐歌曲</h1>
    <!-- 数据加载中时显示 -->
    <div v-if="loading">加载中...</div>
    
    <!-- 显示歌曲列表 -->
    <ul class="flex-list" v-if="!loading">
      <li v-for="song in songs" :key="song.id" class="song-item">
        <div class="image-container">
          <img :src="song.al.picUrl" :alt="song.al.name" class="album-cover" />
        </div>
        <div class="song-info">
          <p style="  cursor: pointer;">{{ song.name }}</p>
          <p class="ar-name">{{ song.ar[0].name }}</p>
          <!-- <p>专辑: {{ song.al.name }}</p> -->
          <!-- <p>时长: {{ formatDuration(song.dt) }}</p> -->
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import {getDailySongs} from '../service/song.ts'



    const songs = ref([]);  // 用于存储歌曲数据
    const loading = ref(true);  // 数据加载状态

    // 格式化歌曲时长，转换为 mm:ss 格式
    const formatDuration = (ms) => {
      const minutes = Math.floor(ms / 60000);
      const seconds = ((ms % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // 获取每日推荐歌曲
    const fetchSongs = async () => {
      try {
        const response = await getDailySongs();
        songs.value = response.data.data.dailySongs;
        console.log('每日推荐歌曲:', response.data); // 这里打印整个 response

      } catch (error) {
        console.error('获取推荐歌曲时出错:', error);
      } finally {
        loading.value = false;
      }
    };


    // 组件挂载时调用获取数据函数
    onMounted(fetchSongs);






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

.playlist {
  padding: 20px;
}

.song-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.album-cover {
  width: 48px;
  height: 48px;
  margin-right: 15px;
  border-radius: 15%;
}

.image-container {
  position: relative;
  display: inline-block;
}

.image-container::after {
  content: '▶'; /* 这里可以换成你的播放图标 */
  font-size: 24px;
  color: white;
  position: absolute;
  top: 45%;
  left: 40%;
  transform: translate(-50%, -50%); /* 让图标居中 */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none; /* 防止图标影响鼠标事件 */
}

.image-container:hover::after {
  opacity: 1;
}

.ar-name {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.ar-name::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px; /* 控制下划线位置 */
  width: 0%; /* 初始隐藏 */
  height: 2px;
  background-color: black;
  transition: width 0.3s ease-in-out;
}

.ar-name:hover::after {
  width: 100%;
}


.song-info {
  display: flex;
  flex-direction: column;
}

.flex-list {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  gap: 0px; /* 间距 */
  list-style: none;
  padding: 0;
}

.flex-list li {
  width: calc(50% - 10px); /* 让每行最多 4 个，减去间距 */
  padding: 0px;
  box-sizing: border-box;
}
.pagination {
  margin-top: 20px;
  text-align: center;
}


</style>

