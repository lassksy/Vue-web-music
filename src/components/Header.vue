<template>
    <div id="header">
        <el-avatar class="avg" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
        <el-input v-model="input" style="width: 720px" placeholder="搜索" />
        <el-button class="login">登录</el-button>
</div>
</template>

<script setup lang="ts">

</script>


<style scoped lang="scss">
    #header {
        box-shadow: var(--el-box-shadow-light);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .avg {
            display: flex;
            margin-left: 30px;
            border: 1px solid;
            box-shadow: var(--el-box-shadow-light);
            
        }
        .login {
            margin-right: 30px;
        }
    
    }
</style>