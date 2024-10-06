<template>
	<div class="main">
		<Aside />
		<Header />
		<router-view />
	</div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Aside from "./components/Aside.vue";
</script>

<style lang="scss" scoped>
.main {
	width: 100vw;
	height: 100vh;
	display: flex;
}
</style>
