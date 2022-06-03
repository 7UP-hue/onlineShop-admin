<!--
 * @Descri
  components: { header },pttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:36
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-03 21:02:53
-->
<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  const $route = useRoute()
  const $router = useRouter()
  const isCollapse = ref(false)
</script>

<template>
  <div>
    <el-aside class="min-h-100vh" style="position: fixed; width: 240px">
      <div
        class="text-xl text-hex-209E91 font-bold h-60px leading-60px"
        style="background-color: #1C2B36"
      >智慧商场后台管理</div>
      <el-menu
        class="min-h-100vh el-menu-vertical-demo"
        background-color="#1C2B36"
        active-text-color="#209E91"
        text-color="#fff"
        :collapse="isCollapse"
        router
      >
        <el-menu-item index="/home">
          <el-icon><Menu /></el-icon>首页
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Promotion /></el-icon>数据管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/shopList">
              商品列表
            </el-menu-item>
            <el-menu-item index="/orderList">
              订单列表
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><CirclePlusFilled /></el-icon>添加数据
          </template>
          <el-menu-item-group>
            <el-menu-item index="/addShop">
              添加商品
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Edit /></el-icon>编辑
          </template>
          <el-menu-item-group>
            <el-menu-item index="/editShop">
              店铺管理
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <div class="ml-240px">
      <router-view></router-view>
    </div>
  </div>
</template>