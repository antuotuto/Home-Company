<template>
  <div class="meeting1">
    <div class="one">
      <h1 class=" animated  fadeInDown delay_100">销售员岗前培训会议</h1>
      <h3 class=" animated  fadeInDown delay_200">主讲人 : 王其龙</h3>
      <router-link to="/meetingOne">
        <button type="button" name="button">下一页</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'meeting1',
  data () {
    return {

    }
  },
  computed:{

  },
  created() {
    this.changeimg_big = this.$store.state.an;
  }
}
</script>

<style scoped lang="scss">
@media screen and (max-width:940px){
  .meeting1{
    height:100%;
    width:100%;
    .one{
      height:100%;
      width:100%;
      text-align: center;
      background: #222831;
      padding-top: 35vh;
      color:#F7F7F7;
      position: relative;
      h1{
        margin: 0;
        font-size: 25px;
        letter-spacing: 2px;
        background: #2E4750;
        padding: 50px;
      }
      h3{
        letter-spacing: 2px;
        font-size: 17px;
        padding-top: 10px;
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
  .meeting1{
    height:100%;
    width:100%;
    .one{
      height:100%;
      width:100%;
      text-align: center;
      background: #222831;
      padding-top: 35vh;
      color:#F7F7F7;
      position: relative;
      h1{
        margin: 0;
        font-size: 80px;
        letter-spacing: 10px;
        background: #2E4750;
        padding: 60px;
      }
      h3{
        letter-spacing: 2px;
        padding-top: 20px;
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
