/*
 * @Description: 
 * @Date: 2023-03-24 09:13:48
 * @LastEditors: Yuanxy
 * @LastEditTime: 2023-03-24 09:24:30
 * @FilePath: \ol-mapbox-style\src\main.js
 * @Author: Yuanxy 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//ol 样式
import 'ol/ol.css';
//ol的插件 扩展工具 增加一些操作工具、几何样式、动画效果等功能
import 'ol-ext/dist/ol-ext.min.css';

//mapbox
import 'mapbox-gl/dist/mapbox-gl.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
