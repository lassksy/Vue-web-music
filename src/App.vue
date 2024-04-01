<script lang="ts" setup>
      import { RouterView , RouterLink } from 'vue-router';  
      import Header from './components/Header.vue';
      import Aside from './components/Aside.vue';
</script>

<template>
    <div class="common-layout">
    <el-container>
      <el-header><Header/></el-header>
      <el-container>
        <el-aside width="100px"><Aside></Aside></el-aside>
        <el-container>
          <el-main>
            <RouterView></RouterView>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
    
</template>

<style scoped>
    
</style>
