<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:44
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-05-31 09:13:03
-->
<script setup lang="ts">
import myHeader from '@/components/header.vue'
const tableData = [
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2
  },
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2
  },
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2
  },
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2
  },
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2
  },
  {
    proName: '男装印花T恤',
    proNum: '12654897915',
    purchasseNum: 2
  }
]
</script>

<template>
  <div>
    <el-header>
      <my-header></my-header>
    </el-header>
    <div class="p-3">
      <el-form :inline="true">
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
          <el-table-column prop="action" label="操作" align="center">
            <template #default>
              <el-button type="primary" size="small">确定</el-button>
              <el-button type="danger" size="small">拒绝</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>