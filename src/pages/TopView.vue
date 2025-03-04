<template>
    <div class="hot-search-list">
    <h1>热门搜索榜单</h1>
    <ul v-if="hotSearchList.length">
      <li v-for="(item, index) in hotSearchList" :key="index">
        <span>{{ index + 1 }}. {{ item.first }}</span>
      </li>
    </ul>
    <div v-else>
      <p>加载中...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getHotSearchList } from '../service/search';

export default {
  setup() {
    // 响应式变量，存储 API 获取到的热搜数据
    const hotSearchList = ref([]);

    // 获取热搜数据
    const fetchHotSearch = async () => {
      try {
        const response = await getHotSearchList();
        if (response.data && response.data.result) {
          hotSearchList.value = response.data.result.hots; 
        }
      } catch (error) {
        console.error('获取热门搜索列表失败:', error);
      }
    };

    // 在组件挂载时获取数据
    onMounted(fetchHotSearch);

    return {
      hotSearchList,
    };
  },
};
</script>

<style scoped>
@import url("../assets/style/pages/top.scss");

</style>