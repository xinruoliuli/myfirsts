<template>
    <div class="swiper">
        <div class="content">
            <div class="image_box">
                <div class="image">
                    <img :src="swiperImgArr[imageIndex].imgUrl" alt="">
                    <!-- <img v-for="(item,index) in swiperImgArr" :key="index" :src="swiperImgArr[1].imgUrl" alt=""> -->
                </div>
                <button @click="toPrevious" class="left_button">上一张</button>
                <button @click="toNext" class="right_button">下一张</button>
            </div>
            <div class="bottom_index">
                <p v-for="(item,index) in swiperImgArr" :key="index" :class="index === imageIndex ? 'select_index' : ''"></p>
            </div>
        </div>
        <div class="explain">
            <div class="massige">
                <span class="massige_title">名称：</span><span class="massige_content">轮播图（swiper）</span>
            </div>
            <div class="massige">
                <span class="massige_title">版本：</span><span class="massige_content">swiper0.0.1</span>
            </div>
            <div class="massige">
                <span class="massige_title">更新时间：</span><span class="massige_content">{{systemTime}}</span>
            </div>
            <div class="massige">
                <span class="massige_title">功能：</span><span class="massige_content">点击 butten 实现图片切换，且底部索引随之变化</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'mySwiper',
    props: {
        msg: String
    },
    data () {
        return {
            swiperImgArr: [
                { imgUrl: require('../../assets/image/swiper0.jpg') },
                { imgUrl: require('../../assets/image/swiper1.jpg') },
                { imgUrl: require('../../assets/image/swiper2.jpg') },
                { imgUrl: require('../../assets/image/swiper3.jpg') }
            ],
            imageIndex: 1,
            systemTime: ''
        }
    },
    created () {
        this.addDate()
    },
    methods: {
        // 当前时间
        addDate () {
            const nowDate = new Date()
            const date = {
                year: nowDate.getFullYear(),
                month: nowDate.getMonth() + 1,
                date: nowDate.getDate()
            }
            this.systemTime = date.year + '-' + date.month + '-' + date.date
        },

        toPrevious () {
            if (this.imageIndex > 0) {
                this.imageIndex = this.imageIndex - 1
            } else {
                this.imageIndex = this.swiperImgArr.length - 1
            }
        },
        toNext () {
            if (this.imageIndex < this.swiperImgArr.length - 1) {
                this.imageIndex = this.imageIndex + 1
            } else {
                this.imageIndex = 0
            }
        }
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.swiper {
    padding: 0.15rem;
}
.image {
    height: 1.8rem;
    position: relative;
}
.image_box img {
    width: 100%;
    height: 100%;
}
.left_button {
    background-color: darkcyan;
    position: absolute;
    left: 0.15rem;
    top: 0.9rem;
    z-index: 100;
}
.right_button {
    background-color: darkcyan;
    position: absolute;
    right: 0.15rem;
    top: 0.9rem;
}
.bottom_index {
    height: 0.18rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.bottom_index p {
    background-color: #fff;
    width: 0.08rem;
    height: 0.08rem;
    margin-right: 0.05rem;
    border-radius: 0.04rem;
}
.bottom_index .select_index {
    background-color: #ccc;
}

.explain {
    height: 100%;
    color: #fff;
    text-align: left;
    margin-top: 0.5rem;
}
.explain .massige {
    height: 0.24rem;
    line-height: 0.24rem;
}
.explain .massige_title {
    font-size: 0.16rem;
    font-weight: 600;
}
.explain .massige_content {
    font-size: 0.16rem;
}
</style>
