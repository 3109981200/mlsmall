<template>
  <div class="banner">
    <swiper ref="bannerSwiper" :options="swiperOptions">
      <swiperSlide v-for="(item,index) in bannerImg" :key="index">
        <a :href="item.link"><img :src="item.image" :alt="item.title" @load="imgLoad"></a>
      </swiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'BannerSwiper',
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
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.bannerSwiper.$swiper
    }
  },
  mounted () {
    // console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
  },
  methods: {
    imgLoad () {
      if (!this.isLoad) { // 通过isLoad 设置只监听一次
        this.$emit('swiperImgLoad')
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
      display block
  .swiper-container
    --swiper-pagination-color #ff5777
</style>
