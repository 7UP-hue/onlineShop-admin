<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:49:57
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-02 14:23:51
-->
<script setup lang="ts">

</script>
<template>
  <div
    class="h-60px"
    style="position: fixed; top: 0;left: 0; width: 100%; z-index:100; min-width: 1024px"
  >
    <div class="ml-240px h-60px flex justify-between items-center text-white px-3" style="background: rgba(28,43,54,.9);">
      <el-breadcrumb separator-class="el-icon-arrow-right">
           <el-breadcrumb-item :to="{path: '/'}" class="text-white">
              <span class="text-white">首页</span>
            </el-breadcrumb-item>
           <el-breadcrumb-item v-for="(item, index) in $route.meta.title" :key="index">
              <span class="text-white">{{item}}</span>
            </el-breadcrumb-item>
       </el-breadcrumb>
      <el-dropdown class="mr-5">
          <div style="display: flex;align-items: center">
            <el-avatar src="src/assets/toux2.jpeg"></el-avatar>
            <span class="text-white ml-3">admin</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><span @click="$router.push('/manage');">首页</span></el-dropdown-item>
              <el-dropdown-item><span @click="$router.push('/edit');">编辑</span></el-dropdown-item>
              <el-dropdown-item><span @click="$router.push('/login');">退出</span></el-dropdown-item>
            </el-dropdown-menu>
          </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
</style>


