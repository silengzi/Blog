<template>
  <div class="home">
    <Header></Header>
    <img src="@/assets/imgs/lay.jpg" alt="">
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style scoped>
  img {
    position: absolute;
    top: 0;
    z-index: -1;
  }
</style>