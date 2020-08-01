<template>
    <div class="shopping-cart">
      <CartNavbar></CartNavbar>
      <BScroll ref="scroll" class="content" :probeType="scrollProbeType" :scrollClick="scrollClick">
      <div class="order-list" v-if="cartLists.length!=0">
        <div class="order-list-item" v-for="(item, index) in cartLists" :key="index">
          <div class="order-list-item-shop">
            <div><input type="checkbox" id="checkbox"><label for="checkbox" class="label"></label></div>
            <div class="title"><img :src="item.shopInfo.logo" alt="">{{item.shopInfo.name}}</div>
            <div class="delete">删除</div>
          </div>
          <div class="order-list-item-info">
            <input type="checkbox">
            <div class="order-list-item-info-img"><img :src="item.img" alt=""></div>
            <div class="order-list-item-info-title">
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
              <div class="size-color">
                <span>{{item.size}}</span>
                <span>{{item.style}}</span>
              </div>
              <div class="counter">{{item.counter}}</div>
            </div>
          </div>
        </div>
      </div>
      </BScroll>
      <TabBar class="balance">立即结算</TabBar>
    </div>
</template>

<script>
import CartNavbar from './cartComps/CartNavbar'
import TabBar from 'components/common/tabbar/TabBar'
import BScroll from 'components/common/bscroll/BScroll'
import { mapState } from 'vuex'
export default {
  name: 'ShopCart',
  data () {
    return {
      scrollProbeType: 3,
      scrollClick: true
    }
  },
  components: {
    CartNavbar,
    TabBar,
    BScroll
  },
  computed: {
    ...mapState({
      cartLists: state => state.cartList
    })
  },
  created () {
    console.log(this.cartLists)
  }
}
</script>

<style scoped lang="stylus">
.balance
  background #ff5777
  color #FFF
  text-align center
  font-size 1rem
  justify-content center
.content
  position absolute
  top 2.75rem
  bottom 3.0625rem
  left 0
  right 0
  background rgba(214,214,214,0.361)
input[type='checkbox']
  position absolute
  visibility hidden
.label
    position:absolute;
    width: 16px;
    height: 16px;
    border: 1px solid #A6A6A6;
    border-radius: 50%;
    background-color:#DEDEDE;
    &:after
      content: "";
      position: absolute;
      left: 2px;
      top:2px;
      width: 9px;
      height: 4px;
      border: 2px solid #424242;
      border-top-color: transparent;
      border-right-color: transparent;
      transform: rotate(-45deg);
      -ms-transform: rotate(-60deg);
      -moz-transform: rotate(-60deg);
      -webkit-transform: rotate(-60deg);
.order-list
  &-item
    background #FFF
    margin .5rem
    border-radius .5rem
    padding .5rem
    &-shop
      display flex
      width 100%
      justify-content flex-start
      align-items center
      height 2rem
      line-height 2rem
      position relative
      .title
        margin-left 1rem
        img
          width 1.25rem
          height 1.25rem
          vertical-align middle
      .delete
        position absolute
        right .5rem
    &-info
      display flex
      width 100%
      justify-content flex-start
      align-items center
      &-img
        width 5rem
        height 0
        position relative
        padding-bottom 5rem
        overflow hidden
        flex-shrink 0
        img
          width 100%
          height auto
          position absolute
          top 50%
          left 0
          transform translateY(-50%)
          vertical-align middle
    &-title
      .title
        font-size .875rem
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 1
      .desc
        font-size .75rem
    &-counter
      width 6.25rem
      flex-shrink 0
</style>
