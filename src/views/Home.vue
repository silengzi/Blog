<template>
  <div class="home">
    <img src="@/assets/imgs/lay.jpg" alt="">
    <div class="empty"></div>
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
  img {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    margin-left: -5px;
  }
  .empty {
    height: 884px;
  }
</style>