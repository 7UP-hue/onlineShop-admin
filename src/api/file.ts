/*
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-06-04 22:10:01
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-04 23:09:43
 */
import request from '@/utils/request'
export function uploadImg(data: any) {
  return request({
    method: 'post',
    url: '/file/addArticle',
    data: data
  })
}