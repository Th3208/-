import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/Home.vue'
import Shopcart from '../pages/Shopcart.vue'
import Search from '../pages/Search.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Detail from '../pages/Detail.vue'
// import Error from '../pages/Error.vue'

let routes=[
  {path:'/Home',component:Home},
  {path:'/Shopcart',component:Shopcart},
  {path:'/Search',component:Search},
  {path:'/User',component:User},
  {path:'/Login',component:Login},
  {path:'/Reg',component:Reg},
  {path:'/Detail/:id',component:Detail,name:'detail'},
  // {path:'/Detail/:id',component:Detail,name:'detail',props:true},
  {path:'/',redirect:'/home'},
  // {path:'*',component:Error},

];

let router = new VueRouter({
  routes
})

export default router