<template>
  <div class="main">
    <h1 style="font-size: 36px; ">主页</h1>
    <el-divider />
    <p style="font-size: 12px; color: grey; font-weight: bold;">热门mv</p>
    <el-carousel indicator-position="inside" height="400px" motion-blur>
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
    </div>

</template>

<script>



</script>

<style scoped>
    .main {
        margin: 20px;
        border-bottom:  solid #f7f7f7;
        padding-bottom: 8px;
        width: 1000px;
        
    }
    .el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}   
</style>