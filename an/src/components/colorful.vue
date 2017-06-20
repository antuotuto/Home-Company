<template>
  <div class="colorful">
    <header class="animated  bounceInDown delay_0">
      <p>公司的主要配色</p>
    </header>
    <footer>
      <div class="color-box animated  bounceInLeft delay_0">
        <div class="color-size" v-for="(nav,index) in colorfuls" :key="nav.title" >
          <div class="color-four">
              <div class="color-frist"  :style="'background-color:'+nav.colorone+';'">
                <p>{{nav.colorone}}</p>
              </div>
              <div class="color-second" :style="'background-color:'+nav.colortwo+';'">
                <p>{{nav.colortwo}}</p>
              </div>
              <div class="color-third" :style="'background-color:'+nav.colorthree+';'">
                <p>{{nav.colorthree}}</p>
              </div>
              <div class="color-fourth" :style="'background-color:'+nav.colorfour+';'">
                <p>{{nav.colorfour}}</p>
              </div>
          </div>
          <div class="love-color">
            <i class="icon iconfont icon-woguanzhudepinpai"></i>
            <p>8</p>
          </div>
          <p class="left-font"><span>{{nav.title}}</span> Days</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {colorfuls} from '@/data'

export default {
  name: 'colorful',
  data () {
    return {
      colorfuls : colorfuls,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">

@media screen and (max-width:940px){
  .colorful{
    color: #546576;
    background: #F0F4F8;
    height:100%;
    width:100%;
    overflow: scroll;
    margin: 0 auto;
    header{
      height:50px;
      background: #fff;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
      p{
        text-align: center;
        line-height: 50px;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 1px;
      }
    }
    footer{
      padding: 10px;
      .color-box{
        margin: 0 auto;
        width:340px;
        .color-size{
          background: #fff;
          width: 150px;
          margin: 10px;
          padding: 15px 15px 20px 15px;
          display: inline-block;
          border-radius: 4px;
          position: relative;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.08);
          .color-four{
            width:100%;
            height:120px;
            border-radius: 4px;
            overflow: hidden;
            p{
              display: none;
            }
            .color-frist{
              height:50px;
              background: #FFFB85;
              line-height: 50px;
              padding-left:10px;
              &:hover p{
                display: block;
              }
            }
            .color-second{
              height:30px;
              background: #FFD464;
              line-height: 30px;
              padding-left:10px;
              &:hover p{
                display: block;
              }
            }
            .color-third{
              height: 20px;
              background: #FA5B75;
              padding-left:10px;
              line-height: 20px;
              &:hover p{
                display: block;
              }
            }
            .color-fourth{
              height: 20px;
              background: #5A3662;
              padding-left:10px;
              line-height: 20px;
              border-radius: 0 0 5px 5px;
              &:hover p{
                display: block;
              }
            }
          }
          .love-color{
            border-radius: 4px;
            border: 1px solid #cddbee;
            box-sizing: border-box;
            border: 1px solid #E6EAEE;
            display: inline-block;
            height:30px;
            width:50px;
            margin-top: 8px;
            box-sizing: border-box;
            padding:0 10px 0 5px;
            position: relative;
            i{
              color: #000;
              font-size: 17px;
              line-height: 25px;
              position: absolute;
              top: 2px;
              left: 9px;
            }
            p{
              margin: 0;
              line-height: 30px;
              text-align: right;
            }
          }
          .left-font{
            display: inline-block;
            margin: 0 ;
            font-size: 10px;
            position: absolute;
            right: 18px;
            bottom: 21px;
          }
        }
      }
    }
  }
}

@media screen and (min-width:950px){
  .colorful{
    color: #546576;
    background: #F0F4F8;
    height:100%;
    width:100%;
    overflow: scroll;
    margin: 0 auto;
    header{
      height:50px;
      background: #fff;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
      p{
        text-align: center;
        line-height: 50px;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 1px;
      }
    }
    footer{
      padding: 10px;
      width:980px;
      margin: 0 auto;
      .color-box{
        margin: 0 auto;
        .color-size{
          background: #fff;
          width: 300px;
          margin: 10px;
          padding: 15px 15px 20px 15px;
          display: inline-block;
          border-radius: 4px;
          position: relative;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.08);
          .color-four{
            width:100%;
            height:280px;
            border-radius: 4px;
            overflow: hidden;
            p{
              display: none;
            }
            .color-frist{
              height:110px;
              background: #FFFB85;
              line-height: 110px;
              padding-left:10px;
              &:hover p{
                display: block;
              }
            }
            .color-second{
              height:70px;
              background: #FFD464;
              line-height: 70px;
              padding-left:10px;
              &:hover p{
                display: block;
              }
            }
            .color-third{
              height: 40px;
              background: #FA5B75;
              padding-left:10px;
              line-height: 40px;
              &:hover p{
                display: block;
              }
            }
            .color-fourth{
              height: 40px;
              background: #5A3662;
              padding-left:10px;
              line-height: 40px;
              border-radius: 0 0 5px 5px;
              &:hover p{
                display: block;
              }
            }
          }
          .love-color{
            border-radius: 4px;
            border: 1px solid #cddbee;
            box-sizing: border-box;
            border: 1px solid #E6EAEE;
            display: inline-block;
            height:30px;
            width:50px;
            margin-top: 8px;
            box-sizing: border-box;
            padding:0 10px 0 5px;
            position: relative;
            i{
              color: #000;
              font-size: 17px;
              line-height: 25px;
              position: absolute;
              top: 2px;
              left: 9px;
            }
            p{
              margin: 0;
              line-height: 30px;
              text-align: right;
            }
          }
          .left-font{
            display: inline-block;
            margin: 0 ;
            font-size: 10px;
            position: absolute;
            right: 18px;
            bottom: 21px;
          }
        }
      }
    }
  }
}



</style>
