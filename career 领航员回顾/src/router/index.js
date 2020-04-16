/*
 * @Author: your name
 * @Date: 2020-04-14 12:04:47
 * @LastEditTime: 2020-04-14 14:27:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \工作文件\career\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: HelloWorld
    },
    {
      path: '/star',
      name: 'star',
      component: HelloWorld
    },
    {
      path: '/pilot',
      name: 'pilot',
      component: HelloWorld
    },
    {
      path: '/time',
      name: 'time',
      component: HelloWorld
    },
    {
      path: '/serve',
      name: 'serve',
      component: HelloWorld
    },
    {
      path: '/volume',
      name: 'volume',
      component: HelloWorld
    },
    {
      path: '/end',
      name: 'end',
      component: HelloWorld
    },
   
  ]
})
