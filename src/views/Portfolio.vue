<template>
    <div class="portfolio">
        <div class="top">
            <img class="top-bg" src="@/assets/imgs/portfolio.jpg" alt="">
            <div class="mask"></div>
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
        width: 100%;
        height: 50vh;
        margin-top: -52px;
        position: relative;
        z-index: -1;
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
</style>
