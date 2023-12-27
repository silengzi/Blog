<template>
  <div>
    <div class="article"
        v-for="(item, index) in articleList"
        :key="item.id"
        
    >
        <div class="img"><img :src="item.img" alt=""></div>
        <div class="desc">
            <div class="title">{{item.title}}</div>
            <router-link to="/detail">{{item.content}}</router-link>
        </div>
    </div>
    <router-view></router-view>
    <!-- <Detail></Detail> -->
  </div>
</template>

<script>
// import Detail from '@/views/article/detail/Detail.vue'

export default {
  // components: {Detail},
  name: '',
  data() {
    return {
      articleList: [],
    };
  },
  methods: {
    /* detail() {
      this.$router.push({name: 'detail'})
    } */
  },
  mounted() {
    this.articleList = [
      {
        title: '文章1',
        img: require('@/assets/imgs/article1.jpg'),
        content: '这是文章1的内容'
      },
      {
        title: '文章2',
        img: require('@/assets/imgs/article2.jpg'),
        content: '这是文章2的内容'

      },
    ]
    console.log(this.articleList)
  }
};
</script>

<style scoped lang="less">
    .article {
        // display: flex;
        // justify-content: center;
        // margin: 0 auto;
        margin-top: 100px;
        // width: 1200px;
        text-align: center;
    }
    .img img{
        width: 600px;
        height: 300px;
    }
    .desc {
        text-align: left;
        margin-left: 480px;
    }
</style>
