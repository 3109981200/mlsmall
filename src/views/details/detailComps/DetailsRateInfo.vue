<!--详情页评论组件-->
<template>
  <div class="comment">
    <div class="comment-top">
      <div class="text">买家评论 {{rateInfo.cRate}} | 销量 {{rateInfo.sales}}</div>
      <div class="arrow-right"><img :src="arrowRight" alt=""></div>
    </div>
    <div class="comment-tags">
      <div v-for="(item, index) in rateInfo.rateTags" :key="index">
        <span :class="{positive: item.emotion === 'positive'}">{{item.value}} ({{item.num}})</span>
      </div>
    </div>
    <div class="comment-item" v-for="(item, index) in rateInfo.list.slice(0,2)" :key="index">
      <div class="comment-item-top">
        <div class="avatar"><img :src="item.user.avatar" alt=""></div>
        <div class="name">{{item.user.uname}}</div>
      </div>
      <div class="comment-item-content">
        <div>{{item.content}}</div>
      </div>
      <div class="comment-item-date">
        {{item.created}}
      </div>
      <div class="comment-item-info" v-if="item.extraInfo">
        <span v-for="(val, index) in item.extraInfo" :key="index">{{val}}</span>
      </div>
      <div class="explain" v-if="item.explain">{{item.explain}}</div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/untis'
export default {
  name: 'DetailsRateInfo',
  data () {
    return {
      arrowRight: require('assets/img/common/arrow-right.svg')
    }
  },
  props: {
    rateInfo: {
      Type: Object,
      default: {}
    }
  },
  created () {
    this.rateInfo.list.map(item => {
      item.created = formatDate(item.created)
    })
  }
}
</script>

<style scoped lang="stylus">
  .comment
    padding 10px 10px 0
    border-bottom 10px solid rgba(214,214,214,0.361)
    &-top
      display flex
      justify-content space-between
      font-size 12px
      color #999
      padding-top 10px
    &-tags
      display flex
      flex-wrap wrap
      align-items center
      font-size 12px
      padding 10px 0
      div
        padding 12px 5px 0 0
      span
        padding 3px 5px
        border-radius 2px
        background-color #f6f6f6
      .positive
        color: #FF2255
        background-color: #FFE8EE
    &-item
      padding 20px 0
      border-bottom 1px solid #eee
      &-top
        display flex
        align-items center
        padding-bottom 10px
        img
          width 30px
          height 30px
          border-radius 100%
          margin-right 10px
      &-content
        font-size 14px
        padding-bottom 10px
        line-height 20px
      &-date
      &-info
        font-size 12px
        color #999
        padding-bottom 10px
        span
          margin-right 10px
    .explain
      font-size 14px
      color #999
      border-top 1px #ddd dotted
      padding-top 10px
      line-height 20px
  .arrow-right
    img
      width 16px
      height 16px
      vertical-align middle
</style>
