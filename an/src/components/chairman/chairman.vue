<template>
  <div class="chairman">
    <div class="left">
        <ul>
          <li v-for="(nav,index) in chairmans" :key="nav.title">
            <router-link :to="nav.router">{{nav.title}}</router-link>
          </li>
        </ul>
    </div>

    <div class="right">
      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>


  </div>
</template>

<script>
import {chairmans} from '@/data'

export default {
  name: 'chairman',
  data () {
    return {
      chairmans : chairmans,
      id:''
    }
  },
  created() {
    // this.id = '/chairman' + goodthings[0].id
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@media screen and (max-width:940px){
  .chairman{
    height:100%;
    width:100%;
    background: #303841;
    position: relative;
    color:#fff;
    overflow: scroll;
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity 0.3s;
    }
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }
    .left{
      position: fixed;
      z-index: 1;
      top:0;
      left:0;
      width:100%;
      ul{
        margin: 0;
        padding: 0;
        width:100%;
        padding: 0 0 5px 5px;
        height:45px;
        li{
          list-style: none;
          height:45px;
          width:80px;
          background: #445460;
          line-height: 45px;
          text-align: center;
          font-size: 12px;
          text-align: center;
          font-weight: bold;
          float: left;
          margin: 5px 5px 5px 0;
          border-radius: 2px;
          overflow: hidden;
          .router-link-active{
            background: #F6C90E;
          }
          a{
            height:100%;
            width:100%;
            display: inline-block;
            color:#000;
            text-decoration: none;
          }
        }
      }
    }
    .right{
      height:100%;
      width:100%;
      position: absolute;
      padding-left: 5px;
      padding-top: 10px;
      padding-right: 5px;
      top:0;
      left:0;

    }
  }
}

@media screen and (min-width:950px){
  .chairman{
    height:100%;
    width:100%;
    background: #eee;
    overflow: scroll;
  }
}

</style>
