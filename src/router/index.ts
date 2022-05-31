/*
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-05-30 11:06:27
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-05-31 10:11:47
 */
import { HomeFilled } from '@element-plus/icons-vue/dist/types'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import manage from '@/pages/manage.vue'
import mainPage from '@/pages/home.vue'
import orderList from '@/pages/orderList/index.vue'
import shopList from '@/pages/shopList/index.vue'
import addShop from '@/pages/addShop/index.vue'
import editUser from '@/pages/edit/index.vue'
import editShop from '@/pages/edit/editShop.vue'
import login from '@/pages/login.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: (_) => {
      return { path: '/login' }
    },
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/home',
    name: 'HelloWorld',
    component: manage,
    children: [
      {
        path: '',
        component: mainPage
      },
      {
        path: '/shopList',
        component: shopList,
        meta: {
          title: ['数据管理', '商品列表']
        }
      },
      {
        path: '/orderList',
        component: orderList,
        meta: {
          title: ['数据管理', '订单管理']
        }
      },
      {
        path: '/addShop',
        component: addShop,
        meta: {
          title: ['添加数据', '添加商品']
        }
      },
      {
        path: '/editUser',
        component: editUser,
        meta: {
          title: ['编辑', '用户管理']
        }
      },
      {
        path: '/editShop',
        component: editShop,
        meta: {
          title: ['编辑', '店铺管理']
        }
      }
    ]
  },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => {
      return { path: '/404' }
    },
  },
  {
    path: '/404',
    name: '404NotFind',
    component: () => import('@/pages/404.vue')
  }
]
const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})
export default router