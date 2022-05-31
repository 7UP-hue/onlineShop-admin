<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:44
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-05-31 09:45:00
-->
<script setup lang="ts">
import myHeader from '@/components/header.vue'
import { ref,reactive } from 'vue'
const editForm = reactive({
  shopName:'',
  phoneNumber: '',
  shopAddr: '',
  shopDesc: ''
})
</script>

<template>
  <div>
    <el-header>
      <my-header></my-header>
    </el-header>
    <div class="mt-5 mx-auto h-600px shadow-lg shadow-gray-300 border border-hex-eee" style="width: 60%" >
      <div class="h-45px border-b border-hex-ccc text-left flex items-center font-600 pl-3">
        <el-icon class="mr-1"><CameraFilled /></el-icon>
        编辑店铺信息
      </div>
      <div class="py-5 pr-5">
        <el-form :model="addForm" label-width="100px">
          <el-form-item label="店铺名">
            <el-input v-model="editForm.shopName" />
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="editForm.phoneNumber" />
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="editForm.shopAddr" />
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="editForm.shopDesc"  type="textarea"/>
          </el-form-item>
           <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>