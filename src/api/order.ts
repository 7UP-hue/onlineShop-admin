/*
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-06-06 12:51:38
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-06 13:02:52
 */
import request from '@/utils/request'


//获取订单列表
export function getOrder(data: any) {
  return request({
    url: '/order/selectPage',
    method: 'post',
    data: data
  })
}

//更改订单状态
export function updateOrder(data: any) {
  return request({
    url: 'order/updateOrder',
    method: 'post',
    data: data
  })
}