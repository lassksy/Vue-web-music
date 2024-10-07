<template>
	<div class="login"v-if="isShow">
		<div class="panel" ref="panel" @click.stop>
			<button class="close_button"  @click="close">
				<Icon icon="iconamoon:close-fill" />
			</button>

			<div class="main">
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
								<input type="password" required="" autocomplete="off" id="password" v-model="password" />
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
							<button class="login_button" @click="handleLogin">登录</button>
							<button class="tourist_login_button"  @click="handleGuestLogin">游客登录</button>
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
import { ElMessage } from 'element-plus';
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
    document.documentElement.style.overflowY = 'scroll'; 
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


const loginMethod = ref(0); // 0 - 手机登录, 1 - 邮箱登录, 2 - 扫码登录
    const number = ref(''); // 手机号
    const password = ref(''); // 密码
    const countrycode = ref('86'); // 默认国家代码
    const email = ref(''); // 邮箱

   // 处理登录逻辑
const handleLogin = async () => {
  try {
    // 手机登录逻辑
    if (loginMethod.value === 0) {
      if (!number.value || !password.value || !countrycode.value) {
        alert('请输入完整的手机号、密码和国家代码');
        return;
      }

      // 使用 loginCellphone 函数进行登录请求
      const response = await loginCellphone(number.value, password.value, countrycode.value);
      console.log('手机号登录响应:', response.data);

      // 检查登录是否成功
      if (response.data.code === 200) {
        alert('手机号登录成功');
        isShow.value = false;
        // 保存 Cookie
        if (response.data.cookie) {
          document.cookie = `cookie=${response.data.cookie}; path=/;`;
          alert('登录成功，Cookie 已保存');
        }
      } else {
        alert(`登录失败，原因: ${response.data.msg || '未知错误'}`);
      }

    } 
    // 邮箱登录逻辑
    else if (loginMethod.value === 1) {
      if (!email.value || !password.value) {
        alert('请输入完整的邮箱和密码');
        return;
      }

      // 使用 loginEmail 函数进行登录请求
      const response = await loginEmail(email.value, password.value);
      console.log('邮箱登录响应:', response.data);

      // 检查登录是否成功
      if (response.data.code === 200) {
        alert('邮箱登录成功');
        isShow.value = false;
        // 保存 Cookie
        if (response.data.cookie) {
          document.cookie = `cookie=${response.data.cookie}; path=/;`;
          alert('登录成功，Cookie 已保存');
        }
      } else {
        alert(`登录失败，原因: ${response.data.msg || '未知错误'}`);
      }

    } 
    // 扫码登录逻辑
    else if (loginMethod.value === 2) {
      alert('请使用网易云音乐App扫码登录');
      // 此处可以添加二维码生成逻辑或其他扫码登录处理逻辑
    }

  } catch (error) {
    console.error('登录失败:', error);
    alert('登录出现错误，请稍后再试');
  }
};


// 定义 handleGuestLogin 函数处理点击事件
const handleGuestLogin = async () => {
  try {
    const res = await guestLogin();

    if (res.data && res.data.code == 200) {
      ElMessage.success('游客登录成功');
            // 清除已有的 "MUSIC_A_T" cookie，确保只存一个 cookie
            document.cookie = "MUSIC_A_T=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      isShow.value = false;
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
