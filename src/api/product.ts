/*
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-06-02 11:25:09
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-06 16:45:27
 */
import request from '@/utils/request'

export function saveProduct(data: any) {
  return request({
    method: 'post',
    url: '/product/addProduct',
    data: data
  })
}

export function getProduct(data: any) {
  return request({
    method: 'post',
    url: '/product/selectPage',
    data: data
  })
}

export function updateProduct(data: any) {
  return request({
    method: 'post',
    url: '/product/editProduct',
    data: data
  })
}

export function deleteProduct(data: any) {
  return request({
    method: 'get',
    url: 'product/deleteProduct',
    params: data
  })
}