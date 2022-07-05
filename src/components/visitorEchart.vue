<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 19:40:58
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-05-30 20:00:14
-->
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { getWeekMsg } from '@/api/user'
import * as echarts from 'echarts'
interface TableData {
  date: Array<String>,
  onlyLook: Array<Number>,
  lookAndBuy: Array<Number>
}
const tableDate: TableData = reactive({
  date: [],
  onlyLook: [],
  lookAndBuy: []
})
const option = {
  angleAxis: {
    type: 'category',
    data: tableDate.date
  },
  color: ['#5470C6','#43eec6'],
  tooltip: {
    trigger: 'item'
  },
  radiusAxis: {},
  polar: {},
  series: [
    {
      type: 'bar',
      data: tableDate.onlyLook,
      coordinateSystem: 'polar',
      name: '仅浏览',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: tableDate.lookAndBuy,
      coordinateSystem: 'polar',
      name: '浏览且购买',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
  ],
  legend: {
    show: true,
    data: ['仅浏览', '浏览且购买'],
    orient: 'vertical',
    left: 'left'
  }
};
const visitorChart = ref()
onMounted(() => {
  var myChart = echarts.init(visitorChart.value)
  getWeekMsg().then((res: any) => {
    res.rows.forEach((val: any) => {
      tableDate.date.push(val.date)
      tableDate.onlyLook.push(val.onlyLook)
      tableDate.lookAndBuy.push(val.lookAndBuy)
      myChart.setOption(option)
    })
  })
  window.onresize = function () {
    myChart.resize()
  }
})

</script>
<template>
  <div ref="visitorChart" style="height: 100%"></div>
</template>