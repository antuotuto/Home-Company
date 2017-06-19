<template>
  <div class="meetingOne4">
    <div class="three">
      <h1>药品操作规范</h1>
      <h3>不鼓吹与经营产品不相关联的信息，更不能肆意扩大药品功效等</h3>
      <h4>所有工作人员必须持证上岗，试用期三个月，三个月满后办理转正、入职手续，转正后自行向公司申请办理工资卡及相关保险（养老保险、医疗保险及工商保险）</h4>
      <router-link to="/meetingOne1">
        <button type="button" name="button">下一页</button>
      </router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: 'meetingOne4',
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
.meetingOne4{
  color:#000;
  height:100%;
  width:100%;
  .three{
    height:100%;
    width:100%;
    text-align: center;
    background: #303841;
    padding-top: 10vh;
    position: relative;
    text-align: left;
    padding-left: 50px;
    color:#F7F7F7;
    border-top: 1px solid #eee;
    h1{
      margin: 0;
      font-size: 65px;
      letter-spacing: 5px;
      padding-bottom: 50px;
    }
    h3{
      letter-spacing: 2px;
      padding-top: 40px;
      font-size: 45px;
    }
    h4{
      font-size: 32px;
      line-height: 50px;
      padding-top: 50px;
      padding-bottom: 50px;
      background: #2E4750;
      padding-left: 50px;
      margin-top: 150px;
      padding-right: 50px;
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
