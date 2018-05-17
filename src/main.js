// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
// import { Message, Loading } from 'element-ui';
// Vue.prototype.$loading = Loading
// Vue.prototype.$message = Message

//引入iconfont字体图标
import '@/assets/font/iconfont.css'


//封装axios的get以及post方法
import Server from './server/server.js'
Vue.prototype.$get = Server.get
Vue.prototype.$post = Server.post

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
