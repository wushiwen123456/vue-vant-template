import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局rem适配
import 'amfe-flexible'

// 导入vant组件
import './plugins/vant'

//移动端300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 全局滚动组件
import Scroll from '@/components/Scroll'
Vue.component('scroll',Scroll)

// 全屏高度
Vue.prototype.$innerHeight=window.innerHeight

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
