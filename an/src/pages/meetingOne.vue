<template>
  <div class="meetingOne">
    <div class="two">
      <h1 class=" animated  fadeInLeft delay_400">形象篇</h1>
      <h3 class=" animated  fadeInLeft delay_300">干净、整洁</h3>
      <h3 class=" animated  fadeInLeft delay_200">待人热情、大方、谈吐得体</h3>
      <h4 class=" animated  fadeInLeft delay_100">如： 初次见面，先整理好衣着，然后微笑着握手言好：您好，请问哪位是医院 （或诊所）的老板？</h4>
      <router-link to="/meetingOne4">
        <button type="button" name="button">下一页</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'meetingOne',
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
  .meetingOne{
    color:#000;
    height:100%;
    width:100%;
    .two{
      height:100%;
      width:100%;
      text-align: left;
      background: #222831;
      padding-left: 50px;
      padding-top: 50px;
      position: relative;
      color:#F7F7F7;
      h1{
        margin: 0;
        font-size: 20px;
        letter-spacing: 5px;
        line-height: 25px;
        background: #F6C90E;
        color:#303841;
        width:100px;
        text-align: center;
        padding: 30px;
      }
      h3{
        letter-spacing: 2px;
        padding-top: 20px;
        font-size: 22px;
      }
      h4{
        font-size: 21px;
        line-height: 30px;
        background: #2E4750;
        margin-top: 40px;
        padding: 50px;
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
  .meetingOne{
  color:#000;
  height:100%;
  width:100%;
  .two{
    height:100%;
    width:100%;
    text-align: left;
    background: #222831;
    padding-left: 50px;
    padding-top: 10vh;
    position: relative;
    color:#F7F7F7;
    h1{
      margin: 0;
      font-size: 65px;
      letter-spacing: 5px;
      background: #F6C90E;
      color:#303841;
      width:400px;
      text-align: center;
      padding: 30px;
    }
    h3{
      letter-spacing: 2px;
      padding-top: 50px;
      font-size: 40px;
      padding-left: 50px;
    }
    h4{
      font-size: 32px;
      line-height: 150px;
      background: #2E4750;
      padding-left: 50px;
      margin-top: 80px;
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
