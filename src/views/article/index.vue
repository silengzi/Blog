<template>
  <div class="article">
    <div class="top-bg">
      <img
        class="img"
        src="@/assets/imgs/article.jpg"
        alt=""
      >
      <div class="mask"></div>
      <el-form inline class="search">
        <el-form-item>
          <el-input class="input" type="text" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-button icon="el-icon-search" @click="getData">搜索</el-button>
      </el-form>
    </div>
    <div class="article-content">
      <div
        class="articleList"
        v-for="(item, index) in articleList"
        :key="item.id"
        @click="detail"
      >
        <div class="articleImg"><img
            :src="item.img"
            alt=""
          ></div>
        <div class="desc">
          <h3 class="title">{{item.title}}</h3>
          <p class="content">{{item.content}}</p>
          <p class="summary">{{item.summary}}</p>
          <!-- <router-link to="/detail">{{item.content}}</router-link> -->
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
      articleList: [],
    };
  },
  methods: {
    detail() {
      this.$router.push({
        name: 'detail'
      })
    },
    getData() {
      let count = this.$store.state.count
      console.log(count)
      this.$store.dispatch("getAllArticle")
    }
  },
  mounted() {
    this.articleList = [
      {
        title: '文章1',
        img: require('@/assets/imgs/article1.jpg'),
        content: '这是文章1的内容',
        summary: '生活是一堆碎玻璃渣子里找糖。'
      },
      {
        title: '文章2',
        img: require('@/assets/imgs/article2.jpg'),
        content: '这是文章2的内容',
        summary: '纵有疾风起，人生不言弃。'

      },
      {
        title: '文章3',
        img: require('@/assets/imgs/article1.jpg'),
        content: '这是文章3的内容',
        summary: '生活是一堆碎玻璃渣子里找糖。'
      },
      {
        title: '文章4',
        img: require('@/assets/imgs/article2.jpg'),
        content: '这是文章4的内容',
        summary: '纵有疾风起，人生不言弃。'

      },
      {
        title: '文章5',
        img: require('@/assets/imgs/article1.jpg'),
        content: '这是文章5的内容',
        summary: '生活是一堆碎玻璃渣子里找糖。'
      },
      {
        title: '文章6',
        img: require('@/assets/imgs/article2.jpg'),
        content: '这是文章6的内容',
        summary: '纵有疾风起，人生不言弃。'

      },
      {
        title: '文章7',
        img: require('@/assets/imgs/article1.jpg'),
        content: '这是文章7的内容',
        summary: '生活是一堆碎玻璃渣子里找糖。'
      },
      {
        title: '文章8',
        img: require('@/assets/imgs/article2.jpg'),
        content: '这是文章8的内容',
        summary: '纵有疾风起，人生不言弃。'

      },
      {
        title: '文章9',
        img: require('@/assets/imgs/article1.jpg'),
        content: '这是文章9的内容',
        summary: '生活是一堆碎玻璃渣子里找糖。'
      },
      {
        title: '文章10',
        img: require('@/assets/imgs/article2.jpg'),
        content: '这是文章10的内容',
        summary: '纵有疾风起，人生不言弃。'

      },
    ]
    // console.log(this.articleList)
  }
};
</script>

<style scoped lang="less">
.article .top-bg {
  position: relative;
  // z-index: -1;
  width: 100%;
  height: 50vh;
  margin-top: -52px;
}
.article .top-bg .img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  // z-index: -1;
  // border: 1px solid;
}
.article .top-bg .mask {
  width: 100%;
  height: 50vh;
  background-color: rgba(159, 156, 156, 0.2);
  // z-index: -1;
  position: absolute;
}
.article .top-bg .search {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -475px;
  width: 950px;

  .input {
    width: 850px;
  }
  
}
.article-content {
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  background-color: #dcd6d66c;
}
.articleList {
  display: flex;
  // justify-content: space-around;
  // margin: 0 auto;
  margin-top: 20px;
  width: 800px;
  // border: 1px solid;
  // text-align: center;
  border-radius: 15px;
  padding: 16px;
  background-color: #fff;
  cursor: pointer;
}
.articleImg img {
  width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}
.desc {
  margin-left: 15px;
  margin-top: 5px;
  line-height: 25px;
}
</style>
