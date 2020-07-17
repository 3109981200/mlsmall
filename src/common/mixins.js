import BackTop from 'components/common/backtop/BackTop'

// 返回顶部
export const backTopMixin = {
  data () {
    return {
      backTopImgUrl: require('assets/img/common/back-top.svg'),
      showBackTop: false // 返回顶部
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}

// 向右箭头
export const arrowRightMixin = {
  data () {
    return {
      arrowRight: require('assets/img/common/arrow-right.svg')
    }
  }
}
