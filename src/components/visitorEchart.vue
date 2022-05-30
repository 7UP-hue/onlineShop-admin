<!--
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 19:40:58
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-05-30 20:00:14
-->
<script setup lange="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
const option = {
  angleAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
      data: [1, 2, 3, 4, 3, 5, 1],
      coordinateSystem: 'polar',
      name: '仅浏览',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: [2, 4, 6, 1, 3, 2, 1],
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
  myChart.setOption(option)
  window.onresize = function () {
    myChart.resize()
  }
})

</script>
<template>
  <div ref="visitorChart" style="height: 100%"></div>
</template>