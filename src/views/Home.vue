<template>
  <div class="home">
    <div class="top">
      <img src="@/assets/imgs/home1.jpg" alt="">
      <div class="mask"></div>
      <div class="sort">
        <p>人生得意须尽欢，莫使金樽空对月。</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
  .top {
    width: 100%;
    height: 100vh;
    position: relative;
    /* border: 1px solid; */
    margin-top: -52px;
    z-index: -1;
  }
  .top img {
    position: absolute;
    /* z-index: -1; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .top .mask {
    width: 100%;
    height: 100vh;
    background-color: rgba(159, 156, 156, 0.2);
    position: absolute;
    /* z-index: -1; */
  }
  .top .sort {
    width: 450px;
    height: 40px;
    /* border: 1px solid; */
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -225px;
    margin-top: -20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .top .sort p {
    color: #fff;
    font-size: 28px;
  }
  
</style>