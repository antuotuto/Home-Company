<template>
  <div class="hello">
    <button type="button" name="button" class="btn" @click="toggleView">
        <span class="glyphicon " :class="{'glyphicon-th':currentView == 'view-main','glyphicon-remove':currentView != 'view-main'}"></span>
    </button>

    <div class="content-link">
      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>

    <div class="listStay " :class="listStayActive">
      <div class="listStayOn " >
        <div class="img-box">
          <router-link to="/">
            <h2 @click="linker">王安安的主页{{yaos}}</h2>
          </router-link>
        </div>
        <ul>
          <li v-for="(nav,index) in listStays" :key="nav.title" @click="linker">
            <router-link :to="nav.router">
              <span class="glyphicon" :class="nav.icon"></span>
              <p>{{ nav.title }}</p>
            </router-link>
          </li>
        </ul>

      </div>
    </div>

    <div class="blank" :class="showBlank" @click="closeBlank"></div>
  </div>
</template>

<script>
import {listStays} from '@/data'


export default {
  name: 'hello',
  data () {
    return {
      currentView: 'view-main',
      listStays: listStays,
      listStayActive: '',
      showBlank: '',
      yaos:this.an
    }
  },
  methods:{
    toggleView: function (){
      if (this.currentView == 'view-main') {
        this.currentView = 'view-up';
        this.showBlank = 'active';
        this.listStayActive = 'active';
      } else {
        this.currentView = 'view-main';
        this.showBlank = '';
        this.listStayActive = '';
      }
    },
    closeBlank: function() {
      this.showBlank = '';
      this.currentView = 'view-main';
      this.listStayActive = '';
    },
    linker: function (){
      this.currentView = 'view-main';
      this.showBlank = '';
      this.listStayActive = '';
    }
  },
  props:["an"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$fristColor: rgba(48, 56, 65,.96);
@media screen and (max-width:750px){
  .hello{
    height:100%;
    width:100%;
    position: relative;
    .content-link{
      position: absolute;
      top:0;
      left:0;
      height:100%;
      width:100%;
      overflow: scroll;
    }
    .btn {
      position: fixed;
      top: 5px;
      right: 5px;
      width: 40px;
      height: 40px;
      line-height: 39px;
      padding: 0;
      border: 0;
      background: rgba(0, 0, 0, 0.7);
      // border-radius: 3px;
      outline: none;
      font-weight: bold;
      font-size: 17px;
      z-index: 1000;
      color: #fff;
      span {
          line-height: 39px;
      }
    }
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity 0.3s;
    }
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }
    .listStay {
        height: 100%;
        width: 100%;
        position: fixed;
        top:0;
        left:0;
        z-index: 100;
        transition: 0.4s;
        transform: translate(0, -100%);
        .router-link-active{
          background: #000;
        }
        .listStayOn {
          height: 100%;
          width: 100%;
          background : $fristColor;
          color: #fff;
          padding: 50px;
          box-sizing: border-box;
          h2{
            text-align: left;
            padding-left: 10px;
            color:#fff;
          }
          ul {
              padding-left: 10px ;
              padding-top: 50px;
              width:100%;
              margin: 0 auto;
              box-sizing: border-box;
              li {
                  height: 50px;
                  display: block;
                  line-height: 50px;
                  font-size: 16px;
                  animation: listTwo 0.3s;
                  color: #fff;
                  user-select: none;
                  border-left: 0;
                  transition: 0.6s;
                  a {
                      color: #fff;
                      text-decoration: none;
                      height: 100%;
                      width: 100%;
                      display: inline-block;
                      position: relative;
                      text-align: center;
                      span {
                          height: 50px;
                          width: 50px;
                          line-height: 50px;
                          position: absolute;
                          top: 0;
                          left: 0;
                      }
                  }
                  &:hover {
                      background: #24c17e;
                  }
              }
          }
      }
      &.active{
        transform: translate(0, 0);
      }
    }
  }
}

@media screen and (min-width:950px){
  .hello{
    height:100%;
    width:100%;
    position: relative;
    $fristColor: #303841;
    .content-link{
      position: absolute;
      top:0;
      left:0;
      height:100%;
      width:100%;
    }
    .btn {
      position: fixed;
      top: 5px;
      right: 5px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      padding: 0;
      border: 0;
      background: rgba(0, 0, 0, 0.7);
      // border-radius: 3px;
      outline: none;
      font-weight: bold;
      font-size: 17px;
      z-index: 1000;
      color: #fff;
      span {
          line-height: 39px;
      }
    }
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity 0.3s;
    }
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }
    .listStay {
        height: 100%;
        width: 250px;
        position: fixed;
        top:0;
        left:0;
        z-index: 100;
        transition: 0.4s;
        transform: translate(-250px, 0);
        box-shadow: 3px 3px 3px rgba(0,0,0,.2);
        .router-link-active{
          background: #000;
        }
        .listStayOn {
          height: 100%;
          width: 100%;
          color: #fff;
          background : $fristColor;
          padding: 10px;
          box-sizing: border-box;
          h2{
            text-align: center;
            padding-left: 10px;
            color:#fff;
          }
          ul {
              padding:20px 0 0 0;
              width:100%;
              margin: 0 auto;
              box-sizing: border-box;
              li {
                  height: 50px;
                  display: block;
                  line-height: 50px;
                  font-size: 16px;
                  animation: listTwo 0.3s;
                  color: #fff;
                  user-select: none;
                  border-left: 0;
                  transition: 0.6s;
                  a {
                      color: #fff;
                      text-decoration: none;
                      height: 100%;
                      width: 100%;
                      display: inline-block;
                      position: relative;
                      text-align: center;
                      span {
                          height: 50px;
                          width: 50px;
                          line-height: 50px;
                          position: absolute;
                          top: 0;
                          left: 0;
                      }
                  }
                  &:hover {
                      background: #000;
                  }
              }
          }
      }
      &.active{
        transform: translate(0, 0);
      }
    }
    .blank {
      display: none;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, .5);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 90;
      overflow: hidden;
      &.active {
        display: block;
      }
    }
  }
}

</style>
