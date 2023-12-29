<template>
  <div class="about">
    <div class="img">
      <img
        src="@/assets/imgs/about.jpg"
        alt=""
      >
      <div class="mask"></div>
      <div class="sort">
        <p>总在不停追逐着</p>
        <p>这就是我要做的</p>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <div class="head">
          <img src="@/assets/imgs/head.jpg" alt="">
          <div class="name">Lay</div>
        </div>
        <div class="desc">
          <p>人生是一场旅程。</p>
          <p>我们经历了几次轮回，才换来这个旅程。</p>
          <p>而这个旅程很短，</p>
          <p>因此不妨大胆一些，</p>
          <p>不妨大胆一些去爱一个人，</p>
          <p>去攀一座山，</p>
          <p>去追一个梦……</p>
          <p>有很多事我都不明白。</p>
          <p>但我相信一件事，</p>
          <p>上天让我们来到这个世上，</p>
          <p>就是为了让我们创造奇迹。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped lang="less">
.img {
    position: relative;
    width: 100%;
    height: 50vh;
    margin-top: -52px;
    // z-index: -1;

    .sort {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 28px;
      color: #fff;
      font-weight: bold;
      line-height: 50px;
      letter-spacing: 0.5em;
      width: 300px;
      height: 65px;
      text-align: center;
      vertical-align: middle;
      margin-top: -32.5px;
      margin-left: -150px;
    }
}
.img img {
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 0;
  object-fit: cover;
}
.img .mask {
  width: 100%;
  height: 50vh;
  background-color: rgba(159, 156, 156, 0.2);
  position: absolute;
}
.main {
  width: 1033px;
  display: flex;
  justify-content: center;
  margin: -3.5em auto 0;
  background-color: #fff;
  opacity: 0.9;
  border-radius: 5px;
  padding-bottom: 50px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px #000;
  // position: relative;
}
.content {
  margin-top: 5em;
  text-align: center;
  
  .head  {
    // width: 150px;
    // height: 150px;
    // position: absolute;
    // top: 105px;
    // left: 50%;
    border-bottom: 1px solid;
    padding-bottom: 20px;
    margin-bottom: 40px;
    img {
      width: 150px;
      height: 150px;
    }
    .name {
      font-size: 30px;
      color: #565252;
    }
  }

  .desc {
    line-height: 3em;
  }

}
</style>
