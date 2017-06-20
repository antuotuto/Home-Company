<template>
  <div class="talk">
    <header>
      <p>antuotuo</p>
    </header>
    <footer>
      <div class="meeting" v-for="(nav,index) in talks" :key="nav.title">
        <router-link :to="{ name: 'talking', params: { id: nav.id }}">
          <div class="meeting-img">

          </div>
          <div class="meeting-title">
            <p>{{nav.title}}</p>
          </div>
          <div class="meeting-date">
            <p>{{nav.date}}</p>
          </div>
          <div class="meeting-where">
            <p>{{nav.where}}</p>
          </div>
          <div class="meeting-button">
            <button type="button" name="button">查看会议</button>
          </div>
        </router-link>
      </div>
    </footer>

  </div>
</template>

<script>
import {talks} from '@/data'

export default {
  name: 'talk',
  data () {
    return {
      talks:talks
    }
  }
}
</script>

<style scoped lang="scss">
@media screen and (max-width:940px){
  .talk{
    height:100%;
    width:100%;
    position: relative;
    header{
      height:50px;
      width:100%;
      background: #3f51b5;
      position: fixed;
      top:0;
      left:0;
      z-index: 100;
      p{
        text-align: center;
        font-size: 15px;
        line-height: 50px;
        color:#fff;
      }
    }
    footer{
      padding: 15px;
      padding-top: 70px;
      height:100%;
      width:100%;
      background: #f5f5f5;
      .meeting{
        width:100%;
        background: #fff;
        box-shadow: 0 2px 6px rgba(0,0,0,.12);
        height:120px;
        margin-bottom: 15px;
        position: relative;
        p{
          margin: 0;
        }
        .meeting-img{
          width:120px;
          height:120px;
          background: #3f51b5;
          display: inline-block;
          float: left;
        }
        .meeting-title{
          font-size: 17px;
          padding: 10px 0 0 128px;
          font-weight: bold;
          color: #000;
        }
        .meeting-date{
          font-size: 13px;
          padding: 4px 0 0 128px;
          color:#777;
        }
        .meeting-where{
          font-size: 13px;
          padding: 2px 0 5px 128px;
          color:#777;
        }
        .meeting-button{
          width:80px;
          display: inline-block;
          font-size: 13px;
          color:#fff;
          text-align: center;
          position: absolute;
          right:10px;
          bottom: 10px;
          background: #3f51b5;
        }
      }
    }
  }
}

@media screen and (min-width:950px){
  .talk{
    height:100%;
    width:100%;
    position: relative;
    header{
      height:50px;
      width:100%;
      background: #3f51b5;
      position: fixed;
      top:0;
      left:0;
      z-index: 100;
      p{
        text-align: center;
        font-size: 15px;
        line-height: 50px;
        color:#fff;
      }
    }
    footer{
      padding: 15px;
      padding-top: 70px;
      height:100%;
      width:100%;
      background: #f5f5f5;
      .meeting{
        width:100%;
        background: #fff;
        box-shadow: 0 2px 6px rgba(0,0,0,.12);
        height:120px;
        margin-bottom: 15px;
        position: relative;
        p{
          margin: 0;
        }
        .meeting-img{
          width:120px;
          height:120px;
          background: #3f51b5;
          display: inline-block;
          float: left;
        }
        .meeting-title{
          font-size: 17px;
          padding: 10px 0 0 128px;
          font-weight: bold;
          color: #000;
        }
        .meeting-date{
          font-size: 13px;
          padding: 4px 0 0 128px;
          color:#777;
        }
        .meeting-where{
          font-size: 13px;
          padding: 2px 0 5px 128px;
          color:#777;
        }
        .meeting-button{
          width:80px;
          display: inline-block;
          font-size: 13px;
          color:#fff;
          text-align: center;
          position: absolute;
          right:10px;
          bottom: 10px;
          background: #3f51b5;
        }
      }
    }
  }
}


</style>
