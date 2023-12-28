<template>
  <div class="about">
    <div class="img">
      <img
        src="@/assets/imgs/about.jpg"
        alt=""
      >
      <div class="mask"></div>
    </div>
    <div class="main">
      <div class="content">
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
.about {
  // margin: 0 auto;
}
.img {
    position: relative;
    width: 100%;
    height: 50vh;
    margin-top: -52px;
    z-index: -1;
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
  display: flex;
  justify-content: center;
}
.content {
  width: 1200px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
}
</style>
