<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:44
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-02 11:29:59
-->
<script setup lang="ts">
import myHeader from '@/components/header.vue'
import { saveProduct } from '@/api/product'
import { ref,reactive } from 'vue'
import axios from 'axios'
const addForm = reactive({
  proName:'',
  stock: '',
  price: '',
  proDesc: ''
})
const addProduct = () => {
  console.log(addForm)
  saveProduct(addForm).then((res) => {
    if(res.code === 200) {
      console.log('新增成功')
    }
  })
}
</script>

<template>
  <div>
    <el-header>
      <my-header></my-header>
    </el-header>
    <div class="mt-5 mx-auto h-600px shadow-lg shadow-gray-300 border border-hex-eee" style="width: 60%" >
      <div class="h-45px border-b border-hex-ccc text-left flex items-center font-600 pl-3">
        <el-icon class="mr-1"><Shop /></el-icon>
        添加商品
      </div>
      <div class="py-5 pr-5">
        <el-form :model="addForm" label-width="100px">
          <el-form-item label="商品名">
            <el-input v-model="addForm.proName" />
          </el-form-item>
          <el-form-item label="商品库存量">
            <el-input v-model="addForm.stock" />
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="addForm.price" />
          </el-form-item>
          <el-form-item label="商品描述">
            <el-input v-model="addForm.proDesc" type="textarea" />
          </el-form-item>
           <el-form-item>
            <el-button type="primary" @click="addProduct">添加</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>