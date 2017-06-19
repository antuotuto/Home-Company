<template>
  <div class="meetingOne2">

    <div class="five">
      <h1 class=" animated  fadeInLeft delay_100">产品知识点讲解</h1>
      <h3 class=" animated  fadeInLeft delay_200">小儿咳嗽糖浆</h3>
      <h4 class=" animated  fadeInLeft delay_300">进口原料、全国独家、中南大学湘雅医院、湖南中医附医、湖南省妇幼保健院常用药</h4>
      <h3 class=" animated  fadeInLeft delay_400">右旋布洛芬悬溶液</h3>
      <h4 class=" animated  fadeInLeft delay_500">全国独家品种、全国各大型医院常用药</h4>
      <h3 class=" animated  fadeInLeft delay_600">头孢克肟颗粒、头孢克肟悬液</h3>
      <h4 class=" animated  fadeInLeft delay_700">特点： 全国知名品牌、厂家（广州白云山）</h4>
      <router-link to="/meetingOne3">
        <button type="button" name="button">下一页</button>
      </router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: 'meetingOne2',
  data () {
    return {

    }
  },
  computed:{

  },
  created() {

  }
}
</script>

<style scoped lang="scss">
.meetingOne2{
  color:#000;
  height:100%;
  width:100%;
  .five{
    height:100%;
    width:100%;
    text-align: left;
    background: #222831;
    padding-top: 8vh;
    padding-left: 50px;
    position: relative;
    color:#F7F7F7;
    h1{
      margin: 0;
      font-size: 65px;
      letter-spacing: 5px;
      padding-bottom: 50px;
    }
    h3{
      letter-spacing: 2px;
      line-height: 65px;
      font-size: 30px;
      background: #2E4750;
      padding: 15px;
    }
    h4{
      padding-top:15px;
      font-size: 25px;
      padding-left: 60px;
    }
    button{
      height:70px;
      width:70px;
      background: #F6C90E;
      color:#2E4750;
      font-weight: bold;
      border: 0;
      position: absolute;
      bottom: 15px;
      right:15px;
      border-radius: 70px;
      letter-spacing: 3px;
    }
  }
}

</style>
