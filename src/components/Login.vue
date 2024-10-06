<template>
	<div class="login" v-if="isLogin" @click="this.$emit('cutLogin')">
		<div class="panel" ref="panel" @click.stop>
			<button class="close_button" @click="this.$emit('cutLogin')">
				<Icon icon="iconamoon:close-fill" />
			</button>

			<div class="main">
				<!-- 根据 isQrLogin 值切换显示登录表单或者扫码登录 -->
				<div v-if="!isQrLogin">
					<Icon icon="mdi:apple" />
					<p class="title">网易云账号登录</p>
					<p class="tip">请输入你的电子邮件地址或电话号码以开始。</p>
					<div class="login_container">
						<!-- 修改登录方式 -->
						<div class="radio-inputs">
							<label class="radio" @click="loginMethod = 0">
								<input type="radio" name="radio" checked="" />
								<span class="name">手机登录</span>
							</label>
							<label class="radio" @click="loginMethod = 1">
								<input type="radio" name="radio" />
								<span class="name">邮箱登录</span>
							</label>
							<label class="radio" @click="loginMethod = 2">
								<input type="radio" name="radio" />
								<span class="name">二维码登录</span>
							</label>
						</div>

						<!-- 手机登录 -->
						<div class="phone_login login_input" v-if="loginMethod === 0">
							<div class="inputGroup" tabindex="0">
								<label for="phone">手机号</label>
								<input type="text" required="" autocomplete="off" id="phone" v-model="phone.number" />
							</div>
							<div class="inputGroup" tabindex="0">
								<label for="password">密码</label>
								<input type="text" required="" autocomplete="off" id="password" v-model="phone.password" />
							</div>
							<div class="inputGroup" tabindex="0">
								<label for="code">国家代码(如: 1)</label>
								<input type="text" required="" autocomplete="off" id="code" v-model="phone.code" />
							</div>
						</div>
						<!-- 邮箱登录 -->
						<div class="email_login login_input" v-if="loginMethod === 1">
							<div class="inputGroup" tabindex="0">
								<label for="password">网易邮箱</label>
								<input type="text" required="" autocomplete="off" id="password" v-model="email.email" />
							</div>
							<div class="inputGroup" tabindex="0">
								<label for="code">密码</label>
								<input type="text" required="" autocomplete="off" id="code" v-model="email.password" />
							</div>
						</div>
						<!-- 扫码登录 -->
						<div class="QC_login" v-if="loginMethod === 2">
							<p>请使用网易云音乐App扫码登录</p>
							<img src="" alt="login QC code" />
						</div>

						<!-- 登录按钮 -->
						<div class="button_box">
							<button class="login_button">登录</button>
							<button class="tourist_login_button">游客登录</button>
						</div>
					</div>
				</div>
				<div v-else></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["isLogin"],
	data() {
		return {
			isQrLogin: false,
			loginMethod: 0,

			phone: {
				number: "",
				password: "",
				code: "",
			},
			email: {
				email: "",
				password: "",
			},
		};
	},
};
</script>

<style lang="scss" scoped>
@import url("style/components/Login.scss");
</style>
