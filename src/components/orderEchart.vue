<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { getMonthMsg } from '@/api/user'
import * as echarts from 'echarts'
interface TableData {
  date: Array<String>,
  sales: Array<String>,
  orderCnt: Array<number>,
}
const tableData: TableData = reactive({
  date: [],
  sales: [],
  orderCnt: []
})
const option = {
  backgroundColor: '#fff',
  grid: {
    top: '20px',
    left: '10px',
    right: '10px',
    bottom: '10px',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['订单数', '销售额'],
    textStyle: {
      color: '#ccc'
    }
  },
  xAxis: {
    data: tableData.date,
    axisLine: {
      lineStyle: {
        color: '#333'
      }
    }
  },
  yAxis: {
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        color: '#333'
      }
    }
  },
  series: [
    {
      name: '销售额',
      type: 'line',
      smooth: true,
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 15,
      data: tableData.sales
    },
    {
      name: '订单数',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        borderRadius: 5,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#14c8d4' },
          { offset: 1, color: '#43eec6' }
        ])
      },
      data: tableData.orderCnt
    },
    {
      name: '销售额',
      type: 'bar',
      barGap: '-100%',
      barWidth: 10,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(20,200,212,0.5)' },
          { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
          { offset: 1, color: 'rgba(20,200,212,0)' }
        ])
      },
      z: -12,
      data: tableData.sales
    },
    {
      name: 'dotted',
      type: 'pictorialBar',
      symbol: 'rect',
      itemStyle: {
        color: '#fff'
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -10,
      data: tableData.sales
    }
  ]
};
const orderChart = ref()
onMounted(() => {
  var myChart = echarts.init(orderChart.value)
  getMonthMsg().then((res: any) => {
    console.log(res)
    res.rows.forEach((val: any) => {
      tableData.date.push(val.date)
      tableData.sales.push(val.sales)
      tableData.orderCnt.push(val.orderCnt*5)
    })
    myChart.setOption(option)
  })
  window.onresize = function () {
    myChart.resize()
  }
})

</script>
<template>
  <div ref="orderChart" style="height: 100%"></div>
</template>