import { createRouter, createWebHashHistory } from 'vue-router'
// import User from '../components/User.vue'

const routes = [
  {
    path:'/',
    redirect:'/users'
  },
  {
    path: '/users',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta:{
      title:'用户信息'
    }
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: ()=>import('../views/UserInfo.vue'),
    meta:{
      title:'用户详情'
    }
  },
  {
    path: '/rights',
    name: 'Rights',
    component: ()=>import('../components/Rights.vue'),
    meta:{
      title:'权限管理'
    }
  },  
  {
    path: '/goods',
    name: 'Goods',
    component: ()=>import('../components/Goods.vue'),
    meta:{
      title:'商品管理'
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: ()=>import('../components/Orders.vue'),
    meta:{
      title:'订单管理'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: ()=>import('../components/Settings.vue'),
    meta:{
      title:'系统设置'
    }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由前端守卫
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})
export default router
