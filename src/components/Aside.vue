<template>
    <div id="aside">
        <el-row class="tac">
    <el-col :span="30">
      <el-menu router>
        <el-menu-item index="home">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-menu-item index="playlist">
          <el-icon><icon-menu /></el-icon>
          <span>歌单</span>
        </el-menu-item>
        <el-menu-item index="top" >
            <el-icon><icon-menu /></el-icon>
          <span>排行榜</span>
        </el-menu-item>
      </el-menu>
    </el-col>
 </el-row>
    </div>
 
</template>

<script setup lang="ts">

</script>


<style lang="scss" scoped>
.el-menu {
  border-right: 1 !important;
  text-align: center !important;
}
</style>