<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:44
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-09 15:04:32
-->
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue"
import myHeader from '@/components/header.vue'
import { getOrder, updateOrder } from '@/api/order'
import { ElMessage } from 'element-plus'
const tableData = reactive([])
const request = reactive({
  pageNum: 1,
  pageSize: 10,
  type: 'admin',
  proName: '',
  orderId: ''
})
const confirmDialogShow = ref(false)
const refuseDialogShow = ref(false)
const currentPageNum = ref(1)
const statusRequest = reactive({
  status: 1,
  orderId: ''
})
const checkOrderId = ref('')
const onConfirm = (status: any) => {
  statusRequest.orderId = checkOrderId.value
  statusRequest.status = status
  updateOrder(statusRequest).then((res: any) => {
    if(res.code === 200) {
      ElMessage({
        message: '操作成功',
        type: "success"
      })
      getOrderList()
    } else {
      ElMessage({
        message: '操作失败',
        type: "error"
      })
    }
    if(status === 1) {
      confirmDialogShow.value = false
    } else {
      refuseDialogShow.value = false
    }
  })
}
const showConfirm = (orderId: any) => {
  confirmDialogShow.value = true
  checkOrderId.value = orderId
}
const showCancel = (orderId: any) => {
  refuseDialogShow.value = true
  checkOrderId.value = orderId
}
const totalSize = ref()
const getOrderList = () => {
  getOrder(request).then((res: any) => {
    tableData.length = 0
    tableData.push(...res.rows)
    totalSize.value = res.total
  })
}
const pageNumChange = () => {
  request.pageNum = currentPageNum.value
  getOrderList()
}
const choType = ref('proName')
const searchValue = ref('')
const Search = () => {
  if(choType.value === 'proName') {
    request.proName = searchValue.value
  } else if(choType.value === 'orderId') {
    request.orderId = searchValue.value
  }
  getOrderList()
}
const cancel = () => {
  choType.value = 'proName'
  searchValue.value = ''
  Search()
}
onMounted(() => {
  getOrderList()
})
</script>

<template>
  <div>
    <el-header>
      <my-header></my-header>
    </el-header>
    <div class="p-3 mt-5 mx-10 shadow-lg shadow-gray-300 border border-hex-eee min-h-75vh">
      <div class="h-45px border-b border-hex-ccc text-left flex items-center font-600 pl-3">
        <el-icon class="mr-1"><Checked /></el-icon>
        订单列表 
      </div>
      <el-form :inline="true" class="mt-4">
        <el-form-item>
          <el-select v-model="choType" placeholder="请选择查询方式" >
            <el-option label="根据商品名查询" value="proName"></el-option>
            <el-option label="根据订单编号查询" value="orderId"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入关键字" v-model="searchValue" />
        </el-form-item>
        <el-form-item>
          <el-button @click="cancel">重置</el-button>
          <el-button type="primary" :icon="Search" @click="Search">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="border border-hex-ccc">
        <el-table :data="tableData" style="width: 100%; min-height: 350px" >
          <el-table-column prop="proName" label="商品名" align="center" width="300px"></el-table-column>
          <el-table-column prop="orderId" label="订单编号" align="center"></el-table-column>
          <el-table-column prop="purchaseCnt" label="购买量" align="center"></el-table-column>
          <el-table-column prop="status" label="状态" align="center">
            <template #default="scope">
              <el-tag type="warning" v-if="scope.row.status===0">待确定</el-tag>
              <el-tag v-if="scope.row.status===1">运送中</el-tag>
              <el-tag type="success" v-if="scope.row.status===2">买家已确认收货</el-tag>
              <el-tag type="info" v-if="scope.row.status===3">已取消</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="action" label="操作" align="center">
            <template #default="scope">
              <el-button type="primary" size="small" v-if="scope.row.status===0" @click="showConfirm(scope.row.orderId)">确认</el-button>
              <el-button type="warning" size="small" v-if="scope.row.status===0" @click="showCancel(scope.row.orderId)">拒绝</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :page-size="10"
          layout="prev, pager, next"
          :total="totalSize"
          v-model:current-page="currentPageNum"
          class="flex justify-center"
          @current-change="pageNumChange"
        />
      </div>
    </div>
    <el-dialog v-model="confirmDialogShow" width="30%">
      确定发货吗？
      <div class="mt-5">
        <el-button @click="confirmDialogShow = false">取消</el-button>
        <el-button type="primary" @click="onConfirm(1)">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog v-model="refuseDialogShow" width="30%">
      确定拒绝该订单吗？
      <div class="mt-5">
        <el-button @click="refuseDialogShow = false">取消</el-button>
        <el-button type="primary" @click="onConfirm(3)">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style scoped>
</style>