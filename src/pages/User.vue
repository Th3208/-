<template>
  <div class="user">

      <div class="top">
          <img class="bg" src="/images/pd/user.jpg" alt="">
          
          <img class="icon" src="../assets/img/icon/user.png" alt="">
            <h5>
              <a href="javascript:;">{{user.username}}</a> |
              <a href="javascript:;"  @click="logout">注销</a>
            </h5>  
            
      </div>
      <!-- --------------------------------------------------------------------------------- -->
  <aside>
      <ul>
          <li class="ui-border-b"><i class="ui-icon-history abc">全部订单</i> <i class="ui-icon-next fr"></i> </li>
          <li class="ui-border-b"><i class="ui-icon-like abc">我的优惠</i> <i class="ui-icon-next fr"></i> </li>
          <li class="ui-border-b"><i class="ui-icon-wallet abc">我的红包</i>  <i class="ui-icon-next fr"></i> </li>
          <li class="ui-border-b"><i class="ui-icon-scan abc">我的会员</i>  <i class="ui-icon-next fr"></i> </li>
          <li class="ui-border-b"><i class="ui-icon-collect abc">我的收藏</i>  <i class="ui-icon-next fr"></i> </li>
          <li class="ui-border-b"><i class="ui-icon-cart abc">我的购物</i>  <i class="ui-icon-next fr"></i> </li>
      </ul>
  </aside>


  </div>
</template>




<script>
export default {
       data(){
    return {
      user:{}
    }
  },
  beforeRouteEnter(to,from,next){
    axios({
        url:"http://localhost:3000/api/user"
    }).then(
      res=>{
        res.data.err === 0 ? next(_this=>_this.user = res.data.data) : next("/login")
        // console.log(res.data.data.username)
      }
    )
  },
  methods:{
    logout(){
        axios({
            url:"http://localhost:3000/api/logout",
            method:"delete"
          }).then(
            res=>{
              // console.log(res)
            this.$router.push("/login")
            }
            
          )
     }
  }
}
</script>

<style scoped>
  .top{position: relative;margin-top:-60px;}
  .top img.bg{width:100%;height:2.64rem}
  .top img.icon{width:60px;height:60px;border-radius:50%;position:absolute;left:10px;top:20px;}
  .top h5{font:16px/2 "";color:#fff;position: absolute;left:85px;top:20px;}
  .top h5 a{color:#fff}
  
  .ui-border-b{text-align:left;color:rgb(137, 151, 137);width:100%;text-align:left;margin:20px 0;
  display:flex;justify-content:space-between;   border-bottom:1px solid gray}
  .abc{font:22px/2 "";}

  /* .fl{font:18px/18px "";color:rgb(137, 151, 137);width:190px;text-align:left;margin:20px 0} */
</style>