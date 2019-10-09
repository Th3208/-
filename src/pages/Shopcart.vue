<template>
  <div class="shopcart">

    
<header class="ui-border-tb" style="padding-bottom:1px;" >
    <div class="ui-c-header clearfix">
           
        <div class="fl" style="width:5%">
           <!-- 返回箭 -->
            <i class="ui-icon-return" @click="goback"></i>
        </div>

        <div class="fl ui-c-cart">
            <h2>购物车</h2>
        </div>
    </div>
</header>


<section>
    <div class="list">
        <ul>
            <li class="ui-border-b">
              <a href="javascript:;">
                <div class="ui-p-box clearfix">

                    <div class="fl ui-p-choice">
                         <!-- 复选框 -->
                        <i class="ui-icon-success ui-icon-cu"></i>
                    </div>
                    
                    <div class="ui-p-product fl">
               
                            <img class="info-img" src="/images/pd/pd1.jpg" alt="">
                   
                    </div>
                    <div class="info">
                        <h3>Apple iPhone 6s</h3>
                        <span class="ui-t">玫瑰金色 移动联通电信4G手机</span>
                        <p>4788元</p>
                        <div class="ui-p-click ">
                            <div class="ui-c1">-</div>
                            <div class="ui-c2">1</div>
                            <div class="ui-c3">+</div>
                        </div>
                    </div>

                    <div class="fr ui-p-delete">
                      <!-- 删除箭 -->
                        <i class="ui-icon-delete"></i>
                    </div>
                </div>
                </a>
            </li>

        </ul>


         <div class="footer">
         <div class="footer-l">加入购物车</div>
         <div class="footer-r">立即购买</div>
    </div>   
    </div>

</section>

  </div>
</template>




<script>
export default {
   beforeRouteEnter(to,from,next){
    axios({
        url:"http://localhost:3000/api/user"
    }).then(
      res=>{
        res.data.err === 0 ? next(_this=>_this.user = res.data.data) : next("/login")
        // console.log(res.data.data)
      }
    )
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .ui-border-tb{margin-top:-60px; }
  .ui-c-cart{font:20px/40px "";color:rgb(103, 112, 117);margin-left:10px;margin-top:2px; }


  .list{padding-bottom:100px;}
  .list ul li a{display:flex;cursor:pointer;}
  .list ul li a img.info-img{display:block; width:106px;height:107px;}
  .list ul li a .info{width:414px;height:106px;font:12px/18px "";text-align: left;font-weight: 400;}
  .info > span {
    color: rgba(32, 35, 37, 0.6);
    display: block;
    padding-top:5px;
  }
  .info > h3 {color:rgb(103, 112, 117);font-size:14px;}
  .info > p {color:rgb(241, 105, 26);font-size:20px;font-weight:200;padding-top:10px;}


  .ui-p-click{display:flex;font-size:23px;color:rgba(32, 35, 37, 0.6);margin-top:10px;}
  .ui-c2{color:rgb(241, 105, 26);}
  /* ========================================================= */

   .footer{display:flex;position:fixed;bottom:0;font:30px/2 '';justify-content:space-between;width:100%;color:#fff}

    .footer .footer-l{height:60px;width:50%;background:rgb(255, 166, 0);}
    .footer .footer-r{height:60px;width:50%;background:rgb(247, 64, 31)}

</style>