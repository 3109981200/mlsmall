<!--详情页评论组件-->
<template>
  <div class="comment">
    <div class="comment-top" @click="handleClick">
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
  //   console.log(this.rateInfo)
    this.rateInfo.list.map(item => {
      item.created = formatDate(item.created)
    })
  },
  methods: {
    handleClick () {
    //  console.log('handleClick')
    //  console.log(this.$route)
      this.$router.push({
        path: '/rate/list',
        query: {
          itemId: this.$route.query.id
        }
      })
    }
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
      font-size .75rem
      color #999
      padding-top .625rem
    &-tags
      display flex
      flex-wrap wrap
      align-items center
      font-size .75rem
      padding .625rem 0
      div
        padding .75rem .3125rem 0 0
      span
        padding .1875rem .3125rem
        border-radius .125rem
        background-color #f6f6f6
      .positive
        color: #FF2255
        background-color: #FFE8EE
    &-item
      padding 1.25rem 0
      border-bottom 1px solid #eee
      &-top
        display flex
        align-items center
        padding-bottom .625rem
        img
          width 1.875rem
          height 1.875rem
          border-radius 100%
          margin-right .625rem
      &-content
        font-size .875rem
        padding-bottom .625rem
        line-height 1.25rem
      &-date
      &-info
        font-size .75rem
        color #999
        padding-bottom .625rem
        span
          margin-right .625rem
    .explain
      font-size .875rem
      color #999
      border-top 1px #ddd dotted
      padding-top .625rem
      line-height 1.25rem
  .arrow-right
    img
      width 1rem
      height 1rem
      vertical-align middle
</style>
