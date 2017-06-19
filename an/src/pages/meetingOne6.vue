<template>
  <div class="meetingOne2">

    <div class="five">
      <h1 class=" animated  fadeInLeft delay_100">产品知识点讲解【三】</h1>
      <h3 class=" animated  fadeInLeft delay_200">硝呋太尔胶囊（左通）</h3>
      <h4 class=" animated  fadeInLeft delay_300">适用于细菌性阴道病、滴虫性阴道炎、念球菌性外阴阴道病、泌尿系统感染、消化道阿米巴病及贾滴虫病</h4>
      <h3 class=" animated  fadeInLeft delay_400">硝呋太尔制霉素阴道软胶囊（伊朗）</h3>
      <h4 class=" animated  fadeInLeft delay_500">适用于细菌性阴道病、滴虫性阴道炎、念球菌性外阴阴道病、阴道混合感染</h4>
      <h3 class=" animated  fadeInLeft delay_600">红花逍遥胶囊（OTC）</h3>
      <h4 class=" animated  fadeInLeft delay_700">舒肝、理气、活血。用于肝气不舒所致的胸胁胀痛，头晕目眩，食欲减退，月经不调，乳房胀痛或伴见颜面黄褐斑</h4>
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
      padding-left: 30px;
      position: relative;
      color:#F7F7F7;
      h1{
        margin: 0;
        font-size: 25px;
        letter-spacing: 3px;
      }
      h3{
        letter-spacing: 2px;
        line-height: 18px;
        font-size: 17px;
        background: #2E4750;
        padding: 15px 0 15px 10px;
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
