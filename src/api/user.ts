/*
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-06-02 11:36:41
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-04 18:24:13
 */
import request from '@/utils/request'

export function userLogin(data: any) {
  return request({
    method: 'post',
    url: '/shop/login',
    data: data
  })
}
export function userLogout() {
  return request({
    method: 'post',
    url: '/login'
  })
}
export function getUserInfo(data: any) {
  return request({
    method: 'post',
    url: '/login',
    data: data
  })
}

export function getShopInfo() {
  return request({
    method: 'get',
    url: '/shop/getMsg'
  })
}

export function editShopInfo(data: any) {
  return request({
    method: 'post',
    url: '/shop/editMsg',
    data: data
  })
}