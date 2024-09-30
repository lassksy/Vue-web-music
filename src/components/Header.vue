<template>
    <div  class="main">
      <div  v-if="isVisible" class="music-controls">
        <div  class="button-c shuffle">
          <button   class="button-control" style="width: 40px; height: 40px;">
            <amp-icon class="icon" role="presentation" aria-hidden="true" innerhtml="<svg width=&quot;32&quot; height=&quot;28&quot; viewbox=&quot;0 0 32 28&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M20.767 20.44a.81.81 0 00.49-.183l2.58-2.174c.316-.266.316-.681 0-.955l-2.58-2.183a.81.81 0 00-.49-.183c-.415 0-.673.258-.673.673v1.245h-1.162c-.739 0-1.195-.233-1.718-.847l-1.527-1.801 1.527-1.81c.54-.63.946-.847 1.677-.847h1.203v1.279c0 .407.258.664.673.664a.801.801 0 00.49-.174l2.58-2.175c.316-.266.316-.69 0-.955l-2.58-2.183a.761.761 0 00-.49-.183c-.415 0-.673.258-.673.665v1.386h-1.212c-1.228 0-1.992.34-2.863 1.386l-1.412 1.668-1.469-1.751c-.805-.946-1.569-1.303-2.747-1.303H8.896c-.53 0-.896.348-.896.838s.365.838.896.838h1.437c.697 0 1.162.225 1.685.847l1.519 1.801-1.52 1.81c-.53.623-.954.847-1.643.847H8.896c-.53 0-.896.348-.896.838s.365.838.896.838h1.536c1.179 0 1.901-.356 2.706-1.303l1.478-1.751 1.444 1.718c.822.98 1.627 1.336 2.822 1.336h1.212v1.412c0 .415.258.672.673.672z&quot;/></svg>" name="player-shuffle" hydrated=""><svg width="32" height="28" viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg"><path d="M20.767 20.44a.81.81 0 00.49-.183l2.58-2.174c.316-.266.316-.681 0-.955l-2.58-2.183a.81.81 0 00-.49-.183c-.415 0-.673.258-.673.673v1.245h-1.162c-.739 0-1.195-.233-1.718-.847l-1.527-1.801 1.527-1.81c.54-.63.946-.847 1.677-.847h1.203v1.279c0 .407.258.664.673.664a.801.801 0 00.49-.174l2.58-2.175c.316-.266.316-.69 0-.955l-2.58-2.183a.761.761 0 00-.49-.183c-.415 0-.673.258-.673.665v1.386h-1.212c-1.228 0-1.992.34-2.863 1.386l-1.412 1.668-1.469-1.751c-.805-.946-1.569-1.303-2.747-1.303H8.896c-.53 0-.896.348-.896.838s.365.838.896.838h1.437c.697 0 1.162.225 1.685.847l1.519 1.801-1.52 1.81c-.53.623-.954.847-1.643.847H8.896c-.53 0-.896.348-.896.838s.365.838.896.838h1.536c1.179 0 1.901-.356 2.706-1.303l1.478-1.751 1.444 1.718c.822.98 1.627 1.336 2.822 1.336h1.212v1.412c0 .415.258.672.673.672z"></path></svg>
            </amp-icon>
          </button>
         
        </div>
        <div class="button-c previous">
          <button   class="button-control" style="width: 40px; height: 40px;">
            <svg t="1727599000265" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="981" width="32" height="28"><path d="M773.12 202.24c28.16-16.384 62.976 4.096 62.976 36.35199999L836.096 785.40800001c0 32.25599999-34.816 52.736-62.976 36.35199999L299.008 547.84c-28.16-15.872-28.16-56.32 0-72.704L773.12 202.24z" p-id="982"></path><path d="M288.256 222.20800001L288.256 801.28c0 26.624-21.504 48.64-48.64 48.64l-3.072 0c-26.624 0-48.64-21.504-48.64-48.64l0-579.072c0-26.624 21.504-48.64 48.64-48.64l3.072 0c26.624 0.512 48.64 22.016 48.64 48.64000001z" p-id="983"></path></svg>
          </button>
    
           </div>
           <div class="button-c play">
            <button   class="button-control" style="width: 40px; height: 40px;">

              <svg style="margin-left: 3px;" t="1727596947875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3568" width="32" height="28"><path d="M259.2 44.8l582.4 412.8c38.4 28.8 38.4 83.2 0 112L259.2 979.2c-44.8 32-108.8 0-108.8-54.4V99.2c3.2-54.4 64-86.4 108.8-54.4z" p-id="3569"></path></svg>          
            </button>
          </div>

           <div class="button-c next">
            <button   class="button-control" style="width: 40px; height: 40px;">
              <svg t="1727598921567" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="830" width="32" height="28"><path d="M250.88 821.76c-28.16 16.384-62.976-4.096-62.976-36.352V238.592c0-32.256 34.816-52.736 62.976-36.352L724.992 476.16c28.16 15.872 28.16 56.32 0 72.704L250.88 821.76z" p-id="831"></path><path d="M735.744 801.792V222.72c0-26.624 21.504-48.64 48.64-48.64h3.072c26.624 0 48.64 21.504 48.64 48.64v579.072c0 26.624-21.504 48.64-48.64 48.64h-3.072c-26.624-0.512-48.64-22.016-48.64-48.64z" p-id="832"></path></svg>
            </button>
          </div>
          <div style="padding-left: 3px;" class="button-c repeat">
            <button  class="button-control" >
              <svg t="1727599213724" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6679" width="20" height="20"><path d="M569 616.1c-18.6-10.8-42 2.7-42 24.2v46.3H351.1c-96.7 0-175.4-78.7-175.4-175.5 0-38.9 12.7-75.9 36.8-107 18.9-24.5 14.4-59.6-10-78.5-24.4-18.8-59.5-14.4-78.5 10-39.3 50.9-60.1 111.5-60.1 175.5 0 158.4 128.9 287.3 287.3 287.3H527v46.3c0 21.5 23.3 35 42 24.2l177.1-102.3c18.6-10.8 18.6-37.7 0-48.4L569 616.1z m102.5-392.2H495.6v-46.3c0-21.5-23.3-35-42-24.2L276.5 255.6c-18.6 10.8-18.6 37.7 0 48.4l177.1 102.3c18.6 10.8 42-2.7 42-24.2v-46.3h175.9c96.7 0 175.5 78.7 175.5 175.4 0 39-12.7 76-36.8 107.1-18.9 24.5-14.4 59.6 10 78.5 10.2 7.9 22.2 11.7 34.2 11.7 16.7 0 33.3-7.5 44.3-21.7 39.3-50.9 60.1-111.6 60.1-175.6 0-158.5-128.9-287.3-287.3-287.3z" p-id="6680"></path></svg>            
            </button>
          </div>
      </div>
      <div class="lcd">
        <div class="album-image">
          <el-image :src="src" style="width: 50px; height: 50px;">
          </el-image>
        </div>
        <div class="album-content">
          <div class="album-name">
              测试
          </div>
          <div class="album-autor">
              测试名
          </div>
        </div>
      </div>

      <div v-if="isVisible" class="volume-control">
             <!-- 动态切换音量图标 -->
             <img :src="volumeIcon" alt="Volume Icon" class="volume-icon">

             <!-- 音量进度条 -->
           <input type="range" v-model="volume" min="0" max="100" @input="onVolumeChange">
            </div>

      <div class="login">
            <el-button  type="danger">
              <el-icon><User /></el-icon>
              <span style="padding-left: 3px;">登录</span>
            </el-button>
      </div>

    </div>
</template>

<script  setup lang="ts">
import { computed, ref , onMounted, onBeforeUnmount } from 'vue';
import {User} from '@element-plus/icons-vue'

import volumeMute from '@/assets/volume/24gf-volumeCross.svg';
import volumeLow from '@/assets/volume/24gf-volumeLow.svg';
import volumeMedium from '@/assets/volume/24gf-volumeMiddle.svg';
import volumeHigh from '@/assets/volume/24gf-volumeHigh.svg';



const src =
'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

const volume = ref<number>(50);
const isVisible = ref<boolean>(true);

const checkWindowSize = () => {
  isVisible.value = window.innerWidth >= 1000;
};

// 监听窗口变化
onMounted(() => {
  checkWindowSize(); // 页面加载时检查一次

  // 添加窗口大小变化的监听器
  window.addEventListener('resize', checkWindowSize);
});

// 清理监听器，防止内存泄漏
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkWindowSize);
});




const volumeIcon = computed(() => {
      if (volume.value == 0) {
        return volumeMute 
      } else if (volume.value > 0 && volume.value <= 30) {
        return  volumeLow
      } else if (volume.value > 30 && volume.value <= 70) {
        return volumeMedium 
      } else {
        return volumeHigh
      }
    });

    // 处理音量改变
    const onVolumeChange = () => {
      console.log('当前音量:', volume.value);
      // 在这里处理音频的音量设置逻辑
    };


</script>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  border: 0.5px solid rgb(198, 198, 198);
  background-color: hsl(0deg 0% 100%);
  
  .music-controls {
    width: 20vw; /* 改为相对于父容器宽度的百分比 */
    min-width: 250px; /* 设置最小宽度，防止控件太小 */
    display: flex;
    margin: 10px;
    align-items: center;

    .button-c {
      width: 50%;
    }

    .button-control {
      margin-left: 5px;
      border: 0;
      background-color: rgba(0, 0, 0, 0); /* 保持透明背景 */
    }
  }

  .lcd {
    padding: 3px;
    display: flex;
    align-items: center;
    width: 63vw; /* 改为相对于父容器宽度的百分比 */
    min-width: 150px; /* 设置最小宽度，防止控件太小 */    
    
    .album-image {
      display: grid;
    }

    .album-content {
      display: flex;
      flex-direction: column; 
      text-align: center;
      margin:  0 auto;

    }

  }

}
        svg {
    transition: fill 0.2s ease;
}

svg-path {
    fill: black; /* 初始颜色 */
}

svg:hover {
    fill: red; /* 鼠标悬停时的颜色 */
}

.volume-control {
  display: flex;
  align-items: center;
  width:10vw;
}

.volume-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: rgb(133 128 128);
}

/* 通用样式 */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: #ddd; /* 默认背景颜色 */
  border-radius: 5px;
  height: 12px;
  outline: none;
}

/* 自定义滑块 (Webkit: Chrome, Safari) */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: #fff; /* 滑块背景颜色 */
  border-radius: 50%;
  border: #ccc solid 1px;
  cursor: pointer;
}

/* 进度条颜色 (Webkit: Chrome, Safari) */
input[type="range"]::-webkit-slider-runnable-track {
  background: rgba($color: #000000, $alpha: 0); /* 进度条颜色 */
  border-radius: 4px;
}

/* 自定义滑块 (Firefox) */
input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: #fff; /* 滑块背景颜色 */
  border-radius: 50%;
  border: #ccc solid 1px;
  cursor: pointer;
}

/* 进度条颜色 (Firefox) */
input[type="range"]::-moz-range-track {
  background: rgba($color: #000000, $alpha: 0);
}

/* 自定义滑块 (IE/Edge) */
input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: #fff; /* 滑块背景颜色 */
  border-radius: 50%;
  border: #ccc solid 1px;
  cursor: pointer;
}

/* 进度条颜色 (IE/Edge) */
input[type="range"]::-ms-fill-lower {
  background: rgba($color: #000000, $alpha: 0);
}

.login {
  display: flex;
  align-items: center;
  width: 10vw;
  min-width: 100px;
  padding-left: 50px;
}



</style>