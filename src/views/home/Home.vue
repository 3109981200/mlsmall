<template>
    <div>
      <navBar class="nav-home"><div slot="center">购物街</div></navBar>
      <BannerSwiper :bannerImg="bannerImg" />
      <BannerRecommend :recommendData="recommend" class="banner-recommend"/>
    </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
import BannerSwiper from './homeComps/BannerSwiper'
import BannerRecommend from './homeComps/BannerRecommend'
import { getHomeMultidata } from 'service/home'

export default {
  name: 'Home',
  components: {
    navBar,
    BannerSwiper,
    BannerRecommend
  },
  data () {
    return {
      bannerImg: [],
      recommend: []
    }
  },
  created () {
    getHomeMultidata().then(res => {
      console.log(res)
      this.bannerImg = res.data.banner.list || []
      this.recommend = res.data.recommend.list || []
      console.log(this.bannerImg)
      console.log(this.recommend)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped lang="stylus">
.nav-home
  background #ff5777
  color #FFF
.banner-recommend
  border-bottom 5px solid #d6d6d6
</style>
