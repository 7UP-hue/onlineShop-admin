/*
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:06:27
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-05-30 19:29:09
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'virtual:windi.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router).use(store).mount('#app')
