import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/css/base.css'
import "./assets/js/font"
// import './assets/js/banner'
// import './assets/js/banner-he'

import router from './plugins/router'

import './plugins/axios';

//全局过滤器的配置
import './filters'

//配置全局animate.css 动画 插件
import 'animate.css'
 
new Vue({ 
  data:{
    head:true,
    foot:true
  },
  render: h => h(App),
  router
}).$mount('#app')
