// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import VueRouter from 'vue-router' 
import  VueResource  from 'vue-resource'

// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
//拖拽
import VueDND from 'awe-dnd'

Vue.use(VueDND)

/*加载组建*/
import home from './components/home'
import html from './components/main/html'
import css from './components/main/css'
import javascript from './components/main/lavascript'

Vue.use(VueRouter);  
Vue.use(VueResource) 

// 定义路由
// 每个路由应该映射一个组件。 
const routes = [
  { path: '/', name:'home', component: home }, 
  { path: '/home',  component: home }, 
  { path: '/html',  component: html }, 
  { path: '/css', component: css }, 
  { path: '/javascript', component: javascript }
  //前面to指定的地方 path  /1
]

//  创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  mode:'history',
  routes
})


// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
