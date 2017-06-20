<template>
  <div class="talking">
    <header>
      <div class="speak">
        <div class="speak-img">

        </div>
        <div class="speak-title">
          <p @click="login_name">{{talk.title}}</p>
        </div>
        <div class="speak-date">
          <p>{{talk.date}}</p>
        </div>
        <div class="speak-where">
          <p>{{talk.where}}</p>
        </div>
      </div>
    </header>

    <footer>
      <div class="" v-html="an"></div>
      <p class="speak">感谢关注</p>
    </footer>
  </div>
</template>

<script>
import {talks} from '@/data'
var marked = require('marked');
import '@/assets/css/github-markdown.css'



export default {
  name: 'talking',
  data () {
    return {
      talks:talks,
      talk:{},
      an:'1111'
    }
  },
  methods:{
    login_name: function(e) {
      this.$store.commit('setWeight', this.an);
      alert('修改信息成功,请到前台确认');
    },

  },
  created() {
    this.an = marked(this.talks[0].content)
    this.talk = talks[this.$route.params.id];
  }
}
</script>

<style scoped lang="scss">
.talking{
  font-weight: bold;
  text-align: center;
  height:100%;
  header{
    height:100%;
    p{
      margin: 0;
    }
    .speak-img{
      height:100vw;
      background: #3f51b5;
    }
    .speak-title{
      text-align: center;
      font-size: 22px;
      font-weight: bold;
      padding: 10px;
    }
    .speak-date{
      text-align: center;
      font-size: 15px;
      color:#777;
      padding:5px;
    }
    .speak-where{
      text-align: center;
      font-size: 14px;
      padding:5px;
      color:#777;
    }
  }
  footer{
    padding: 25px;
    .speak{
      text-align: center;
      font-size: 14px;
      padding:20px 5px 0 5px;
      margin: 0;
      color:#777;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
}
</style>
