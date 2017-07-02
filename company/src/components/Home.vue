<template>
  <div class="home">
    <el-carousel indicator-position="outside"  height="500px">
      <el-carousel-item v-for="item in 5" :key="item" interval="2000">
        <p class="animated  fadeInLeft delay_0">湖南奇峰医药有限公司</p>
        <h1 class="animated  fadeInLeft delay_100">岳阳首家 "互联网医药" 企业</h1>
        <h2  class="animated  fadeInLeft delay_200">具备有效解决药品储存与管理能力，对企业级账户实现“可观可控”，提供药品的网络化管理，进行第二步的管理升级，实现企业级药品大数据的有效归集、和应用。</h2>
      </el-carousel-item>
    </el-carousel>
    <div class="business-1">
      <div class="box animated  fadeInLeft delay_200">
        <h2  class="animated  fadeInLeft delay_300">业务覆盖岳阳九成医院</h2>
        <!-- <div class="left-hr"></div> -->
        <p  class="animated  fadeInLeft delay_400">湖南奇峰医药有限公司药品管理产品针对不同规模的药品管理需求，封装了相应功能体量的产品包。对于同一机构不同阶段的业务需求，用户可在TMS产品中进行灵活配置。</p>
        <router-link to="/AboutUs"  class="animated  fadeInLeft delay_500">了解详情</router-link>
      </div>
    </div>

    <div class="business-2">
      <div class="box">
        <h2>安全、稳定、多通路的网关</h2>
        <p>G.LINK+同时对接国内外主流结算网络，以银行级安全标准保障数据安全。在实际支付交易发生时，G.LINK+独有的智能路由功能，可按照客户不同的要求侧重点，满足客户低成本、即时性和偏好要求。</p>
        <router-link to="/AboutUs">了解详情</router-link>
      </div>
    </div>

    <div class="business-3">
      <div class="box">
        <h2>您的业务可以覆盖整个湖南省</h2>
        <p>借助G.Link+覆盖全球的资金管理网络，整个湖南的药品业务您可以实时展控，这将是个全新的开始。</p>
        <router-link to="/AboutUs">了解详情</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .home{
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }

    .el-carousel__item p{
      font-size: 17px;
      padding: 110px 50px 10px 50px;
      letter-spacing: 1px;
      font-weight: 100;
    }

    .el-carousel__item h1{
      font-size: 25px;
      padding: 0 50px 10px 50px;
      letter-spacing: 1px;
    }

    .el-carousel__item h2{
      font-size: 14px;
      padding: 0 50px 10px 50px;
      letter-spacing: 1px;
      line-height: 20px;
    }

    // .el-carousel__item:nth-child(2n) {
    //   background-color: #d3dce6;
    // }

    // .el-carousel__item:nth-child(2n+1) {
    //   background-color: #293646;
    //   color:#eee;
    // }

    .el-carousel__item{
      background-color: #293646;
      color:#eee;
    }

    .business-1{
      padding: 50px;
      h2{
        font-size: 20px;
      }
      p{
        letter-spacing: 1px;
        line-height: 22px;
        padding-bottom: 20px;
        margin-top: 10px;
      }
      a{
        background: #02B2B5;
        border: 0;
        color:#fff;
        padding: 8px 20px;
        border-radius: 2px;
        font-weight: bold;
      }
    }
    .left-hr{
      background: #293646;
      height:5px;
      width:120px;
    }
    .business-2{
      padding: 50px;
      background: #293646;
      color:#fff;
      h2{
        font-size: 20px;
      }
      p{
        letter-spacing: 1px;
        line-height: 22px;
        padding-bottom: 20px;
        margin-top: 10px;
      }
      a{
        background: #fff;
        border: 0;
        color:#293646;
        padding: 8px 20px;
        border-radius: 2px;
        font-weight: bold;
      }
    }
    .business-3{
      padding: 50px;
      h2{
        font-size: 20px;
      }
      p{
        letter-spacing: 1px;
        line-height: 22px;
        padding-bottom: 20px;
        margin-top: 10px;
      }
      a{
        background: #02B2B5;
        border: 0;
        color:#fff;
        padding: 8px 20px;
        border-radius: 2px;
        font-weight: bold;
      }
    }
  }
}

@media screen and (min-width:900px){
  .home{
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }

    .el-carousel__item p{
      font-size: 17px;
      padding: 110px 50px 10px 100px;
      letter-spacing: 1px;
      font-weight: 100;
    }

    .el-carousel__item h1{
      font-size: 45px;
      width:740px;
      padding: 0 50px 10px 100px;
      letter-spacing: 1px;
    }

    .el-carousel__item h2{
      font-size: 16px;
      width:400px;
      padding: 0 50px 10px 100px;
      letter-spacing: 1px;
      line-height: 27px;
    }

    // .el-carousel__item:nth-child(2n) {
    //   background-color: #d3dce6;
    // }

    // .el-carousel__item:nth-child(2n+1) {
    //   background-color: #293646;
    //   color:#eee;
    // }

    .el-carousel__item{
      background-color: #293646;
      color:#eee;
    }

    .business-1{
      padding: 50px;
      color: #fff;
      .box{
        width: 300px;
        height: 100px;
        padding: 80px 50px 160px 50px;
        background: #293646;
        margin-left: 50px;
        margin-bottom: 50px;
        margin-top: 20px;
      }
      h2{
        font-size: 20px;
      }
      p{
        letter-spacing: 1px;
        line-height: 22px;
        padding-bottom: 20px;
        margin-top: 10px;
      }
      a{
        background: #02B2B5;
        border: 0;
        color:#fff;
        padding: 8px 20px;
        border-radius: 2px;
        font-weight: bold;
      }
    }
    .left-hr{
      background: #293646;
      height:5px;
      width:120px;
    }
    .business-2{
      padding: 50px;
      background: #293646;
      color:#fff;
      height:540px;
      box-sizing: border-box;
      .box{
        width: 300px;
        height: 100px;
        padding: 80px 50px 160px 50px;
        background: #02B2B5;
        margin-right: 50px;
        margin-bottom: 50px;
        margin-top: 50px;
        float: right;
      }
      h2{
        font-size: 20px;
      }
      p{
        letter-spacing: 1px;
        line-height: 22px;
        padding-bottom: 20px;
        margin-top: 10px;
      }
      a{
        background: #fff;
        border: 0;
        color:#293646;
        padding: 8px 20px;
        border-radius: 2px;
        font-weight: bold;
      }
    }
    .business-3{
      padding: 50px;
      color:#fff;
      background: #eee;
      .box{
        width: 300px;
        height: 100px;
        padding: 80px 50px 160px 50px;
        background: #293646;
        margin-left: 50px;
        margin-bottom: 50px;
        margin-top: 50px;
      }
      h2{
        font-size: 20px;
      }
      p{
        letter-spacing: 1px;
        line-height: 22px;
        padding-bottom: 20px;
        margin-top: 10px;
      }
      a{
        background: #02B2B5;
        border: 0;
        color:#fff;
        padding: 8px 20px;
        border-radius: 2px;
        font-weight: bold;
      }
    }
  }
}

</style>
