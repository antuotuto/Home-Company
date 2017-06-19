<template>
  <div class="meetingOne1">

    <div class="four">
      <h1>职业操守、职业道德</h1>
      <h3>详细讲解我们所经营品种的疗效、特点、利润点等，如有相同品种不同厂家的，可讲解我们品种的优势所在，但要以“其它厂家”作为比较对象，切不可与对方厂家的业务员发生言语甚至肢体冲突。</h3>
      <router-link to="/meetingOne2">
        <button type="button" name="button">下一页</button>
      </router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: 'meetingOne1',
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
.meetingOne1{
  color:#000;
  height:100%;
  width:100%;
  .four{
    height:100%;
    width:100%;
    text-align: left;
    background: #303841;
    padding-left: 50px;
    padding-top: 10vh;
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
      font-size: 45px;
      background: #2E4750;
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

</style>
