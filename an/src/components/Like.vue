<template>
<div class="like">
  <div class="love-message">
    <div class="love-img  animated  fadeInLeft delay_100">
      <img :src="goodthing.img" alt="">
    </div>
    <div class="love-box-in">
      <p class="love-title  animated  fadeInLeft delay_200" @click="wantOtherTrue">{{goodthing.title}}</p>
      <p class="love-reason love-reason-title animated  fadeInLeft delay_300">{{goodthing.reason}}</p>
      <p class="love-reason animated  fadeInLeft delay_300">{{goodthing.content}}</p>
      <div class="modle-css" :class="{ active: wantOther }">
        <p>你将要离开王安安网页</p>
        <router-link :to="goodthing.router">
          <button type="button" name="button" class="onButton">确认</button>
        </router-link>
        <button type="button" name="button" @click="wantOther = false">取消</button>
      </div>
    </div>
  </div>
  <div class="get-back animated  fadeInLeft delay_600">
    <router-link to="/goodthing">
      <i class="icon iconfont icon-toleft"></i>
    </router-link>
  </div>
  <div class="bottom-color"></div>
</div>
</template>

<script>
import {goodthings} from '@/data'
import {comments} from '@/data'


export default {
  name: 'like',
  data() {
    return {
      goodthing: {},
      wantOther: false
    }
  },
  methods: {
    wantOtherTrue: function() {
      this.wantOther = true;
    }
  },
  created() {
    this.goodthing = goodthings[this.$route.params.id]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">@media screen and (max-width:940px) {
    .like {
        height: 100%;
        width: 100%;
        overflow: scroll;
        position: relative;
        box-sizing: border-box;
        padding-bottom: 50px;
        .bottom-color {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50px;
            background: #03a67b;
        }
        .love-message {
            .love-img {
                width: 100%;
            }
            .love-box-in {
                padding: 20px;
                .love-title {
                    margin: 0 auto;
                    padding: 5px;
                    width: 130px;
                    text-align: center;
                    margin-top: 20px;
                    border: 1px solid #000;
                }
                .love-reason {
                    padding: 0 30px;
                }
                .love-reason-title {
                    font-size: 17px;
                    font-weight: bold;
                    padding: 30px;
                }
                .modle-css {
                    transform: translate3d(0, -300px, 0);
                    transition: 0.3s;
                    opacity: 1;
                    border-radius: 3px;
                    box-sizing: border-box;
                    padding: 20px;
                    margin: 0 auto;
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    height: 120px;
                    width: 220px;
                    background: #03a67b;
                    &.active {
                        transform: translate3d(0, 300px, 0);
                        opacity: 1;
                    }
                    p {
                        font-size: 17px;
                        text-align: center;
                        color: #fff;
                    }
                    button {
                        height: 30px;
                        padding: 5px 8px;
                        background: #fff;
                        border: 0;
                        margin: 5px 22px;
                        border-radius: 3px;
                        color: #000;
                    }
                    .onButton {
                        background: #fff;
                    }
                }
            }
        }
        .get-back {
            height: 50px;
            width: 50px;
            border-radius: 50px;
            background: #03a67b;
            margin: 30px auto;
            text-align: center;
            box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
            i {
                line-height: 50px;
                color: white;
                font-size: 22px;
                font-weight: 500;
            }
        }
    }
}
@media screen and (min-width:950px) {
    .like {
        height: 100%;
        width: 700px;
        margin: 0 auto;
        position: relative;
        box-sizing: border-box;
        padding-bottom: 50px;
        border-left: 2px solid #03a67b;
        border-right: 2px solid #03a67b;
        border-top: 2px solid #03a67b;
        .bottom-color {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50px;
            background: #03a67b;
        }
        .love-message {
            width: 100%;
            .love-img {
                width: 100%;
                img {
                    width: 100%;
                }
            }
            .love-box-in {
                text-align: center;
                .love-title {
                    margin: 0 auto;
                    width: 130px;
                    padding: 5px;
                    text-align: center;
                    margin-top: 20px;
                    transition: 0.4s;
                    border: 1px solid #000;
                    cursor: pointer;
                    &:hover {
                        background: #03a67b;
                        color: #fff;
                        border: 1px solid #03a67b;
                        font-weight: bold;
                    }
                }
                .love-reason {
                    padding: 30px;
                }
                .love-reason-title {
                    font-size: 17px;
                    font-weight: bold;
                    padding: 30px;
                }
                .modle-css {
                    transform: translate3d(0, -300px, 0);
                    transition: 0.3s;
                    opacity: 1;
                    border-radius: 3px;
                    box-sizing: border-box;
                    padding: 20px;
                    margin: 0 auto;
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    height: 120px;
                    width: 220px;
                    background: #03a67b;
                    &.active {
                        transform: translate3d(0, 300px, 0);
                        opacity: 1;
                    }
                    p {
                        font-size: 17px;
                        text-align: center;
                        color: #fff;
                    }
                    button {
                        height: 30px;
                        padding: 5px 8px;
                        background: #fff;
                        border: 0;
                        margin: 5px 22px;
                        border-radius: 3px;
                        color: #000;
                    }
                    .onButton {
                        background: #fff;
                    }
                }
                .personal-information {
                    h4 {
                        color: #9e9e9e;
                        text-align: center;
                        margin: 20px;
                        font-size: 15px;
                    }
                }
            }
        }
        .get-back {
            height: 50px;
            width: 50px;
            border-radius: 50px;
            background: #03a67b;
            margin: 30px auto;
            text-align: center;
            transition: 0.4s;
            box-shadow: 0 4px 4px 0 rgba(0,0,0,.2);
            i {
                line-height: 50px;
                color: white;
                font-size: 22px;
                font-weight: 500;
            }
            &:hover {
                box-shadow: 0 10px 10px 0 rgba(0,0,0,.19), 0 6px 3px 0 rgba(0,0,0,.23);
            }
        }
    }
}
</style>
