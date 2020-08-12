<template>
  <div class="order-list-item">
    <div class="order-list-item-shop">
      <div class="title"><img :src="cartItem.shopInfo.logo" alt="">{{cartItem.shopInfo.name}}</div>
      <div class="delete" @click="deleteClick(index)">移除</div>
    </div>
    <div class="order-list-item-info">
      <div class="check">
        <label>
          <input type="checkbox" class="checkbox" :checked="cartItem.checked" @click="checkClick">
          <span class="check-mark"></span>
        </label>
      </div>
      <div class="order-list-item-info-img"><img :src="cartItem.img" alt=""></div>
      <div class="order-list-item-info-title">
        <div class="title">{{cartItem.title}}</div>
        <!-- <div class="desc">{{item.desc}}</div>-->
        <div class="size-color">
          <span>{{cartItem.size}}</span><span>.</span>
          <span>{{cartItem.style}}</span>
        </div>
        <div class="total">
          <div class="counter">数量: {{cartItem.counter}}</div>
          <div class="price">￥{{total}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CartListItem',
  props: {
    cartItem: {
      Type: Array,
      default: []
    },
    index: {
      Type: Number
    }
  },
  computed: {
    ...mapState({
      cartList: state => state.cartList
    }),
    total () {
      return (this.cartItem.price * this.cartItem.counter).toFixed(2)
    }
  },
  methods: {
    checkClick () {
      this.cartItem.checked = !this.cartItem.checked
    },
    deleteClick (index) {
      console.log('deleteClick' + index)
      this.$store.dispatch('removeCartItem', index).then(res => {
        this.$toast.show(res)
      })
    }
  },
  created () {
    // console.log(this.cartItem)
  }
}
</script>

<style scoped lang="stylus">
  .order-list
    &-item
      background #FFF
      margin 8px
      border-radius 8px
      padding 8px
      box-shadow 0 1px 1px rgba(50,50,50,0.1)
      &-shop
        display flex
        width 100%
        justify-content flex-start
        align-items center
        height 32px
        line-height 32px
        position relative
        .title
          img
            width 20px
            height 20px
            vertical-align middle
            border-radius 10px
            margin-right 10px
        .delete
          position absolute
          right 8px
      &-info
        display flex
        width 100%
        justify-content flex-start
        align-items center
        .check
          position relative
          width 30px
          height 80px
          flex-shrink 0
        .checkbox
          display none
          &:checked + .check-mark
            background-color #ff5777
            &:after
              content "";
              position absolute
              width 10px;
              transition .1s
              height 5px
              background #ff5777
              top 45%
              left 50%
              border-left 2px solid #fff
              border-bottom 2px solid #fff
              transform translate(-50%, -50%) rotate(-45deg)
        .check-mark
          width 20px
          height 20px
          position absolute
          left 0
          display inline-block
          top 50%
          transform translateY(-50%)
          border-radius 50%
          border 1px solid #ff5777
        &-img
          width 80px
          height 0
          position relative
          padding-bottom 80px
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
          padding 5px 10px
          .title
            font-size 14px
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
          .size-color
            font-size 12px
            padding 10px 0
            span
              background #ff8198
              color #FFF
              padding 2px
          .desc
            font-size 12px
          .total
            display flex
            justify-content space-between
            align-items flex-end
            .counter
              font-size 14px
              .count-text
                width 50px
            .price
              font-size 18px
              color #ff5777
              font-weight 700
</style>
