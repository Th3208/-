<template>
  <div id="app">
    <Header v-show="$root.$data.head"></Header>

   <transition
		enter-active-class = "animated bounceInRight"
   >
    <router-view></router-view>
   </transition>

    <Footer v-show="$root.$data.foot"></Footer>
     
  </div>
</template>

<script>

import Header from  './components/Header'
import Footer from  './components/Footer'
 
export default {
  name: 'app',
  components: {
    Header,Footer
  },
   methods:{
    checkPath(path){//路由检测
      // console.log('path',path);
      if(/home|follow|column/.test(path)){
        this.$root.$data.head=true;
        this.$root.$data.foot=true;
      }
      if(/user|search/.test(path)){
        this.$root.$data.head=false;
        this.$root.$data.foot=true;
      }
      if(/login|reg|detail|shopcart/.test(path)){
        this.$root.$data.head=false;
        this.$root.$data.foot=false;
      }
    }
  },
  watch:{
    $route:{
      handler(current,prev){
        // current.path==/home|/follow|/colukn|/detail/23423234
        this.checkPath(current.path)
      },
      immediate:true,
      deep:true
    }
  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
