<template>
  <div class="welcomeMan">
    <div class="third-paper">
      <div class="box-third third-one animated  fadeInLeft delay_100">
        <!-- <img src="" alt=""> -->
      </div>
      <div class="box-third third-two animated  fadeInLeft delay_100">
        <div class="content">
          <p class="name animated  fadeInLeft delay_200">antuotuo</p>
          <p class="title animated  fadeInLeft delay_200">我对人生的思考</p>
          <p class="time animated  fadeInLeft delay_200">06.06.2017</p>
          <p class="article animated  fadeInLeft delay_300">这个世界上本就没有必须存在的事实 去发现真正属于你的事实 不是其他人对你人生的思考 用自己的理解去编织属于你自己的全新世界 赠予那些此时此刻稳步前进的筑梦者</p>
          <p class="button-fond animated  fadeInLeft delay_300">王安安</p>
        </div>
      </div>
      <div class="box-third third-three animated  fadeInLeft delay_200">
        <div class="content">
          <p class="name animated  fadeInLeft delay_200">antuotuo</p>
          <p class="title animated  fadeInLeft delay_300">我一直向前的理由</p>
          <p class="time animated  fadeInLeft delay_200">06.06.2017</p>
          <p class="article animated  fadeInLeft delay_300">技术之所以不断更新迭代 是因为总有一些人想弄些黑科技出来</p>
          <p class="button-fond animated  fadeInLeft delay_200">王安安</p>
        </div>
      </div>
      <div class="box-third third-four animated  fadeInLeft delay_200">
        <!-- <img src="" alt=""> -->
      </div>
    </div>

    <div class="fourth-paper">
      <div class="four-box-left">
        <!-- <img src="" alt=""> -->
      </div>
      <div class="four-box-right">
        <div class="content">
          <p class="name">antuotuo</p>
          <p class="title">网站的版权问题</p>
          <p class="article">本网站代码全部公开在非商用的情况下可以随意使用网站的logo元素或者代码</p>
          <p class="button-fond">READ</p>
        </div>
        <div class="content hidden-xs">
          <p class="name">antuotuo</p>
          <p class="title">网站的版权问题</p>
          <p class="article">本网站代码全部公开在非商用的情况下可以随意使用网站的logo元素或者代码</p>
          <p class="button-fond">READ</p>
        </div>
        <div class="content hidden-xs">
          <p class="name">antuotuo</p>
          <p class="title">网站的版权问题</p>
          <p class="article">本网站代码全部公开在非商用的情况下可以随意使用网站的logo元素或者代码</p>
          <p class="button-fond">READ</p>
        </div>
      </div>
    </div>

    <div class="second-paper">
        <p class="top-message">您可以在任意设备上查看我的个人网站  包括 PC端 Iphone and Android </p>
        <p class="top-message-explain">您可以在任意设备上查看我的个人网站  包括 Iphone and Android 您可以在任意设备上查看我的个人网站  包括 Iphone and Android 您可以在任意设备上查看我的个人网站  包括 Iphone and Android</p>
        <div class="phone">
          <div class="android">
            <i class="icon iconfont icon-android"></i>
            <p>Android</p>
          </div>
          <div class="iphone">
            <i class="icon iconfont icon-mac"></i>
            <p>Iphone</p>
          </div>
        </div>
        <div class="apple">
          <div class="close-button close1">

          </div>
          <div class="close-button close2">

          </div>
          <div class="close-button close3">

          </div>
          <div class="close-button close4">

          </div>
          <div class="apple-paper">
            <div class="camera"></div>
            <div class="receiver"></div>
            <div class="screen">

            </div>
          </div>
        </div>
    </div>

    <div class="frist-paper">
      <div class="apple">
        <div class="screen"></div>
        <div class="apple-home"></div>
      </div>
      <h1>That's All</h1>
      <div class="system">
        <div class="system-box">
          <p class="free">Home</p>
          <p class="price">主题页</p>
          <p class="some-explain">我祝愿大家能实现梦想</p>
          <p class="some-explain">让和我一样的学者不断提升</p>
          <p class="some-explain">每天我都会发布新的文章和理解</p>
          <router-link to="/talk">进入页面</router-link>
        </div>
        <div class="system-box ">
          <p class="free">Computer</p>
          <p class="price">电子产品</p>
          <p class="some-explain">我最喜欢的电子产品</p>
          <p class="some-explain">我推荐大家买的电子产品</p>
          <p class="some-explain">我即将选购并且使用的电子产品</p>
          <router-link to="/welcomeMan">进入页面</router-link>
        </div>
        <div class="system-box ">
          <p class="free">Herself</p>
          <p class="price">见解页</p>
          <p class="some-explain">发布自己的看法</p>
          <p class="some-explain">评论王安安的见解</p>
          <p class="some-explain">使用你自己最美的照片</p>
          <router-link to="/goodthing">进入页面</router-link>
        </div>
      </div>
    </div>

    <div class="end-paper">
      <p class="hot">Hot an an</p>
      <p class="mind">FORGET ME NOT</p>
      <router-link to="/goodthing">
        <button type="button" name="button">进入首页</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'welcomeMan',
  data () {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
@media screen and (max-width:940px){
  .welcomeMan{
    height:100%;
    width:100%;
    overflow: scroll;
    font-weight: bold;
    position: relative;
    .frist-paper{
      height:200%;
      width:100%;
      overflow: hidden;
      background: #03a67b;
      position: relative;
      .apple{
        height: 170px;
        width: 250px;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        top:0;
        border: 2px solid #fff;
        border-top: 0;
        border-radius: 0 0 32px 32px;
        background: #03a67b;
        .screen{
          width:90%;
          height:65%;
          border-left: 2px solid #fff;
          border-right: 2px solid #fff;
          border-bottom: 2px solid #fff;
          margin: 0 auto;
          position: absolute;
          left:0;
          right:0;
          top:0;
        }
        .apple-home{
          height: 40px;
          width: 40px;
          border-radius: 50px;
          margin: 0 auto;
          border: 2px solid #fff;
          position: absolute;
          left:0;
          right:0;
          bottom:8px;
        }
      }
      h1{
        margin:0;
        padding-top:250px;
        text-align:center;
        color:#fff;
      }
      .system{
        margin:40px auto;
        margin-bottom: 0;
        width:270px;
        .system-box:last-child{
          margin: 0;
          margin-top: 20px;
        }
        .system-box{
          height:300px;
          width:270px;
          background:#fff;
          border-radius:5px;
          float: left;
          margin-top: 20px;
          .free{
            text-align: center;
            margin-top: 30px;
          }
          .price{
            font-size: 30px;
            color:#000;
            text-align: center;
          }
          .some-explain{
            text-align: center;
            color:#999999;
          }
          a{
            display: block;
            margin:  0 auto;
            width: 190px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 5px;
            border: 1px solid #03a67b;
            background: #fff;
            letter-spacing: 2px;
            color: #03a67b;
            transition: .6s;
            font-size: 15px;
            text-decoration: none;
            &:hover{
              background: #03a67b;
              color:#fff;
            }
          }
        }
      }
    }
    .second-paper{
      background: #fff;
      overflow: hidden;
      height:100%;
      width:100%;
      position: relative;
      box-sizing: border-box;
      .top-message{
        text-align: center;
        color:#333333;
        margin: 0 auto;
        font-size: 25px;
        width:300px;
      }
      .top-message-explain{
        text-align: center;
        width:300px;
        margin: 35px auto;
        color:#a3a3a3;
      }
      .phone{
        margin: 0px auto;
        height:50px;
        width:290px;
        position: relative;
        .android{
          width:130px;
          height:50px;
          background: #03a67b;
          border-radius: 5px;
          display: inline-block;
          margin-right: 20px;
          position: relative;
          padding: 2px 2px 2px 5px;
          i{
            font-size: 32px;
            color:#fff;
          }
          p{
            font-size: 20px;
            position: absolute;
            top: 13px;
            left: 42px;
            color: #fff;
          }
        }
        .iphone{
          width:130px;
          display: inline-block;
          height:50px;
          background: #03a67b;
          border-radius: 5px;
          padding: 2px 2px 2px 5px;
          position: relative;
          i{
            color:#fff;
            font-size: 32px;
          }
          p{
            font-size: 20px;
            position: absolute;
            top: 13px;
            left: 42px;
            color: #fff;
            margin-left: 8px;
          }
        }
      }
      .apple{
        height:300px;
        width:250px;
        margin: auto;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        border: 2px solid #03a67b;
        border-bottom: 0;
        border-radius: 32px 32px 0 0;
        .close-button{
          height:43px;
          width:8px;
          border-radius: 2px;
          background: #03a67b;
        }
        .close1{
          position: absolute;
          top:120px;
          right:-5px;
        }
        .close2{
          position: absolute;
          top:62px;
          left:-5px;
          height:35px;
        }
        .close3{
          position: absolute;
          top:113px;
          left:-5px;
        }
        .close4{
          position: absolute;
          top:171px;
          left:-5px;
        }
        .apple-paper{
          height:100%;
          width: 100%;
          background: #fff;
          position: absolute;
          top:0;
          left:0;
          border-radius: 32px 32px 0 0;
          .camera{
            height:8px;
            width:8px;
            background: #03a67b;
            border-radius: 8px;
            position: absolute;
            left:80px;
            top:30px;
          }
          .receiver{
            height:8px;
            width:50px;
            background: #03a67b;
            border-radius: 8px;
            position: absolute;
            left:100px;
            top:30px;
          }
          .screen{
            width:90%;
            height:80%;
            border-left: 2px solid #03a67b;
            border-right: 2px solid #03a67b;
            border-top: 2px solid #03a67b;
            margin: 0 auto;
            position: absolute;
            left:0;
            right:0;
            bottom: 0;
          }
        }
      }
    }
    .third-paper{
      height:200%;
      overflow: hidden;
      position: relative;
      width:100%;
      background: #fff;
      .box-third{
        height:25%;
        width:100%;
        float: left;
        text-align: center;
      }
      .third-one{
        background-color: #03a67b;
        background-size: 100% 100%;
      }
      .third-four{
        background-color: #03a67b;
        background-size: 100% 100%;
      }
      .third-three{
        position: absolute;
        bottom: 0;
      }
      .third-two,
      .third-three{
        height:25%;
        width:100%;
        .content{
          width:300px;
          height:200px;
          margin: 15% auto;
          .name{
            color: #03a67b;
            letter-spacing: 2px;
          }
          .title{
            font-size: 25px;
          }
          .time{
            color:#adadad;
            letter-spacing: 2px;
          }
          .article{
            color:#adadad;
            font-size: 14px;
            letter-spacing: 1px;
          }
          .button-fond{
            color: #03a67b;
            letter-spacing: 2px;
            border-bottom: 2px solid #03a67b;
            width:52px;
            text-align: center;
            margin: 0 auto;
          }
        }
      }
    }
    .end-paper{
      background: #ebebeb;
      height:300px;
      width:100%;
      .hot{
        text-align: center;
        font-size: 14px;
        padding-top: 60px;
      }
      .mind{
        text-align: center;
        font-size: 40px;
      }
      button{
        display: block;
        margin:  0 auto;
        border-radius: 5px;
        border: 1px solid #03a67b;
        background: #03a67b;
        padding: 10px 70px;
        letter-spacing: 2px;
        color: #fff;
        transition: .6s;
        font-size: 15px;
        &:hover{
          background: #fff;
          color:#03a67b;
        }
      }
    }
    .fourth-paper{
      overflow: hidden;
      height:100%;
      width:100%;
      background: #fff;
      .four-box-left{
        width:100%;
        height:50%;
        float: left;
        background: #03a67b;
      }
      .four-box-right{
        width:100%;
        height:50%;
        float: left;
        text-align: center;
        .content{
          width:300px;
          height:200px;
          margin: 5% auto;
          border-bottom: 1px solid #03a67b;
          .name{
            padding-top: 10%;
            color: #adadad;
            letter-spacing: 2px;
          }
          .title{
            font-size: 25px;
          }
          .article{
            color:#adadad;
            font-size: 14px;
            letter-spacing: 1px;
          }
          .button-fond{
            color: #03a67b;
            letter-spacing: 2px;
            margin: 0 auto;
            width:74px;
          }
        }
      }
    }
  }
}
@media screen and (min-width:950px){
  .welcomeMan{
    height:100%;
    width:100%;
    overflow: scroll;
    font-weight: bold;
    position: relative;
    .frist-paper{
      height:100%;
      width:100%;
      background: #03a67b;
      position: relative;
      .apple{
        height: 170px;
        width: 250px;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        top:0;
        border: 2px solid #fff;
        border-top: 0;
        border-radius: 0 0 32px 32px;
        background: #03a67b;
        .screen{
          width:90%;
          height:65%;
          border-left: 2px solid #fff;
          border-right: 2px solid #fff;
          border-bottom: 2px solid #fff;
          margin: 0 auto;
          position: absolute;
          left:0;
          right:0;
          top:0;
        }
        .apple-home{
          height: 40px;
          width: 40px;
          border-radius: 50px;
          margin: 0 auto;
          border: 2px solid #fff;
          position: absolute;
          left:0;
          right:0;
          bottom:8px;
        }
      }
      h1{
        margin:0;
        padding-top:250px;
        text-align:center;
        color:#fff;
      }
      .system{
        margin:100px auto;
        margin-bottom: 0;
        width:1150px;
        height:350px;
        .system-box:last-child{
          margin: 0;
        }
        .system-box{
          height:350px;
          width:330px;
          background:#fff;
          border-radius:5px;
          margin-right: 50px;
          float: left;
          .free{
            text-align: center;
            margin-top: 30px;
          }
          .price{
            font-size: 30px;
            color:#000;
            text-align: center;
          }
          .some-explain{
            text-align: center;
            color:#999999;
          }
          a{
            display: block;
            margin:  0 auto;
            width: 190px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 5px;
            border: 1px solid #03a67b;
            background: #fff;
            letter-spacing: 2px;
            color: #03a67b;
            transition: .6s;
            font-size: 15px;
            &:hover{
              background: #03a67b;
              color:#fff;
            }
          }
        }
      }
    }
    .second-paper{
      background: #eee;
      height:100%;
      width:100%;
      position: relative;
      box-sizing: border-box;
      .top-message{
        text-align: center;
        color:#333333;
        padding-top: 150px;
        font-size: 25px;
      }
      .top-message-explain{
        text-align: center;
        width:650px;
        margin: 0 auto;
        color:#a3a3a3;
      }
      .phone{
        margin: 40px auto;
        height:60px;
        width:425px;
        position: relative;
        .android{
          width:200px;
          height:60px;
          background: #03a67b;
          border-radius: 5px;
          display: inline-block;
          margin-right: 20px;
          position: relative;
          padding: 2px 2px 2px 30px;
          i{
            font-size: 40px;
          }
          p{
            font-size: 20px;
            position: absolute;
            top: 17px;
            left: 80px;
            letter-spacing: 1px;
            color: #fff;
          }
        }
        .iphone{
          width:200px;
          display: inline-block;
          height:60px;
          background: #03a67b;
          border-radius: 5px;
          padding: 2px 2px 2px 30px;
          position: relative;
          i{
            font-size: 40px;
          }
          p{
            font-size: 20px;
            position: absolute;
            top: 17px;
            left: 80px;
            letter-spacing: 1px;
            color: #fff;
            margin-left: 8px;
          }
        }
      }
      .apple{
        height:300px;
        width:250px;
        margin: auto;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        border: 2px solid #03a67b;
        border-bottom: 0;
        border-radius: 32px 32px 0 0;
        .close-button{
          height:43px;
          width:8px;
          border-radius: 2px;
          background: #03a67b;
        }
        .close1{
          position: absolute;
          top:120px;
          right:-5px;
        }
        .close2{
          position: absolute;
          top:62px;
          left:-5px;
          height:35px;
        }
        .close3{
          position: absolute;
          top:113px;
          left:-5px;
        }
        .close4{
          position: absolute;
          top:171px;
          left:-5px;
        }
        .apple-paper{
          height:100%;
          width: 100%;
          background: #fff;
          position: absolute;
          top:0;
          left:0;
          border-radius: 32px 32px 0 0;
          .camera{
            height:8px;
            width:8px;
            background: #03a67b;
            border-radius: 8px;
            position: absolute;
            left:80px;
            top:30px;
          }
          .receiver{
            height:8px;
            width:50px;
            background: #03a67b;
            border-radius: 8px;
            position: absolute;
            left:100px;
            top:30px;
          }
          .screen{
            width:90%;
            height:80%;
            border-left: 2px solid #03a67b;
            border-right: 2px solid #03a67b;
            border-top: 2px solid #03a67b;
            // background: #03a67b;
            margin: 0 auto;
            position: absolute;
            left:0;
            right:0;
            bottom: 0;
          }
        }
      }
    }
    .third-paper{
      height:100%;
      width:100%;
      background: #fff;
      .box-third{
        height:50%;
        width:50%;
        float: left;
        position: relative;
      }
      .third-one,
      .third-four{
        background: #03a67b;
      }
      .third-two,
      .third-three{
        height:50%;
        width:50%;
        .content{
          width:400px;
          height:200px;
          margin: 15% auto;
          .name{
            color: #03a67b;
            letter-spacing: 2px;
          }
          .title{
            font-size: 25px;
          }
          .time{
            color:#adadad;
            letter-spacing: 2px;
          }
          .article{
            color:#adadad;
            font-size: 14px;
            letter-spacing: 1px;
            width:400px;
          }
          .button-fond{
            color: #03a67b;
            letter-spacing: 2px;
            border-bottom: 2px solid #03a67b;
            width:50px;
            text-align: center;
          }
        }
      }
    }
    .end-paper{
      background: #ebebeb;
      height:300px;
      width:100%;
      .hot{
        text-align: center;
        font-size: 14px;
        padding-top: 60px;
      }
      .mind{
        text-align: center;
        font-size: 40px;
      }
      button{
        display: block;
        margin:  0 auto;
        border-radius: 5px;
        border: 1px solid #03a67b;
        background: #03a67b;
        padding: 10px 70px;
        letter-spacing: 2px;
        color: #fff;
        transition: .6s;
        font-size: 15px;
        &:hover{
          background: #03a67b;
          color:#fff;
        }
      }
    }
    .fourth-paper{
      height:100%;
      width:100%;
      background: #fff;
      .four-box-left{
        width:50%;
        height:100%;
        float: left;
        background: #03a67b;
      }
      .four-box-right{
        width:50%;
        height:100%;
        float: left;
        .content{
          width:400px;
          height:200px;
          margin: 5% auto;
          .name{
            padding-top: 10%;
            color: #adadad;
            letter-spacing: 2px;
          }
          .title{
            font-size: 25px;
          }
          .article{
            color:#adadad;
            font-size: 14px;
            letter-spacing: 1px;
            width:400px;
          }
          .button-fond{
            color: #03a67b;
            letter-spacing: 2px;
            width:74px;
          }
        }
      }
    }
  }
}



</style>
