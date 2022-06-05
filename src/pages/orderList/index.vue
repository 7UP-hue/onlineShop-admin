<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:44
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-04 17:03:37
-->
<script setup lang="ts">
import myHeader from '@/components/header.vue'
const tableData = [
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2,
    status: 0
  },
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2,
    status: 0
  },
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2,
    status: 1
  },
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2,
    status: 1
  },
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2,
    status: 2
  },
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2,
    status: 2
  }
]
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
          <el-input placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary" :icon="Search">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="border border-hex-ccc">
        <el-table :data="tableData" style="width: 100%" >
          <el-table-column prop="proName" label="商品名" align="center"></el-table-column>
          <el-table-column prop="proNum" label="编号" align="center"></el-table-column>
          <el-table-column prop="purchasseNum" label="购买量" align="center"></el-table-column>
          <el-table-column prop="status" label="状态" align="center">
            <template #default="scope">
              <span v-if="scope.row.status===0">待确定</span>
              <span v-if="scope.row.status===1">运送中</span>
              <span v-if="scope.row.status===2">买家已确认收货</span>
              <span v-if="scope.row.status===3">已取消</span>
            </template>
          </el-table-column>
          <el-table-column prop="action" label="操作" align="center">
            <template #default="scope">
              <el-button type="primary" size="small" plain v-if="scope.row.status===0">确认</el-button>
              <el-button type="warning" size="small" plain v-if="scope.row.status===0">拒绝</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>