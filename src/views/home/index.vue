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
            <div class="intro">
              <p class="introTitle">My Blog</p>
              <p class="introDesc">许下三个愿望，在三个愿望里，靠近你拥抱你和你永不分离，许下三个愿望，我跟灯火耳语，若奇迹会发生，做你的阿拉丁</p>
            </div>
            <div class="countList">
              <div class="articleCount count">
                <p>文章</p>
                <p>10</p>
              </div>
              <div class="portfolioCount count">
                <p>作品</p>
                <p>15</p>
              </div>
              <div class="viewCount count">
                <p>浏览量</p>
                <p>11</p>
              </div>
            </div>
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
              <div class="articleTweetDesc desc">
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
              <div class="portfolioTweetDesc desc">
                <h4 class="portfolioTweetTitle">{{portfolioItem.title}}</h4>
                <div class="portfolioTweetContent">{{portfolioItem.content}}</div>
                <div class="portfolioTweetSummary">{{portfolioItem.summary}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="rightTop">
            <img
              class="bg"
              src="@/assets/imgs/home3.jpg"
              alt=""
            >
            <div class="head">
              <img
                src="@/assets/imgs/head.jpg"
                alt=""
              >
            </div>
            <div class="empty"></div>
          </div>
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
.home {
  background-color: #dcd6d66c;
}
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
  // width: 1700px;
  // background-color: #dcd6d66c;
  margin: 20px auto 0;
  .content {
    // position: relative;
    display: flex;
    justify-content: space-evenly;
    .nav {
      // position: absolute;
      // top: 20px;
      // left: 100px;
      text-align: center;

      .navTop {
        width: 257px;
        height: 350px;
        // border: 1px solid;
        border-radius: 10px;
        background-color: #fff;
        img {
          width: 255px;
          object-fit: cover;
          border-radius: 10px 10px 0 0;
        }
        .intro {
          padding: 5px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f0e4e4;
          .introTitle {
            font-size: 18px;
            color: #a68dac;
            margin-bottom: 10px;
          }
          .introDesc {
            font-size: 13px;
            color: #302f2f;
          }
        }
        .countList {
          display: flex;
          justify-content: space-around;
          margin: 10px;
          line-height: 30px;

          .count {
            position: relative;
            color: #7b7676;
          }
          .articleCount::before, .portfolioCount::before {
            content: "";
            width: 1px;
            height: 100%;
            background: #f0e4e4;
            display: block;
            position: absolute;
            right: -20px;
          }
        }
      }
    }
    .tweet {
      // width: 600px;
      // border: 1px solid;
      // margin: 0 20px;
      // position: absolute;
      // top: 20px;
      // left: 50%;
      // margin-left: -400px;
      // display: flex;
      // flex-direction: column;
      .title {
        color: #666;
        font-size: 18px;
        border-bottom: 1px dotted #666;
        margin-bottom: 30px;
        padding-bottom: 10px;
        font-weight: bold;
      }
      .tweetImg {
        width: 800px;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 0 10px #514f4f;
      }
      .articleTweet {
        margin-bottom: 50px;
      }
      .articleTweetList,
      .portfolioTweetList {
        margin-bottom: 30px;
        position: relative;
      }
      .desc {
        // border: 1px solid;
        width: 280px;
        height: 90px;
        text-align: center;
        margin-top: -45px;
        margin-left: -140px;
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        line-height: 30px;
        font-size: 20px;
      }
    }

    .right {
      // position: absolute;
      // top: 20px;
      // right: 100px;
      .rightTop {
        width: 257px;
        display: flex;
        flex-direction: column;
        .bg {
          width: 255px;
          height: 160px;
          object-fit: cover;
          border-radius: 10px 10px 0 0;
        }

        .head {
          text-align: center;
          background-color: #fff;
          img {
            margin-top: -35px;
            width: 70px;
            height: 70px;
            border-radius: 100%;
            border: 3px solid rgba(249, 246, 246, 0.4);
          }
        }
        .empty {
          height: 30px;
          background-color: #fff;
          border-radius: 0 0 10px 10px;
        }
      }
    }
  }
}
</style>