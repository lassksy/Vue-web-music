<template>
	<div class="Header">
		<div class="main">
			<!-- 播放控制 -->
			<div class="control">
				<Icon icon="iconamoon:playlist-shuffle-fill" />
				<Icon icon="iconamoon:player-previous-fill" />
				<Icon class="playPause" icon="iconamoon:player-play-fill" v-if="!isPlay" />
				<Icon class="playPause" icon="iconamoon:player-pause-fill" v-else />
				<Icon icon="iconamoon:player-next-fill" />
				<Icon icon="iconamoon:playlist-repeat-list-fill" />
			</div>

			<!-- 音乐信息 -->
			<div class="music_info">
				<Icon icon="mdi:apple" />
			</div>

			<div class="right">
				<!-- 音量 -->
				<div class="volume">
					<Icon icon="iconamoon:volume-off-fill" />
					<Icon icon="iconamoon:volume-down-fill" />
					<Icon icon="iconamoon:volume-up-fill" />
					<input type="range" min="0" max="100" class="PB-range-slider" />
				</div>

				<!-- 播放列表开关 -->
				<div class="playListSwitch">
					<Icon icon="iconamoon:menu-burger-horizontal-fill" />
				</div>

				<!-- 登录 -->
				<button class="login_button" @click="cutLogin">
					<Icon icon="iconamoon:profile-fill" />
					<span>Sign In</span>
				</button>
			</div>
		</div>
		<Login :isLogin="isLogin" @cutLogin="cutLogin" />
	</div>
</template>

<script>
import Login from "./Login.vue";

export default {
	components: {
		Login,
	},
	data() {
		return {
			isLogin: false,
			isPlay: false,
		};
	},
	methods: {
		cutLogin() {
			this.isLogin = !this.isLogin;
			console.log(1);
		},
	},
};
</script>

<style lang="scss" scoped>
@import url("style/components/Header.scss");
</style>
