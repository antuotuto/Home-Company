<template>
  <div class="chairman0">
    <div class="monthly">
      <router-link to="/meetingOn">
        <p class="meeting-text">销售员岗前培训会议</p>
        <p class="meeting-person">王其龙</p>
      </router-link>
    </div>

  </div>
</template>

<script>


export default {
  name: 'chairman0',
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
.chairman0{
  padding-top: 45px;
  .monthly{
    height:100px;
    background: #F6C90E;
    margin-bottom: 5px;
    border-radius: 3px;
    position: relative;
    .meeting-text{
      text-align: center;
      line-height: 95px;
      margin: 0;
      letter-spacing: 1px;
      font-size: 22px;
      color:#303841;
    }
    .meeting-person{
      margin: 0;
      letter-spacing: 1px;
      font-size: 12px;
      color:#303841;
      position: absolute;
      bottom: 8px;
      right:8px;
    }
  }
}

</style>
