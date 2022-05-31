<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:44
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-05-31 09:25:30
-->
<script setup lang="ts">
import myHeader from '@/components/header.vue'
const tableData = [
  {
    proName: '男装印花T恤',
    proDesc: '优衣库男装印花T恤',
    stock: 286,
    proNum: '12654897915',
    price: 198.88,
    sales: 158,
    createTime: '2021-05-06'
  },
  {
    proName: '男装印花T恤',
    proDesc: '优衣库男装印花T恤',
    stock: 286,
    proNum: '12654897915',
    price: 198.88,
    sales: 158
  },
  {
    proName: '男装印花T恤',
    proDesc: '优衣库男装印花T恤',
    stock: 286,
    proNum: '12654897915',
    price: 198.88,
    sales: 158
  },
  {
    proName: '男装印花T恤',
    proDesc: '优衣库男装印花T恤',
    stock: 286,
    proNum: '12654897915',
    price: 198.88,
    sales: 158
  },
  {
    proName: '男装印花T恤',
    proDesc: '优衣库男装印花T恤',
    stock: 286,
    proNum: '12654897915',
    price: 198.88,
    sales: 158
  },
  {
    proName: '男装印花T恤',
    proDesc: '优衣库男装印花T恤',
    stock: 286,
    proNum: '12654897915',
    price: 198.88,
    sales: 158
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
          <el-table-column type="expand">
            <template #default="props">
              <div class="mx-10 my-3">
                <div>
                  <span class="mr-20">编号：{{props.row.proNum}}</span>
                  <span class="mr-20">价格：{{props.row.price}}</span>
                  <span>销量：{{props.row.sales}}</span>
                </div>
                <div class="mt-3">版型款式</div>
                <div>
                  <span class="mr-5">袖长：短袖</span>
                  <span class="mr-5">领型：圆领</span>
                  <span>版型：标准</span>
                </div>
                <div class="mt-3">关键信息</div>
                <div>
                  <span class="mr-5">上市年份季节：{{props.row.createTime}}</span>
                  <span class="mr-5">厚薄：常规</span>
                  <span class="mr-5">材质成分：棉100%</span>
                  <span class="mr-5">品牌：优衣库</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="proName" label="商品名" align="center"></el-table-column>
          <el-table-column prop="proDesc" label="商品介绍" align="center"></el-table-column>
          <el-table-column prop="stock" label="库存量" align="center"></el-table-column>
          <el-table-column prop="action" label="操作" align="center">
            <template #default>
              <el-button type="primary" size="small"><el-icon><edit /></el-icon></el-button>
              <el-button type="danger" size="small"><el-icon><delete /></el-icon></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>