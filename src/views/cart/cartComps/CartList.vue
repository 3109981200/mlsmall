<template>
<div class="cart-list">
  <BScroll ref="scroll" class="content" :probeType="scrollProbeType" :scrollClick="scrollClick">
    <div v-if="cartLists.length!=0">
      <div class="order-list" >
        <CartListItem ref="cartItem" :cartItem="item" :index="index" v-for="(item, index) in cartLists" :key="index" />
      </div>
    </div>
    <div v-else class='none'>
      <img :src="noneImg" alt="">
      <p>暂无商品 <router-link to="/home" tag="a">去购物</router-link></p>
    </div>
  </BScroll>
  <CartListBar/>
</div>
</template>

<script>
import BScroll from 'components/common/bscroll/BScroll'
import CartListItem from './CartListItem'
import CartListBar from './CartListBar'
import { mapState } from 'vuex'
export default {
  name: 'CartList',
  components: {
    BScroll,
    CartListItem,
    CartListBar
  },
  data () {
    return {
      scrollProbeType: 3,
      scrollClick: true,
      noneImg: require('assets/img/common/none.png')
    }
  },
  computed: {
    ...mapState({
      cartLists: state => state.cartList
    })
  },
  methods: {

  },
  created () {

  }
}
</script>

<style scoped lang="stylus">

.content
    position absolute
    top 44px
    bottom 49px
    left 0
    right 0
    padding-top 10px
    background #F6f6f6
.none
  text-align center
  color #dcdcdc
  img
    width 100%
  a
    color #ff5777
    text-decoration underline
</style>
