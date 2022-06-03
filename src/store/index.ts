/*
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:06:27
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-02 11:35:09
 */
import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import test from './modules/test'
export default createStore({
  getters,
  modules: {
    user
  }
})
