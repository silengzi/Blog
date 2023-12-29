<template>
  <div class="top">
    <div class="header">
      <div class="logo">logo</div>
      <div class="between"></div>
      <div class="nav">
        <ul>
          <li><router-link
              to="/"
              class="title"
            >首页</router-link></li>
          <li><router-link
              to="article"
              class="title"
            >文章</router-link></li>
          <li><router-link
              to="portfolio"
              class="title"
            >作品集</router-link></li>
          <li><router-link
              to="about"
              class="title"
            >关于我</router-link></li>
        </ul>
      </div>
      <router-link to="/">
        <img
          class="head"
          src="@/assets/imgs/head.jpg"
          alt=""
        >
      </router-link>
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
.top {
  background-color: #68656952;
  width: 100%;
  position: relative;
  z-index: 999;
}
.header {
  // width: 1200px;
  height: 52px;
  // margin: 0 auto;
  // overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav {
  // display: inline-block;
}
.logo {
  // line-height: 52px;
  // display: flex;
  // align-items: center;
}
.nav {
  width: 310px;
}
.nav ul {
  // float: right;
  display: flex;
  justify-content: space-between;
}
.nav ul li {
  // display: inline-block;
  list-style-type: none;
  // margin-left: 45px;
}
.nav ul li .title {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  // vertical-align: middle;
}
.head {
  width: 45px;
  height: 45px;
  border-radius: 100%;
}
</style>
