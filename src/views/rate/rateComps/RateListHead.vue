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
      border-bottom 10px solid rgba(214,214,214,0.361)
      &-score
        background #fef0f0
        font-size 14px
        padding 15px 10px
        span
          color #ff5777
      &-tag
        padding 10px 20px 0
        .tag1
          height auto
      &-tags
        display flex
        flex-wrap wrap
        align-items center
        height 70px
        overflow hidden
        &-item
          padding 5px 10px
          font-size 14px
          background-color #fef0f0
          border-radius 3px
          margin-bottom 10px
          margin-right 8px
          &:first-child
            background-color #ff5777
            color #FFF
            font-size 15px
            border-radius 3px
          span
            margin-right 5px
      .more
        background-image url("~assets/img/common/more.svg")
        background-size cover
        width 20px
        height 20px
        margin 0 auto
</style>
