<template>
  <div class="pulldown">
    <div ref="bsWrapper" class="pulldown-bswrapper">
      <div class="pulldown-scroller">
        <div class="pulldown-wrapper" v-show="pullDown">
          <div v-show="beforePullDown">
            <span style="font-size:12px">Pull Down and refresh</span>
          </div>
          <van-loading v-if="!beforePullDown" :size="24">loading...</van-loading>
        </div>
        <slot></slot>
        <div v-if="pullUp && showMore" class="up-load">
          <div v-if="pullUpStatus == 'ready'" class="after-trigger">
            <span>Pull on loading</span>
          </div>
          <div v-else-if="pullUpStatus == 'loading'" class="after-trigger">
            <van-loading size="24px">Loading...</van-loading>
          </div>
          <div v-else-if="pullUpStatus == 'nomore'" class="after-trigger">
            <span>No more</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'
BScroll.use(PullDown)
BScroll.use(Pullup)
export default {
  props: {
    pullDown: {
      type: Boolean,
      default: false,
    },
    probeType: {
      type: Number,
      default() {
        return 0
      },
    },
    pullDownTime: {
      type: Number,
      require: false,
      default() {
        return 800
      },
    },
    pullDownTimeStop: {
      type: Number,
      require: Number,
      default() {
        return 600
      },
    },
    pullDownThreshold: {
      type: Number,
      default() {
        return 70
      },
    },
    pullDownStop: {
      type: Number,
      default() {
        return 56
      },
    },
    pullUp: {
      type: Boolean,
      default: false,
    },
    showMore: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      beforePullDown: true,
      pullUpStatus: 'ready',
    }
  },
  created() {
    this.bscroll = null
  },
  mounted() {
    this.initBscroll()
  },
  methods: {
    initBscroll() {
      this.bscroll = new BScroll(this.$refs.bsWrapper, {
        scrollY: true,
        click: true,
        probeType: this.probeType,
        bounceTime: this.pullDownTime,
        pullDownRefresh: this.pullDown && {
          threshold: this.pullDownThreshold,
          stop: this.pullDownStop,
        },
        pullUpLoad: this.pullUp,
      })
      if (this.probeType != 0) {
        this.bscroll.on('scroll', this.scrollHandler)
      }
      if (this.pullDown) {
        this.bscroll.on('pullingDown', this.pullingDownHandler)
      }
      if (this.pullUp) {
        this.bscroll.on('pullingUp', this.pullingUpHandler)
      }
    },
    scrollHandler(pos) {
      this.$emit('scroll', pos)
    },
    pullingDownHandler() {
      this.beforePullDown = false
      this.$emit('pullDownRefresh')
    },
    pullingDownCompulete() {
      this.bscroll.finishPullDown()
      this.bscroll.refresh()
      setTimeout(() => {
        this.beforePullDown = true
      }, 500)
    },
    // 回到顶部方法
    scrollTo(x, y, time = 300) {
      this.bscroll && this.bscroll.scrollTo(x, y, time)
    },
    //重置scroll方法
    refresh() {
      this.bscroll && this.bscroll.refresh()
    },
    // 上拉加载更多
    pullingUpHandler() {
      this.pullUpStatus = 'loading'
      this.$emit('pullingUp')
    },
    // 上拉加载完成
    pullingUpFinish() {
      this.bscroll.finishPullUp()
      this.bscroll.refresh()
      this.isPullUpLoad = false
    },
    // 没有更多了
    noMore() {
      this.pullUpStatus = 'nomore'
    },
    hasMore() {
      this.pullUpStatus = 'ready'
      this.pullingUpFinish()
    },
  },
}
</script>

<style scoped>
.pulldown-bswrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.pulldown-wrapper {
  position: absolute;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(-100%) translateZ(0);
  text-align: center;
  color: #999;
}
.before-trigger,
.after-trigger {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  color: #9a9a9a;
}
.up-load {
  font-size: 12px;
}
</style>
