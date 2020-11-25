<template>
  <div class="detail" :style="{ height: $innerHeight + 'px' }">
    <van-nav-bar title="商品详情" class="nav-bar">
      <template #left>
        <van-icon name="arrow-left" color="#666666" size="18" />
      </template>
    </van-nav-bar>
    <scroll class="scroll-con" :pullDown="false" ref="scroll">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <div class="cell-pro">
        <p class="cell-title">美素佳儿（Friso）金装幼儿配方奶</p>
        <p class="cell-text">荷兰原装进口 品质保证 1-3岁幼儿适用</p>
        <div class="cell-flex">
          <div class="cell-left">
            <span class="price">￥121.0</span>
            <span class="price-old">￥121.0</span>
          </div>
          <div class="cell-right">销量 120件</div>
        </div>
      </div>
      <div class="cell-pro mt-8 my-cell van-hairline--bottom">
        <span class="my-cell-left">已选</span>
        <div class="my-cell-center">900克，3段</div>
        　<van-icon name="arrow" />
      </div>
      <div class="cell-pro my-cell">
        <span class="my-cell-left">服务</span>
        <div class="my-cell-center circle-small">
          <p>30天退货包邮</p>
          <p>国际直邮</p>
        </div>
        　<van-icon name="arrow" />
      </div>
      <div class="asse-pro mt-8">
        <div class="asse-top">
          <span class="asse-title">商品评价(233)</span>
          <div class="my-cell-right">
            <span class="mr-5">查看全部</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="asse-midd">
          <avatar></avatar>
          <span>辛迪北贝</span>
        </div>
        <div class="asse-text">东西收到了，快递很给力，我觉得ok，下次再来</div>
        <asse-imgList class="asse-img">
          <img
            v-for="(item, index) in imgList"
            :key="item.id"
            :src="item.src"
            class="img-item"
            @click="imgPreView(index)"
          />
        </asse-imgList>
      </div>
      <div class="look-more mt-8">
        <img src="~@/assets/img/logo.jpeg" class="logo" />
        <div class="middle">
          <div class="title">京东旗舰</div>
          <div>低价享旗舰商品</div>
        </div>
        <div class="my-cell-right">
          <span class="mr-5">查看全部</span>
          <van-icon name="arrow" color="#666666" />
        </div>
      </div>
      <div class="detail-show">
        <img src="~@/assets/img/detail-img.jpg" @load="imgLoad()" alt="" />
      </div>
    </scroll>
    <foot-bar>
      <div
        class="my-button"
        :class="{ 'is-down': isDown }"
        @touchstart="handleMouseEnter"
        @touchend="handleMouseUp"
        @click="handleBuy"
      >
        立即购买
      </div>
    </foot-bar>
    <van-popup v-model="showSku" class="popup" position="bottom" :style="{ height: '60%' }">
      <div class="pop-top">
        <div class="pop-imgbox">
          <img class="pop-avatar" src="~@/assets/img/avatar.jpeg" alt="">
          <span class="price">188.0</span>
        </div>
        <div class="tips">段数</div>
        <div class="pop-value-col">
          <div class="pop-tags">3段</div>
        </div>
        <div class="tips">规格</div>
        <div class="pop-value-col">
          <div class="pop-tags">900克</div>
        </div>
        <div class="pop-step">
          <span>数量</span>
          <van-stepper 
            v-model="stepValue" 
            disable-input 
            button-size="0.93333rem" 
            input-width="0.93333rem"
          />
        </div>
      </div>
      <div class="pop-bottom">
        <van-button size="large" color="#FF1C34">立即购买</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import AsseImgList from "@/components/AsseImgList";
import FootBar from "@/components/FootBar";
export default {
  name: "Detail",
  components: {
    Avatar,
    AsseImgList,
    FootBar,
  },
  data() {
    return {
      imgList: [
        {
          id: 0,
          src: require("@/assets/img/timg.jpeg"),
        },
        {
          id: 1,
          src: require("@/assets/img/timg.jpeg"),
        },
        {
          id: 2,
          src: require("@/assets/img/timg.jpeg"),
        },
      ],
      isDown: true,
      showSku:false,
      stepValue:1
    };
  },
  computed: {
    innerHeight() {
      return window.innerHeight + "px";
    },
  },
  methods: {
    imgPreView(index) {
      const imageList = this.imgList.map((item) => item.src);
      this.$ImagePreview({
        images: imageList,
        startPosition: index,
      });
    },
    handleMouseEnter() {
      this.isDown = true;
    },
    handleMouseUp() {
      this.isDown = false;
    },
    handleBuy() {
      this.showSku = true
    },
    imgLoad() {
      this.$nextTick(() => {
        this.$refs.scroll.refresh();
      });
    },
  },
};
</script>

<style scoped>
.detail {
  background-color: #f0f2f5;
  /* overflow: hidden; */
}
.van-nav-bar {
  background-color: #f0f2f5;
}
.my-swipe {
  height: 375px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 375px;
  text-align: center;
  background-color: #39a9ed;
}
.cell-pro {
  /* margin-bottom: 8px; */
  padding: 12px;
  background-color: #fff;
  font-size: 12px;
  color: #999;
}
.cell-pro .van-icon {
  display: flex;
  align-items: center;
}
.mt-8 {
  margin-top: 8px;
}
.mr-5 {
  margin-right: 5px;
}
.cell-pro .cell-title {
  font-size: 16px;
  margin-bottom: 5px;
  color: #000;
  opacity: 1;
}
.cell-flex {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}
.price {
  color: #f12424;
  font-size: 14px;
}
.price-old {
  margin-left: 5px;
  text-decoration: line-through;
}
.my-cell {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  line-height: 28px;
  font-size: 14px;
}

.my-cell-left {
  padding-right: 12px;
}
.my-cell-center {
  flex: 1;
  color: #000;
}
.my-cell-right {
  display: flex;
  align-items: center;
}
.circle-small > p::before {
  content: "·";
}
.asse-pro {
  background-color: #fff;
  padding: 0 12px;
}
.asse-top {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  padding-top: 12px;
  align-items: center;
}
.asse-title {
  color: #333;
  font-size: 14px;
}
.asse-midd {
  display: flex;
  align-items: center;
  color: #130000;
  font-size: 13px;
  padding-top: 10px;
}
.asse-midd > span {
  margin-left: 5px;
}
.asse-text {
  color: #333;
  font-size: 14px;
  padding-top: 5px;
}
.img-item {
  width: 60px;
  height: 60px;
  margin-right: 12px;
  margin-bottom: 12px;
}
.img-item:nth-child(5n) {
  margin-right: 0;
}
.asse-img {
  padding: 10px 0 0;
}
.look-more {
  background-color: #fff;
  padding: 15px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
.look-more > .middle {
  flex: 1;
  color: #666;
  font-size: 13px;
}
.look-more > .middle > .title {
  color: #333;
  margin-bottom: 8px;
  font-size: 14px;
}
.look-more > .my-cell-right {
  color: #ff1c34;
  font-size: 14px;
}
.detail-show > img {
  width: 100%;
}
.my-button {
  width: 100%;
  height: 100%;
  background-color: #f00;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.my-button {
  position: relative;
}
.my-button::before {
  opacity: 0;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
}
.is-down::before {
  opacity: 0.1;
}
.scroll-con {
  overflow: hidden;
  position: absolute;
  top: 46px;
  bottom: 48px;
  left: 0;
  right: 0;
}
.popup{
  overflow-y: inherit;
}
.pop-top{
  padding: 0 12px;
  font-size: 14px;
  color: #666;
}
.pop-imgbox{
  position: relative;
  z-index: 9999;
  display: flex;
  align-items: flex-end;
  height:61px;
  /* transform: translateY(-34px); */
  /* margin-top: -34px; */
}
.pop-imgbox .price{
  color:var(--color-high-text);
  font-size: 14px;
  padding-left: 107px;
}
.pop-imgbox .price::before{
  content: '¥';
  font-size: 12px;
}
.pop-avatar{
  width: 95px;
  height: 95px;
  border-radius: 4px;
  position: absolute;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, .8); */
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  top: -34px;
}
.pop-top .tips{
  color: #666;
  font-size: 14px;
  line-height: 32px;
}
.pop-value-col{
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.pop-tags{
  padding: 5px 28.5px;
  border: 1px solid var(--color-high-text);
  margin-right: 5px;
  border-radius: 4px;
}
.pop-step{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.pop-bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
