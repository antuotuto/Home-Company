<template>
  <div class="meetingOne2">

    <div class="five">
      <h1 class=" animated  fadeInLeft delay_100">产品知识点讲解【二】</h1>
      <h3 class=" animated  fadeInLeft delay_200">羧甲司坦口服液</h3>
      <h4 class=" animated  fadeInLeft delay_300">全国仅二家生产 白云山生产 慢性支气管炎 哮喘引起的痰液粘稠 咳嗽困难</h4>
      <h3 class=" animated  fadeInLeft delay_400">头孢丙烯颗粒</h3>
      <h4 class=" animated  fadeInLeft delay_500">白云山生产 咽痛 扁桃体炎 肺炎链球菌 肺炎 上呼吸道感染 下呼吸道感染 皮肤和皮肤软组织</h4>
      <h3 class=" animated  fadeInLeft delay_600">阿司匹林克拉维酸钾颗粒</h3>
      <h4 class=" animated  fadeInLeft delay_700">白云山生产 上呼吸道感染 下呼吸道感染 尿路感染 中耳炎 皮肤软组织</h4>

      <router-link to="/meetingOne6">
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
@media screen and (max-width:940px){
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
        font-size: 25px;
        letter-spacing: 3px;
        padding-bottom: 15px;
      }
      h3{
        letter-spacing: 2px;
        line-height: 20px;
        font-size: 20px;
        background: #2E4750;
        padding: 15px;
      }
      h4{
        padding-top:15px;
        line-height: 25px;
        font-size: 18px;
        padding-right: 20px;
        padding-left: 15px;
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
}

@media screen and (min-width:950px){
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
}

</style>
