<template>
  <div class="rate-head">
    <!--评分-->
    <div class="rate-head-score">综合评分  <span>{{averageScore}}</span></div>
    <!--tag信息-->
    <div class="rate-head-tag">
      <div class="rate-head-tags" :class="{tag1: show}">
        <div class="rate-head-tags-item" v-for="(item, index) in rateTags" :key="index" @click="tagsClick(index)">
          <span>{{item.value}}</span> <span v-if="item.num!==0">{{item.num}}</span>
        </div>
      </div>
      <div class="more" @click="showMore" v-show="!hide"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RateListHead',
  props: {
    averageScore: {
      Type: Number,
      default: 0
    },
    rateTags: {
      Type: Array,
      default: []
    }
  },
  data () {
    return {
      show: false, // 显示隐藏tag
      hide: false // 隐藏more
    }
  },
  methods: {
    // 显示更多tags
    showMore () {
      this.show = true
      this.hide = true
    },
    tagsClick (index) {
      console.log('tagsClick' + index)
    }
  }
}
</script>

<style scoped lang="stylus">
  .rate
    &-head
      border-bottom .625rem solid rgba(214,214,214,0.361)
      &-score
        background #fef0f0
        font-size .875rem
        padding .9375rem .625rem
        span
          color #ff5777
      &-tag
        padding .625rem 1.25rem 0
        .tag1
          height auto
      &-tags
        display flex
        flex-wrap wrap
        align-items center
        height 4.375rem
        overflow hidden
        &-item
          padding .3125rem .625rem
          font-size .875rem
          background-color #fef0f0
          border-radius .1875rem
          margin-bottom .625rem
          margin-right .5rem
          &:first-child
            background-color #ff5777
            color #FFF
            font-size .9375rem
            border-radius .1875rem
          span
            margin-right .3125rem
      .more
        background-image url("~assets/img/common/more.svg")
        background-size cover
        width 1.25rem
        height 1.25rem
        margin 0 auto
</style>
