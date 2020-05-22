<template>
  <div class="banner">
    <swiper ref="bannerSwiper" :options="swiperOptions">
      <swiperSlide v-for="(item,index) in bannerImg" :key="index">
        <a :href="item.link"><img :src="item.image" :alt="item.title"></a>
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
      }
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
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
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
