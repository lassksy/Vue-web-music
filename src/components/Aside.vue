<template>
	<div class="aside">
		<div class="logo">
			<Icon icon="mdi:apple" />
			<span>Music</span>
		</div>
		<div class="search">
			<Icon icon="material-symbols:search" />
			<input type="text" />
		</div>
		<ul class="menu">
			<li>
			<router-link to="/home" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
			<Icon icon="heroicons-solid:home" />主页
			</router-link>
			
			</li>

			<li>
				<router-link to="/playlist" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
				<Icon icon="mdi:eye" />新发现
				</router-link>

			</li>

			<li>
				<router-link to="/top" style="display: flex; align-items: center; text-decoration: none; color: inherit;">
				<Icon icon="material-symbols:leaderboard-rounded" />排行榜
				</router-link>
			
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import url("style/components/Aside.scss");
</style>
