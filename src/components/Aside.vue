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
			<li><Icon icon="heroicons-solid:home" />主页</li>
			<li><Icon icon="mdi:eye" />新发现</li>
			<li><Icon icon="material-symbols:leaderboard-rounded" />排行榜</li>
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
