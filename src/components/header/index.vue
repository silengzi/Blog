<template>
    <div class="top">
        <div class="header">
            <div class="logo">logo</div>
            <div class="between"></div>
            <div class="nav">
                <ul>
                    <li><router-link to="/" class="title">首页</router-link></li>
                    <li><router-link to="article" class="title">文章</router-link></li>
                    <li><router-link to="portfolio" class="title">作品集</router-link></li>
                    <li><router-link to="about" class="title">关于我</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'',
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
        margin-left: -5px;
        width: 101%;
        margin-top: -8px;
    }
    .header {
        // width: 1200px;
        // height: 52px;
        // margin: 0 auto;
        // overflow: hidden;
        display: flex;
        justify-content: space-around;
    }
    .logo, .nav {
        // display: inline-block;
    }
    .logo {
        // line-height: 52px;
        display: flex;
        align-items: center;
    }
    .nav {
        width: 310px;
    }
    .nav ul {
        // float: right;
        display: flex;
        justify-content: space-between;
    }
    .nav ul li{
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
</style>
