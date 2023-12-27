<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'
export default {
    name:'',
    components: {Header, Footer},
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
