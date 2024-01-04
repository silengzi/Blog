<template>
  <div class="home">
    <div class="top">
      <img
        src="@/assets/imgs/home1.jpg"
        alt=""
      >
      <div class="mask"></div>
      <div class="sort">
        <p>人生得意须尽欢，莫使金樽空对月。</p>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <div class="nav">
          <div class="navTop">
            <img
              src="@/assets/imgs/home2.jpg"
              alt=""
            >
          </div>
          <div class="navCenter">

          </div>
          <div class="navFooter">

          </div>
        </div>
        <div class="tweet">
          <div class="articleTweet">
            <div class="articleTitle title">
              <p>文章推荐</p>
            </div>
            <div
              class="articleTweetList"
              v-for="(articleItem, index) in articleTweetList"
              :key="articleItem.id"
            >
              <div class="articleTweetImg">
                <img
                  class="tweetImg"
                  :src="articleItem.img"
                  alt=""
                >
              </div>
              <div class="articleTweetDesc">
                <h4 class="articleTweetTitle">{{articleItem.title}}</h4>
                <div class="articleTweetContent">{{articleItem.content}}</div>
                <div class="articleTweetSummary">{{articleItem.summary}}</div>
              </div>
            </div>
          </div>
          <div class="portfolioTweet">
            <div class="portfolioTitle title">
              <p>作品推荐</p>
            </div>
            <div
              class="portfolioTweetList"
              v-for="(portfolioItem, index) in portfolioTweetList"
              :key="portfolioItem.id"
            >
              <div class="portfolioTweetImg">
                <img
                  class="tweetImg"
                  :src="portfolioItem.img"
                  alt=""
                >
              </div>
              <div class="portfolioTweetDesc">
                <h4 class="portfolioTweetTitle">{{portfolioItem.title}}</h4>
                <div class="portfolioTweetContent">{{portfolioItem.content}}</div>
                <div class="portfolioTweetSummary">{{portfolioItem.summary}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <img
            src="@/assets/imgs/home2.jpg"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      articleTweetList: [],
      portfolioTweetList: []
    }
  },
  mounted() {
    this.articleTweetList = [
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
    ],
      this.portfolioTweetList = [
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
      ]
  }
}
</script>

<style scoped lang="less">
.top {
  width: 100%;
  height: 100vh;
  position: relative;
  /* border: 1px solid; */
  margin-top: -52px;
  /* z-index: -1; */
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
.main {
  width: 1700px;
  margin: 20px auto 0;
  .content {
    position: relative;
    .nav {
      position: absolute;
      top: 20px;
      left: 100px;

      .navTop {
        img {
          width: 300px;
          object-fit: cover;
        }
      }
    }
    .tweet {
      // width: 600px;
      border: 1px solid;
      // margin: 0 20px;
      position: absolute;
      top: 20px;
      left: 50%;
      margin-left: -400px;
      .title {
        border-bottom: 1px dotted;
        margin-bottom: 10px;
      }
      .tweetImg {
        width: 800px;
        height: 265px;
        object-fit: cover;
      }
    }

    .right {
      // width: 100%;
      position: absolute;
      top: 20px;
      right: 100px;
      img {
        width: 300px;
        object-fit: cover;
      }
    }
  }
}
</style>