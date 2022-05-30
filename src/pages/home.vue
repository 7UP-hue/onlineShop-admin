<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:15:44
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-05-30 21:49:54
-->
<script setup lang="ts">
import myHeader from '@/components/header.vue'
</script>

<template>
  <el-container>
    <el-header>
      <my-header></my-header>
    </el-header>
    <div class="p-3">
      <div class="text-left text-xl ml-3">统计</div>
      <div class="flex justify-between mt-3 mx-3">
        <span class="adminMsg">
          新增订单<div class="digit">2022</div>
        </span>
        <span class="adminMsg">
          总订单<div class="digit">2022</div>
        </span>
        <span class="adminMsg">
          新增销售额<div class="digit">2022</div>
        </span>
        <span class="adminMsg">
          总销售额<div class="digit">2022</div>
        </span>
      </div>
      <div class="flex justify-between h-400px mx-3 mt-8">
        <div
          class="h-380px border border-hex-ccc"
          style="box-shadow: 2px 5px 10px #ccc; width: 48%">
          <div class="h-45px border-b border-hex-ccc text-left px-5 leading-45px" style="width: 100%;">
            订单统计
          </div>
          <div class="h-330px">
            <order-echart></order-echart>
          </div>
        </div>
        <div
          class="h-380px border border-hex-ccc"
          style="box-shadow: 2px 5px 10px #ccc; width: 48%">
          <div class="h-45px border-b border-hex-ccc text-left px-5 leading-45px" style="width: 100%;">
            访客统计
          </div>
          <div class="h-340px">
            <visitor-echart></visitor-echart>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>
<style scoped>
  .adminMsg {
    display: inline-block;
    width: 22%;
    border: 1px solid #ccc;
    border-radius: .3em;
    box-shadow: 7px 7px 10px 1px #ccc;
    text-align: left;
    padding: 1em
  }
  .digit {
    color: rgb(154,96,180);
    font-size: 1.5em;
    margin-top: .5em;
    font-weight: 700;
  }
</style>