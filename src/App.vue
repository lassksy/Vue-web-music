<template>
	<div class="main">
		<RouterView></RouterView>
	</div>
</template>

<script setup lang="ts">
import {  RouterView } from 'vue-router'

</script>

<style lang="scss" scoped>
.main {
	width: 100vw;
	height: 100vh;
	display: flex;
}
</style>
