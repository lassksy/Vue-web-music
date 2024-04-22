<template>
    <div class="common-layout">
      <Header/>
      <el-container>
        <Aside></Aside>
          <el-main>
            <RouterView></RouterView>
          </el-main>
        


      </el-container>
          <el-footer>Footer</el-footer>
        
  </div>
</template>

<script setup lang="ts"
>
</script>

