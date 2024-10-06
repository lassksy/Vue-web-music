<template>
	<div class="login"v-if="isShow">
		<div class="panel" ref="panel" @click.stop>
			<button class="close_button"  @click="close">
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
								<input type="text" required="" autocomplete="off" id="phone" v-model="number" />
							</div>
							<div class="inputGroup" tabindex="0">
								<label for="password">密码</label>
								<input type="text" required="" autocomplete="off" id="password" v-model="password" />
							</div>
							<div class="inputGroup" tabindex="0">
								<label for="code">国家代码(如: 1)</label>
								<input type="text" required="" autocomplete="off" id="code" v-model="countrycode" />
							</div>
						</div>
						<!-- 邮箱登录 -->
						<div class="email_login login_input" v-if="loginMethod === 1">
							<div class="inputGroup" tabindex="0">
								<label for="password">网易邮箱</label>
								<input type="text" required="" autocomplete="off" id="password" v-model="email" />
							</div>
							<div class="inputGroup" tabindex="0">
								<label for="code">密码</label>
								<input type="text" required="" autocomplete="off" id="code" v-model="password" />
							</div>
						</div>
						<!-- 扫码登录 -->
						<div class="QC_login" v-if="loginMethod === 2">
							<p>请使用网易云音乐App扫码登录</p>
							<img v-if="qrImgUrl" :src="qrImgUrl" alt="扫码登录二维码" style="margin-top: 20px; width: 200px; height: 200px;" />
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

<script setup>
import {ref , reactive , inject} from "vue";

import {Close} from '@element-plus/icons-vue'


import {
		qrCodeLoginKey,
		qrCodeLoginImg,
		qrCodeLoginCheck
	} from '../service/login'

//
import { loginCellphone, loginEmail , guestLogin } from '../service/login'; 


const {isShow ,setShow} = inject("dialog-show");

const close = ()=> {
    isShow.value = false;

 }

// 定义响应式变量
const isQrLogin = ref(false);
const isDark = ref(false);
const qrImgUrl = ref(''); // 存放二维码图片的URL

// 切换登录方式
const toggleLoginMethod = () => {
  isQrLogin.value = !isQrLogin.value;
  
  // 当切换到扫码登录时，调用获取二维码的逻辑
  if (isQrLogin.value) {
    getQrCode();
  }
};


// 登录表单数据
const loginForm = ref({
  phone: '',
  password: '',
  countrycode: '',
  email: ''
});

// 当前登录方式：手机或邮箱
const loginMethod = ref('phone'); // 默认使用手机登录

// 引用form
const loginFormRef = ref(null);

// 登录处理函数
const handleLogin = async () => {
  // 选择不同的登录方式
  if (loginMethod.value === 'phone') {

    try {
  // 使用 loginCellphone 函数进行 GET 请求
  const res = await loginCellphone(
    loginForm.value.phone,
    loginForm.value.password,
    loginForm.value.countrycode || '' // 默认值处理
  );

  // 检查响应中的 code 是否为 200 表示登录成功
  if (res.data && res.data.code == 200) {
    ElMessage.success('登录成功');
    // 设置 cookie，如果存在
    if (res.data.cookie) {
      document.cookie = res.data.cookie;
    }
  } else {
    // 如果 code 不是 200，显示错误信息
    ElMessage.error(res.data?.msg || '登录失败');
  }
} catch (error) {
  // 捕获请求中的错误，显示错误提示
  ElMessage.error('手机登录出现错误');
  console.error('手机登录错误:', error);
}

  } else {
    // 邮箱登录
    try {
  // 校验邮箱和密码是否为空
  if (!loginForm.value.email || !loginForm.value.password) {
    ElMessage.error('请输入邮箱和密码');
    return;
  }

  // 调用 loginEmail 函数，传递 email 和 password 参数
  const res = await loginEmail(
    loginForm.value.email,
    loginForm.value.password
  );

  // 判断登录是否成功
  if (res.data && res.data.code == 200) {
    ElMessage.success('登录成功');
    // 如果存在 cookie，则设置它
    if (res.data.cookie) {
      document.cookie = res.data.cookie;
    }
  } else {
    // 如果登录失败或 code 不为 200，显示错误信息
    ElMessage.error(res.data?.msg || '登录失败');
  }
} catch (error) {
  // 捕获请求错误，并显示提示信息
  ElMessage.error('邮箱登录出现错误');
  console.error('邮箱登录错误:', error);
}

  }
};  

// 定义 handleGuestLogin 函数处理点击事件
const handleGuestLogin = async () => {
  try {
    const res = await guestLogin();

    if (res.data && res.data.code == 200) {
      ElMessage.success('游客登录成功');
      
      // 处理成功的登录状态
      if (res.data.cookie) {
        document.cookie = res.data.cookie; // 设置 cookie
      }
    } else {
      ElMessage.error(res.data?.msg || '游客登录失败');
    }
  } catch (error) {
    ElMessage.error('游客登录出现错误');
    console.error('游客登录错误:', error);
  }
};




// 获取二维码逻辑
const getQrCode = async () => {
  try {
    let nowtime = Date.now();
    
    // 获取登录Key
    let keyResponse = await qrCodeLoginKey(nowtime);
    if (keyResponse.data && keyResponse.data.data) {
      let key = keyResponse.data.data.unikey;

      // 获取二维码图片
      let qrImageResponse = await qrCodeLoginImg(key);
      if (qrImageResponse.data && qrImageResponse.data.data) {
        qrImgUrl.value = qrImageResponse.data.data.qrimg; // 将二维码URL赋值
      }

      // 每3秒检查二维码状态
      let check = setInterval(async () => {
        let nowtime2 = Date.now();
        let res = await qrCodeLoginCheck(key, nowtime2);

        if (res.data.code === 800) {
          alert("二维码已过期，请重新生成");
          clearInterval(check);
        }

        if (res.data.code === 803) {
          alert("授权登录成功！");
          clearInterval(check);

            // 如果登录成功，存入 cookie
        if (res.data && res.data.cookie) {
          document.cookie = res.data.cookie; // 将登录的 cookie 存入浏览器
        }


        }
      }, 3000);
    }
  } catch (error) {
    console.error("获取二维码时发生错误", error);
  }
};
</script>

<style lang="scss" scoped>
@import url("style/components/Login.scss");
</style>
