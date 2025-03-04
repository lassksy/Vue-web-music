<template>
      <div class="common-layout">
      <el-container>
          <el-aside>        
            <Aside/>          
          </el-aside>
        <el-container>
          <el-header>           
            <Header/>
          </el-header>
          <el-main>
            <RouterView></RouterView>
          </el-main>
        </el-container>
        </el-container>

       

  </div></template>

<script>

</script>

<style lang="scss" scoped>
    .common-layout {
      display: flex;
      flex-direction: column;
      height: 100vh; 
      width: calc(100% - 260px);

    }
    .el-header {
      padding: 0;
      margin-left: 260px;

    }
    .el-main {
      margin-left: 300px;
      width: 100%;
    }
    .el-aside {
      width: auto;
    }

</style>
