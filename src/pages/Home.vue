<template>
  <div class="home">
      <!-- 轮播图 -->
    <silder></silder>

    <!-- --------------------------bg---------------------------------------------------------------------------- -->

    <a href="#" class="bj"><img src="/images/pd/bj.png" alt=""></a>

    <!-- --------------------新品---------------------------------------------------------------------------------- -->
     <div class="top">
       <h3>新品上架</h3>
     </div>

      <div class="list">
         <ul>
            <li
            v-for="(item) of listData"
            :key="item._id"
            >

              <a href="javascript:;">
                   <router-link :to="'/detail/'+item._id+'?dataName=' + 'column' "> 
                        <img class="info-img" :src="item.url" alt="">
                        <div class="info">
                            <h3>{{item.title}}</h3>
                            <span>{{item.content}}</span> 
                            <p class="around-other-price price"><span>￥</span> <b>{{item.price}}</b></p>   
                        </div>
                    </router-link>
              </a>
              
            </li>

          </ul>
      </div>
  
  
  <!-- ------------------------------------------------------------------------------------------------------ -->
  </div>
</template>

<script>
import silder from '../components/silder'  //引入轮播图组件
export default {
    data(){ 
      return {
        listData:[] 
      }
    },  
    components:{
        silder
    },
    mounted(){
            axios({
         url:'http://localhost:3000/api/column',
        
          params:{_page:1,_limit:10}
        }).then(
          (res)=>{
            this.listData = res.data.data
            // console.log(res.data.data)
           }
    
    )
    }  
} 
</script>


<style scoped>
  .bj{display:block,} 
  .bj img{width:100%}
  /* --------------列表-------------------------------------------------------------------------------- */
  .top{width:100%;height:0.93rem;position: relative;}
  .top h3{color:#2b577a;line-height:0.93rem;font-size: 20px;position: absolute;left:10px;top:2px}
  .list{padding-bottom:100px;}
  .list ul li a{display:flex;cursor:pointer;margin:20px 0;}
  .list ul li a img.info-img{display:block; width:106px;height:107px;}
  .list ul li a .info{width:307px;height:106px;font:12px/18px "";text-align: left;font-weight: 400;}
  .info > span {
    color: rgba(32, 35, 37, 0.6);
    display: block;
    padding-top:5px;
  }
  .info > h3 {color:rgb(103, 112, 117);font-size:14px;}
  .info > p {color:rgb(241, 105, 26);font-size:20px;font-weight:200;padding-top:10px;}
</style>