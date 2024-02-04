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
          >
            <a :href="item.url">
              <div class="portfolioImage">
                <img
                  :src="item.img"
                  style="width: 300px; height: 200px; object-fit: cover"
                  alt=""
                >
              </div>
              <div class="portfolioDesc">
                <h3 class="portfolioTitle">{{item.title}}</h3>
                <!-- <div class="portfolioContent">{{item.content}}</div> -->
                <div class="portfolioSummary"><span class="summary">概要：</span>{{item.summary}}</div>
              </div>
            </a>
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
    // toDetail() {
    //   this.$router.push({
    //     name: 'detail'
    //   })
    // }
  },
  mounted() {
    this.portfolioList = [
      {
        title: '面试题库',
        img: require('@/assets/imgs/interview.jpg'),
        // content: '这是作品1的内容',
        summary: '利用vuepress整理的一些面试题，包括前端开发、webGis',
        url: 'https://silengzi.github.io/cube-interview/'
      },
      {
        title: 'openlayers实例库',
        img: require('@/assets/imgs/openlayers.jpg'),
        // content: '这是作品2的内容',
        summary: 'openlayers官网实例库',
        url: 'https://silengzi.github.io/ol-learning.github.io/'
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
    // justify-content: space-between;
    flex-wrap: wrap;

    .portfolioList {
      margin-right: 41px;
      margin-bottom: 50px;
      background-color: #fff;
      border-radius: 8px;
      padding: 10px;
      border: 2px solid #645f5f6c;
      cursor: pointer;
      width: 325px;
      
      a {
        text-decoration: none;
        color: #000000;
      }
      .portfolioDesc {
        line-height: 30px;

        .summary {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
