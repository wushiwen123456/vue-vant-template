import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入页面
const Detail = () => import('@/views/Detail')
Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: '/',
    redirect: '/detail'
  },
  {
    path:'/detail',
    component:Detail
  }
]

const router = new VueRouter({
  routes
})



export default router