<template>
<div class="dialog" v-if="isShow">
        <div>
            <el-button color="#656569" :dark="isDark" plain   size="large"   :icon="Close" class="close-btn" circle  @click="close"></el-button>

<div class="content">
        <svg   t="1727514149717" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4242" ><path d="M512 288.06l-110.98-192.22h-158.86L512 563.22 781.84 95.84h-158.86L512 288.06z" p-id="4243"></path><path d="M818.8 95.84L512 627.22 205.2 95.84H31.48L512 928.16 992.52 95.84H818.8z" p-id="4244"></path></svg>
    <div style="font-size: 30px; font-weight: 900;">网易云账号登录</div>
        <div style="margin-top: 10px;">请输入你的电子邮件地址或电话号码以开始。</div>
        <el-input  placeholder="手机号"></el-input>
        <el-input  placeholder="密码"></el-input>

    <div class="btns">
    <el-button style="margin-top: 20px;" type="danger" @click="close">登录</el-button>

</div>
<el-divider  content-position="center"><button class="switch">切换至扫码登录</button></el-divider>

</div>

        </div>
 

   
</div>
</template>

<script setup >
 import {ref , reactive , inject} from "vue";

import {Close} from '@element-plus/icons-vue'

const {isShow ,setShow} = inject("dialog-show");

const close = ()=> {
    isShow.value = false;
            }



</script>

<style lang="scss" scoped>

.switch {
        border: 0px;
        background-color: rgba($color: #000000, $alpha: 0);
        transition: color 0.3s ease;

}

.switch:hover {
    color: #f56c6c;
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
  }

</style>