<template>
  <Recommend>
    <RecommendItem v-for="(item,index) in recommendData" :key="index">
      <div slot="rec-img"><img :src="item.image" alt=""></div>
      <div slot="rec-text">{{item.title}}</div>
    </RecommendItem>
  </Recommend>
</template>

<script>
import Recommend from 'components/common/recommend/Recommend'
import RecommendItem from 'components/common/recommend/RecommendItem'
export default {
  name: 'BannerRecommend',
  props: {
    recommendData: {
      Type: Array
    }
  },
  data () {
    return {
    }
  },
  components: {
    Recommend,
    RecommendItem
  },
  created () {
    console.log(this.recommendData)
  }
}
</script>

<style scoped lang="stylus">
.recommend
  display flex
  .recommend-item
    flex 1
    text-align center
</style>
