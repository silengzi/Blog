<template>
  <div class="detail">
    <div class="bg">
      <img
        src="@/assets/imgs/portfolio1.jpg"
        alt=""
      >
    </div>
    <div class="mask"></div>
    <div class="main">
      <div class="left">
        <div class="moreTweet">
          <h5>更多推荐</h5>
        </div>
      </div>
      <div class="mainContent">
        <v-md-preview
          :text="text"
          height="400px"
          class="detailContent"
        ></v-md-preview>
      </div>
      <div class="right">
        <div class="mdTitleNav">
          <h5>导航目录</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqArticleById} from '@/api/index'
export default {
  name: 'Detail',
  data() {
    return {
      text: '',
      
    };
  },
  mounted() {
//     this.text = `## 我不好 - 张艺兴 (LAY)
// #### 词：李荣浩
// #### 曲：LAY(张艺兴)
// #### 编曲：郑伟/LAY(张艺兴)
// 第五排 第六号
// 我的飞机票
// 要飞去哪里我不知道
// 闻着衣服上你的味道
// 昨天是你生日
// 有我的生日
// 说好了晚餐后去看一场电影
// 像别人那样手牵手
// 我陪你哭 也逗你笑 我好不好
// 我总是这样问你
// 这样骗你 开你玩笑
// 你走着走着原地不动了
// 戴着口罩哭着对我说
// 你说你好累 也许我们并不适合
// 我不好 我不好
// 我不好 是我不好
// 不配你的美
// Oh baby
// 原来我 早已经 失去你 可是我
// 都还不知道
// 求求你怪我好不好
// 这样我就可以入睡
// 至少让我知道你已经有了人陪
// 我陪你哭 也逗你笑 我好不好
// 我总是这样问你
// 这样骗你 开你玩笑
// 你走着走着原地不动了
// 戴着口罩哭着对我说
// 你说你好累 也许我们并不适合
// 我不好 我不好
// 我不好 是我不好
// 不配你的美
// Oh baby
// 原来我 早已经 失去你 可是我
// 都还不知道
// 求求你怪我好不好
// 这样我就可以入睡
// 至少让我知道你已经有了人陪
// 我不好 我不好 我不好
// 不配你的美
// 原来我 早已经 失去你 可是我
// 都还不知道
// 求求你怪我好不好
// 这样我就可以入睡
// 至少让我知道你已经有了人陪
// 至少让我知道你已经有人陪
// **Executive Producer：ZHANG YIXING STUDIO**
// **Producer：LAY(张艺兴)**
// **Vocal Directed by：Andrew Choi**
// **Background Vocals by：LAY(张艺兴)**
// *Recorded by：Eugene Kwon/Sung-Su Min @ doobdoob Studio*
// *Digital Editing by：Woo-Young Jang @ doobdoob Studio*
// *Mixed by：Han-Goo Kim @ SoundPOOL Studios*
// *Mastered by：Kwon Nam Woo @ ８２１ Sound Mastering*
// `
  },
  // 用id调接口
  async created() {
    // const id = this.$route.query.id
    // const response = await fetch(`/api/article/getArticleById/${id}`)
    // const data = await response.json()
    // let userName = this.$route.query.userName
    let data = {
      id: this.$route.query.id,
      userName: this.$route.query.userName,
    }
    const result = await reqArticleById(data)
    // console.log(result)
    let res = result.data
    if(res.status == 1) {
        let title = res.data.title
        let content = res.data.content
        this.text = `# ${title}\n${content}`
    }
  }
};
</script>

<style scoped lang="less">
.detail {
  width: 100%;
  min-height: calc(100vh - 52px - 35px);
  // background-image: url();
  // background-repeat: no-repeat;
  // background-size: cover;
  padding: 95px 0 30px;
  position: relative;
  .bg {
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(94, 93, 93, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .main {
    display: flex;
    justify-content: center;
  }
  .left .moreTweet,
  .detailContent,
  .right .mdTitleNav {
    background-color: #fff;
  }

  .left,
  .right {
    width: 260px;
  }
  .left {
    .moreTweet {
      border-radius: 5px;
      // height: 20px;
      border: 1px solid #fff;
      padding-bottom: 20px;
      h5 {
        font-size: 14px;
        margin: 16px 10px 20px 16px;
        border-left: 3px solid rgb(76, 179, 207);
        padding: 1px 4px;
        text-indent: 6px;
        position: relative;
      }
      h5::after {
        content: "";
        width: 90%;
        height: 1px;
        background: #eee;
        position: absolute;
        left: 0;
        bottom: -10px;
      }
    }
  }

  .mainContent {
    margin: 0 80px;
    width: 48%;

    .detailContent {
      // border: 1px solid red;
      border-radius: 15px;
    }
  }

  .right {
    .mdTitleNav {
      width: 260px;
      border: 1px solid #fff;
      border-radius: 5px;

      h5 {
        margin-top: 16px;
        padding: 14px;
        font-size: 16px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
