<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:44
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-09 15:04:57
-->
<script setup lang="ts">
import { saveProduct } from '@/api/product'
import { uploadImg } from '@/api/file'
import { ref,reactive } from 'vue'
import type { UploadProps, UploadUserFile } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import myHeader from '@/components/header.vue'
const addForm = reactive({
  proName:'',
  stock: '',
  price: '',
  proDesc: '',
  imgUrl: ''
})
const ruleFormRef = ref<FormInstance>()
const checkStock = (rule: any, value: any, callback: any) => {
  if(value === '') {
    callback(new Error('请输入商品库存量'))
  } else {
    if(!/^[0-9]*$/.test(value)) {
      callback(new Error('请输入正整数'))
    } else {
      callback()
    }
  }
}
//重置文本框
const resetForm = () => {
  addForm.proName = ''
  addForm.stock = ''
  addForm.price = ''
  addForm.proDesc = ''
  addForm.imgUrl = ''
  fileList.value.length = 0
}

const checkPrice = (rule: any, value: any, callback: any) => {
  if(value === '') {
    callback(new Error('请输入商品价格'))
  } else {
    if(!/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(value)) {
      callback(new Error('请输入正确的价格'))
    } else {
      callback()
    }
  }
}
const rules = reactive({
  proName: [
    {required: true, message: '商品名不能为空！', trigger: 'blur'}
  ],
  stock: [{ validator: checkStock, trigger: 'blur' }],
  price: [{ validator: checkPrice, trigger: 'blur' }]
})
const addProduct = async(formEl: FormInstance | undefined) => {
  if(!formEl) return
  const valid = await formEl.validate()
  console.log(valid)
  if(valid) { //校验成功
    if(fileList.value.length!==0) {
      const formData = new FormData()
      formData.append("imgFile",fileList.value[0].raw)
        uploadImg(formData).then((res: any) => {
        console.log(res)
      })
      addForm.imgUrl = 'http://localhost:9090/static/' + fileList.value[0].name
    }
    saveProduct(addForm).then((res: any) => {
      if(res.code === 200) {
        ElMessage({
          message: '添加成功',
          type: 'success'
        })
        resetForm()
        console.log('新增成功')
      } else {
        ElMessage({
          message: '添加失败',
          type: 'error'
        })
        resetForm()
      }
    })
   } else {
     console.log('表单校验失败')
   }
}
const fileList = ref<UploadUserFile[]>([])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
const handleChange: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
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
        <el-form :model="addForm" label-width="100px" ref="ruleFormRef" :rules="rules">
          <el-form-item label="商品名" prop="proName">
            <el-input v-model="addForm.proName" />
          </el-form-item>
          <el-form-item label="商品库存量" prop="stock">
            <el-input v-model="addForm.stock" />
          </el-form-item>
          <el-form-item label="商品价格" prop="price">
            <el-input v-model="addForm.price" />
          </el-form-item>
          <el-form-item label="商品描述">
            <el-input v-model="addForm.proDesc" type="textarea" />
          </el-form-item>
          <el-form-item label="商品图片">
            <el-upload
              :action="'http://localhost:9090/file/addArticle'"
              list-type="picture-card"
              :on-remove="handleRemove"
              :file-list="fileList"
              :on-change="handleChange"
              :on-preview="handlePictureCardPreview"
              :limit="1"
              :auto-upload="false"
              name="imgFile"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>
          </el-form-item>
           <el-form-item>
            <el-button type="primary" @click="addProduct(ruleFormRef)">添加</el-button>
            <el-button @click="resetForm">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>
<style scoped>
</style>