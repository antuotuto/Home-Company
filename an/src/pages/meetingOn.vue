<template>
  <div class="meeting1">
    <div class="one">
      <h1 class=" animated  fadeInDown delay_100">品牌铸就我们成功</h1>
      <router-link to="/press">
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
      background: #303841;
      padding-top: 40vh;
      color:#F7F7F7;
      position: relative;
      h1{
        margin: 0;
        font-size: 25px;
        letter-spacing: 5px;
        background: #2E4750;
        font-weight: 600;
        padding: 50px;
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
      background: #303841;
      padding-top: 40vh;
      color:#F7F7F7;
      position: relative;
      h1{
        margin: 0;
        font-size: 80px;
        letter-spacing: 10px;
        background: #2E4750;
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
