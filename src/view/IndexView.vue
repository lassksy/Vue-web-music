<template>
    <div class="common-layout">
    <el-container>
      <el-header>
        <AdminHeader />
      </el-header>
      <el-container>
        <el-affix width="200px">
          <AdminMenu />
        </el-affix>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

