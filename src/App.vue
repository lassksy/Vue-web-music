<script setup>
    import Header from './components/Header.vue';

</script>

<template>
  <div class="common-layout">
        <el-container>
            <el-header>
                <header-com></header-com>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <aside-com></aside-com>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
      .el-container {
        height: 100vh;
    }

    .el-aside {
        height: 100%;
        overflow: auto;
    }

    .el-header {
        padding: 0;
        background-color: #eee;
    }
    .el-main {
        background-color: #fff;
    }
</style>
