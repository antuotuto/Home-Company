<template>
  <div class="aboutUs">
    <header>
      <h2  class="animated  fadeInLeft delay_0">关于我们</h2>
    </header>

    <main>
      <div class="content-1">
        <h3  class="animated  fadeInLeft delay_0">独创科技，领航未来</h3>
        <p class="text-1 animated  fadeInLeft delay_200">CONTRACTED</p>
        <p  class="animated  fadeInLeft delay_300">1. 湖南奇峰医药有限公司是国内最早研发并掌握“医药互联网”技术在全国医药领域和企业界率先推广应用的类医药机构。</p>
      </div>

      <div class="content-2 animated  fadeInLeft delay_700">
        <h3>我们的优势</h3>
        <h4>1. 专业</h4>
        <p>湖南奇峰医药有限公司是全球专业而高效的医药管理服务商，公司管理和咨询团队成员全部拥有多年的医药行业管理背景。</p>
        <h4>2. 安全</h4>
        <p>采用自主研发的安全加密算法+CA签名认证的方式保障金融通道的信息安全。</p>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width:900px){
  .aboutUs{
    letter-spacing: 1px;
    header{
      height:250px;
      background: #293646;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 250px;
        letter-spacing: 2px;
        text-align: center;
      }
    }
    .content-1{
      padding: 20px;
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:200px;
        margin: 0 auto;
      }
      .text-1{
        font-size: 18px;
        padding-bottom: 15px;
        text-align: center;
        padding: 5px;
        margin-bottom: 10px;
        font-weight: 100;
      }
    }
    .content-2{
      padding: 20px;
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        text-align: center;
        width:200px;
        margin: 0 auto;
      }
      h4{
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 16px;
        background: #eee;
      }
    }
  }
}

@media screen and (min-width:900px){
  .aboutUs{
    letter-spacing: 1px;
    header{
      height:300px;
      background: #293646;
      h2{
        font-size: 25px;
        color:#fff;
        line-height: 300px;
        letter-spacing: 2px;
        text-align: center;
      }
    }
    main{
      margin: 40px auto;
      width:900px;
    }
    .content-1{
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        width:250px;
        text-align: center;
        margin: 30px auto;
      }
      .text-1{
        font-size: 18px;
        padding-bottom: 15px;
        text-align: center;
        padding: 5px;
        margin-bottom: 10px;
        font-weight: 100;
      }
      p{
        padding-bottom: 5px;
      }
    }
    .content-2{
      h3{
        font-size: 18px;
        background: #293646;
        color:#eee;
        padding: 8px;
        width:250px;
        text-align: center;
        margin: 30px auto;
      }
      h4{
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 16px;
        background: #eee;
      }
    }
  }
}

</style>
