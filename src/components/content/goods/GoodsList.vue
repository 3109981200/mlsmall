<template>
<div class="goods">
  <waterfall :data="goods">
    <GoodsListItem v-for="(item,index) in goods" :goodsItem="item" :key="index"></GoodsListItem>
  </waterfall>
</div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goods: {
      Type: Array
    }
  },
  data () {
    return {
    }
  },
  components: {
    GoodsListItem
  },
  created () {
    // console.log(this.goods)
  }
}
</script>

<style scoped lang="stylus">
.goods
  display flex
  flex-wrap wrap
  padding 2px
</style>
