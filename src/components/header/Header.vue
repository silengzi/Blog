<template>
    <div class="top">
        <div class="header">
            <div class="logo">logo</div>
            <div class="title">
                <ul>
                    <li><a href="">首页</a></li>
                    <li><a href="">文章</a></li>
                    <li><a href="">作品集</a></li>
                    <li><a href="">关于我</a></li>
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
    .header {
        width: 1200px;
        height: 52px;
        margin: 0 auto;
        overflow: hidden;
    }
    .logo, .title {
        display: inline-block;
    }
    .logo {
        line-height: 52px;
    }
    .title {
        float: right;
    }
    .title ul li{
        display: inline-block;
        margin-left: 45px;
    }
    .title ul li a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        vertical-align: middle;
    }
</style>
