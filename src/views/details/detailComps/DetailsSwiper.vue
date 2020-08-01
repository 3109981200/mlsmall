<!--详情页头部轮播图组件-->
<template>
  <div class="banner">
    <swiper ref="bannerSwiper" :options="swiperOptions">
      <swiperSlide v-for="(item,index) in bannerImg" :key="index">
        <a :href="item.link"><img :src="item" @load="imgLoad"></a>
      </swiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'DetailsSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      isLoad: false
    }
  },
  props: {
    bannerImg: {
      Type: Array,
      default: function () {
      }
    }
  },
  components: {
    Swiper, SwiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.bannerSwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 1000, false)
  },
  methods: {
    imgLoad () {
      // 只执行一次
      if (!this.isLoad) {
        this.$emit('bannerImgLoaded')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.banner
  img
    width 100%
.swiper-container
  width 100%
  height 500px
</style>
