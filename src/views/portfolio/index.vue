<template>
  <div class="portfolio">
    <div class="top">
      <img
        class="top-bg"
        src="@/assets/imgs/portfolio.jpg"
        alt=""
      >
      <div class="mask"></div>
      <div class="sort">春风得意马蹄疾，一日看尽长安花。</div>
    </div>
    <div class="main">
      <div class="portfolio-content">
        <div
          class="portfolioList"
          v-for="(item, index) in portfolioList"
          :key='item.id'
          @click="toDetail"
        >
          <div class="portfolioImage">
            <img
              :src="item.img"
              style="width: 300px; height: 200px; object-fit: cover"
              alt=""
            >
          </div>
          <div class="portfolioDesc">
            <h3 class="portfolioTitle">{{item.title}}</h3>
            <div class="portfolioContent">{{item.content}}</div>
            <div class="portfolioSummary">{{item.summary}}</div>
          </div>
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
      portfolioList: [],
    };
  },
  methods: {
    toDetail() {
      this.$router.push({
        name: 'detail'
      })
    }
  },
  mounted() {
    this.portfolioList = [
      {
        title: '作品1',
        img: require('@/assets/imgs/portfolio1.jpg'),
        content: '这是作品1的内容',
        summary: '不要被埋没在铁灰色的壳',
      },
      {
        title: '作品2',
        img: require('@/assets/imgs/portfolio2.jpg'),
        content: '这是作品2的内容',
        summary: '你的独特我会放在手心护着',
      },
      {
        title: '作品3',
        img: require('@/assets/imgs/portfolio1.jpg'),
        content: '这是作品3的内容',
        summary: '你总是爱逞强微笑',
      },
      {
        title: '作品4',
        img: require('@/assets/imgs/portfolio1.jpg'),
        content: '这是作品4的内容',
        summary: '不要被埋没在铁灰色的壳',
      },
      {
        title: '作品5',
        img: require('@/assets/imgs/portfolio2.jpg'),
        content: '这是作品5的内容',
        summary: '你的独特我会放在手心护着',
      },
      {
        title: '作品6',
        img: require('@/assets/imgs/portfolio1.jpg'),
        content: '这是作品6的内容',
        summary: '你总是爱逞强微笑',
      },
      {
        title: '作品7',
        img: require('@/assets/imgs/portfolio1.jpg'),
        content: '这是作品7的内容',
        summary: '不要被埋没在铁灰色的壳',
      },
      {
        title: '作品8',
        img: require('@/assets/imgs/portfolio2.jpg'),
        content: '这是作品8的内容',
        summary: '你的独特我会放在手心护着',
      },
      {
        title: '作品9',
        img: require('@/assets/imgs/portfolio1.jpg'),
        content: '这是作品9的内容',
        summary: '你总是爱逞强微笑',
      },
      {
        title: '作品10',
        img: require('@/assets/imgs/portfolio1.jpg'),
        content: '这是作品10的内容',
        summary: '不要被埋没在铁灰色的壳',
      },
      {
        title: '作品11',
        img: require('@/assets/imgs/portfolio2.jpg'),
        content: '这是作品11的内容',
        summary: '你的独特我会放在手心护着',
      },
      {
        title: '作品12',
        img: require('@/assets/imgs/portfolio1.jpg'),
        content: '这是作品12的内容',
        summary: '你总是爱逞强微笑',
      },
      {
        title: '作品13',
        img: require('@/assets/imgs/portfolio1.jpg'),
        content: '这是作品13的内容',
        summary: '不要被埋没在铁灰色的壳',
      },
      {
        title: '作品14',
        img: require('@/assets/imgs/portfolio2.jpg'),
        content: '这是作品14的内容',
        summary: '你的独特我会放在手心护着',
      },
      {
        title: '作品15',
        img: require('@/assets/imgs/portfolio1.jpg'),
        content: '这是作品15的内容',
        summary: '你总是爱逞强微笑',
      },
    ]
  }
};
</script>

<style scoped lang="less">
.top {
  width: 100%;
  height: 50vh;
  margin-top: -52px;
  position: relative;
  //   z-index: -1;

  .sort {
    width: 400px;
    height: 50px;
    font-size: 25px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -200px;
  }
}
.top .top-bg {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  position: absolute;
}
.top .mask {
  width: 100%;
  height: 50vh;
  position: absolute;
  background-color: rgba(159, 156, 156, 0.2);
}
.main {
  background-color: #dcd6d66c;
  padding-top: 50px;

  .portfolio-content {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .portfolioList {
      margin-bottom: 50px;
      background-color: #fff;
      border-radius: 8px;
      padding: 10px;
      border: 2px solid #645f5f6c;
      cursor: pointer;

      .portfolioDesc {
        line-height: 30px;
      }
    }
  }
}
</style>
