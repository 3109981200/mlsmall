<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommendData" :key="index">
      <a :href="item.link">
        <div class="rec-img"><img :src="item.image" alt=""></div>
        <div class="text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
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
  created () {
    // console.log(this.recommendData)
  }
}
</script>

<style scoped lang="stylus">
  .recommend
    display flex
    padding-bottom 1.25rem
  .recommend-item
    flex 0 0 20%
    text-align center
    padding .5rem 0
  .rec-img
    img
      width 3.125rem
      margin-bottom .3125rem
  .text
    font-size .75rem
</style>
