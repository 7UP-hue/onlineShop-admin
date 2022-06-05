<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:44
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-04 19:07:22
-->
<script setup lang="ts">
import myHeader from '@/components/header.vue'
import { ref,reactive, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { getShopInfo, editShopInfo } from '@/api/user'
const editForm = reactive({
  shopName:'',
  phone: '',
  shopAddr: '',
  shopDesc: '',
  shopPsd: ''
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive({
  shopName: [
    {required: true, message: '店铺名不能为空！', trigger: 'blur'},
    {min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur'}
  ],
  shopPsd: [
    {required: true, message: '密码不能为空！', trigger: 'blur'},
    {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
  ]
})
const onSubmit = async(formEl: FormInstance | undefined) => {
  //校验失败
  if(!formEl) return
  await formEl.validate((valid, fields) => {
    //校验成功
    if(valid) {
      editShopInfo(editForm).then((res: any) => {
        if(res.code === 200) {
          ElMessage({
            message: '修改成功',
            type: 'success'
          })
        } else {
          ElMessage({
            message: res.msg,
            type: 'error'
          })
        }
      })
    }
  })
}
onMounted(() => {
  getShopInfo().then((res: any) => {
    if(res.code === 200) {
      console.log(res)
      editForm.shopName = res.data.shopName
      editForm.shopPsd = res.data.shopPsd
      editForm.phone = res.data.phone
      editForm.shopAddr = res.data.shopAddr
      editForm.shopDesc = res.data.shopDesc
    }
  })
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
        <el-form :model="editForm" ref="ruleFormRef" label-width="100px" :rules="rules" >
          <el-form-item label="店铺名" prop="shopName">
            <el-input v-model="editForm.shopName" disabled />
          </el-form-item>
          <el-form-item label="密码" prop="shopPsd">
            <el-input v-model="editForm.shopPsd" type="password" show-password />
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="editForm.phone" />
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="editForm.shopAddr" />
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="editForm.shopDesc"  type="textarea"/>
          </el-form-item>
           <el-form-item>
            <el-button type="primary" @click="onSubmit(ruleFormRef)">确定</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>