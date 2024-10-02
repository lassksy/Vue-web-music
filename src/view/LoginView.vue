<template>
<div class="dialog" v-if="isShow">
        <div>
            <el-button color="#656569" :dark="isDark" plain   size="large"   :icon="Close" class="close-btn" circle  @click="close"></el-button>

<div class="content">
     <!-- 根据 isQrLogin 值切换显示登录表单或者扫码登录 -->
    <template v-if="!isQrLogin">
      <svg   t="1727514149717" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4242" ><path d="M512 288.06l-110.98-192.22h-158.86L512 563.22 781.84 95.84h-158.86L512 288.06z" p-id="4243"></path><path d="M818.8 95.84L512 627.22 205.2 95.84H31.48L512 928.16 992.52 95.84H818.8z" p-id="4244"></path></svg>
    <div style="font-size: 30px; font-weight: 900;">网易云账号登录</div>
        <div style="margin-top: 10px;">请输入你的电子邮件地址或电话号码以开始。</div>
        <div class="login-container">
    <el-form :model="loginForm" ref="loginFormRef" label-width="120px">
      <!-- 登录方式切换 -->
      <div class="login-method">
        <el-radio-group v-model="loginMethod" fill="#f56c6c">
          <el-radio-button label="phone" >手机登录</el-radio-button>
          <el-radio-button label="email">邮箱登录</el-radio-button>
        </el-radio-group>
      </div>

      <div style="margin-top: 20px;">
<!-- 手机登录表单 -->
<el-form-item :label-position="left" v-if="loginMethod === 'phone'" label="手机号" prop="phone">
        <el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item v-if="loginMethod === 'phone'" label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item v-if="loginMethod === 'phone'" label="国家码">
        <el-input v-model="loginForm.countrycode" placeholder="国家代码 (如: 1)"></el-input>
      </el-form-item>
      </div>
      

      <!-- 邮箱登录表单 -->
      <el-form-item v-if="loginMethod === 'email'" label="邮箱" prop="email">
        <el-input v-model="loginForm.email" placeholder="请输入网易邮箱"></el-input>
      </el-form-item>
      <el-form-item v-if="loginMethod === 'email'" label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-form-item>
        <el-button style="margin-top: 20px;" type="danger" @click="handleLogin">登录</el-button>
     

      </el-form-item>
      <el-divider>
          <el-button class="guest-login-btn"  @click="handleGuestLogin">游客登录</el-button>
          </el-divider>
    </el-form>
  </div>
    



</template>

<template v-else>
          <!-- 扫码登录页面 -->
          <div style="font-size: 30px; font-weight: 900;">扫码登录</div>
          <div style="margin-top: 10px;">请使用网易云音乐App扫码登录。</div>
          <img v-if="qrImgUrl" :src="qrImgUrl" alt="扫码登录二维码" style="margin-top: 20px; width: 200px; height: 200px;" />
        </template>


</div>

   <div style=" margin-top: 20px; display: flex;justify-content: center;align-items: center;">
      <el-button round  class="switch" @click="toggleLoginMethod">{{ isQrLogin ? '切换至账号登录' : '切换至扫码登录' }}</el-button>
</div>

</div>
 

   
</div>
</template>

<script setup >
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

.guest-login-btn {
    color: #232323;
    background-color: rgba($color: #000000, $alpha: 0);
    border: 0;
}

.guest-login-btn:hover {
  color: #f56c6c;
  transition: color 0.3s ease;

}


.switch {
        transition: color 0.3s ease;
}

.switch:hover {
    color: #f56c6c ;
    background-color: rgb(226, 226, 226);
}

.el-radio-group :hover {
   color: #eda2a2 ;
}

.el-input {
         width: 230px;
          height: 32px;
          line-height: 1.25;
          font-size: 12px;
          font-weight: 400;
          margin-top: 20px;
        }



.close-btn {
            position : absolute;
            margin: 30px 30px;

}

.icon {
    width: 50px;
    height: 50px;
}

.dialog {
  // 脱离文档流，并设置背景为半透明的颜色
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);

  // 让登录窗口垂直水平居中
  display: flex;
  justify-content: center;
  align-items: center;

  // 保持登录窗口一直在页面最顶层
  z-index: 999;
}

.content {
  width: 800px;
  height: 560px;
  background-color: white;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputs {
  width: 200px;
  height: 110px;
}

.inputs input {
  width: 90%;
  height: 30px;
  margin: 10px 0 0 0;
}


.el-input {
    --el-input-focus-border-color:  #f56c6c !important;
    margin: 0 !important;
  }


.login-method {
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-form-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.el-radio-group {
  margin-top: 20px;
}
</style>