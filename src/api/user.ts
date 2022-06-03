/*
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-06-02 11:36:41
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-03 00:04:15
 */
import request from '@/utils/request'

export function userLogin(data: any) {
  return request({
    method: 'post',
    url: '/user/login',
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