<template>
      <div class="common-layout">
      <el-container>
          <el-aside>        <Aside/>          </el-aside>
        <el-container>
          <el-header>           <Header/>
          </el-header>
          <el-main>
            <RouterView></RouterView>
          </el-main>
        </el-container>
        </el-container>

       

  </div>
    
</template>

<script setup lang="ts"
>


</script>

<style scoped>  
    .common-layout {
      display: flex;
      flex-direction: column;
      height: 100vh; /* 占据整个视口高度 */

    }
    .el-header {
      padding: 0;
    }
    .el-main {
      padding: 0;
    }
</style>

