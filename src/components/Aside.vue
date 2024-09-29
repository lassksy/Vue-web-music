<template>
    <div class="aside">
      <div class="aside-header">
        <div class="logo">
          <svg t="1727514149717" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4242" ><path d="M512 288.06l-110.98-192.22h-158.86L512 563.22 781.84 95.84h-158.86L512 288.06z" p-id="4243"></path><path d="M818.8 95.84L512 627.22 205.2 95.84H31.48L512 928.16 992.52 95.84H818.8z" p-id="4244"></path></svg>
          Music
        </div>
        <div class="search">
          <el-input :prefix-icon="Search" class="search-box"  size="large" placeholder="搜索" />
        </div>
      </div>
      <div class="aside-menu" style="width: 270px; background-color: rgb(250, 250, 250);">
            <el-menu router style="background-color: rgb(250, 250, 250); border: 0px; "
            >
              <el-menu-item index="home" >
                <template #title>
                  <el-icon><HomeFilled /></el-icon>
                  <span>主页</span>
                </template>
              </el-menu-item>
              <el-menu-item index="playlist">
                <el-icon><View /></el-icon>
                <span>新发现</span>
              </el-menu-item>
              <el-menu-item index="top" >
                <el-icon><Histogram /></el-icon>
                <span>排行榜</span>
              </el-menu-item>
            </el-menu>
      </div>

      

      
              
    </div> 
</template>

<script setup lang="ts">
import { Search  , HomeFilled , View , Histogram} from '@element-plus/icons-vue'
</script>


<style lang="scss" scoped>
  .aside {
    background-color: rgb(250, 250, 250);
    height: 100%;
    display: flex;
      flex-direction: column;
      height: 100vh; /* 占据整个视口高度 */
      border: 0.5px solid rgb(198, 198, 198);
    .aside-header {
      padding-bottom: 30px;
      .logo {
        display: flex;
        text-align: center;
        align-items: center;
        font-size: 30px;
        margin:  20px 40px 20px;
        .icon {
          width: 30px;
          height: 30px;
        }
      }
      .search {
          text-align: center;
         ::v-deep(.search-box) {
          width: 230px;
          height: 32px;
          line-height: 1.25;
          font-size: 12px;
          font-weight: 400;
        }
      }

      
    }
  }
</style>