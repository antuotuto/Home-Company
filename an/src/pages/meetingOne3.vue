<template>
  <div class="meetingOne3">
    <div class="six">
      <h1 class=" animated  fadeInDown delay_300">谢谢参与</h1>
      <router-link to="/meetingOn">
        <button type="button" name="button">主页</button>
      </router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: 'meetingOne3',
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
  .meetingOne3{
    color:#000;
    height:100%;
    width:100%;
    .six{
      height:100%;
      width:100%;
      text-align: center;
      background: #222831;
      padding-top: 40vh;
      position: relative;
      color:#F7F7F7;
      h1{
        margin: 0;
        font-size: 25px;
        letter-spacing: 5px;
        background: #2E4750;
        font-weight: 600;
        padding: 60px;
        background: #F6C90E;
        color:#303841;
        text-align: center;
      }
      h3{
        letter-spacing: 2px;
        padding-top: 20px;
      }
      button{
        height:70px;
        width:70px;
        border-radius: 70px;
        letter-spacing: 3px;
        background: #F6C90E;
        color:#2E4750;
        font-weight: bold;
        border: 0;
        position: absolute;
        bottom: 15px;
        right:15px;
      }
    }
  }
}

@media screen and (min-width:950px){
  .meetingOne3{
    color:#000;
    height:100%;
    width:100%;
    .six{
      height:100%;
      width:100%;
      text-align: center;
      background: #222831;
      padding-top: 40vh;
      position: relative;
      color:#F7F7F7;
      h1{
        margin: 0;
        font-size: 80px;
        letter-spacing: 20px;
        background: #F6C90E;
        color:#303841;
        text-align: center;
        padding: 50px;
      }
      h3{
        letter-spacing: 2px;
        padding-top: 20px;
      }
      button{
        height:70px;
        width:70px;
        border-radius: 70px;
        letter-spacing: 3px;
        background: #F6C90E;
        color:#2E4750;
        font-weight: bold;
        border: 0;
        position: absolute;
        bottom: 15px;
        right:15px;
      }
    }
  }
}


</style>
