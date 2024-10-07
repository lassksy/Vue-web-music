<template>
	<div class="Header">
		<div class="main">
			<!-- 播放控制 -->
			<div  v-if="isVisible" class="music-controls">

			<div class="control">
				<Icon icon="iconamoon:playlist-shuffle-fill" />
				<Icon icon="iconamoon:player-previous-fill" />
				<Icon class="playPause" icon="iconamoon:player-play-fill" v-if="!isPlay" />
				<Icon class="playPause" icon="iconamoon:player-pause-fill" v-else />
				<Icon icon="iconamoon:player-next-fill" />
				<Icon icon="iconamoon:playlist-repeat-list-fill" />
			</div>
			</div>

			<!-- 音乐信息 -->
			<div class="music_info">
				<Icon icon="mdi:apple" />
			</div>


				<!-- 音量调节显示逻辑 -->
				<div v-if="isVisible" class="volume-control">

				<!-- 音量 -->
				<div class="volume">
					<img :src="volumeIcon" alt="Volume Icon" class="volume-icon">
					<input type="range" v-model="volume" min="0" max="100" @input="onVolumeChange">
				</div>

				</div>

				<!-- 播放列表开关
				<div class="playListSwitch">
					<Icon icon="iconamoon:menu-burger-horizontal-fill" />
				</div> -->

				<!-- 登录 -->
				<button class="login_button"@click="setShow(true)">
					<Icon icon="iconamoon:profile-fill" />
					<span>登录</span>
				</button>
			</div>
		</div>


    <!-- 登录弹窗 -->
    <div class="login" v-if="isShow">
<Login></Login>

	</div>		
</template>

<script setup lang="ts">
import Login from "./Login.vue";

import { computed, ref , onMounted, onBeforeUnmount , reactive  ,provide } from 'vue';

//音量图标导入
import volumeMute from '@/assets/volume/24gf-volumeCross.svg';
import volumeLow from '@/assets/volume/24gf-volumeLow.svg';
import volumeMedium from '@/assets/volume/24gf-volumeMiddle.svg';
import volumeHigh from '@/assets/volume/24gf-volumeHigh.svg';


const volume = ref<number>(50);
const isVisible = ref<boolean>(true);

const isLogin = ref(false);
const isPlay = ref(false);

function cutLogin() {
  isLogin.value = !isLogin.value;
  console.log(1);
}


//登录二级弹出
const isShow = ref(false);

const setShow = (val) => {
  isShow.value = val;
}

provide("dialog-show" , {
  isShow,
  setShow,
});



//音量调节显示逻辑	
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




//音量调节
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


</script>

<style lang="scss" scoped>
@import url("style/components/Header.scss");
</style>
