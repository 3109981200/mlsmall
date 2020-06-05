<!--将better-scroll插件进行封装，方便维护和使用-->
<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  props: {
    probeType: {
      Type: Number,
      default: 0
    },
    pullUpLoad: {
      Type: Boolean,
      default: false
    },
    scrollClick: {
      Type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // 创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType, // 获取滚动位置属性
      click: this.scrollClick,
      pullUpLoad: this.pullUpLoad // 可以上拉加载，可配置距离threshold 触发加载，上拉加载数据加载完毕后，需要执行 finishPullUp
    })
    // 监听滚动位置
    if (this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit('scroll', position)
      })
    }

    // 监听上拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        console.log('加载更多')
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh () {
      // console.log('222')
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
