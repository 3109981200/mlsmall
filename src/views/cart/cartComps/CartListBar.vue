<template>
  <div class="balance">
    <div class="check">
      <label>
        <span>全选</span>
        <input type="checkbox" class="checkbox" :checked="isSelectAll" @click="selectAll">
        <span class="check-mark"></span>
      </label>
    </div>
    <div class="totalPrice">
      合计:<span> ￥{{totalPrice}}</span>
      <div class="toBalance" @click="totalCountClick">去结算({{totalCount}})</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CartListBar',
  computed: {
    ...mapState({
      cartLists: state => state.cartList
    }),
    totalPrice () {
      // 遍历写法
      /*      let total = 0
          this.cartLists.map(item => {
            if (item.checked) {
              total += item.price * item.counter
            }
          })
          return total */
      // 箭头函数过滤器写法
      return this.cartLists.filter(item => {
        return item.checked // 过滤器返回选中的元素
      }).reduce((preValue, item) => { // 对选中的元素进行相加
        return preValue + item.price * item.counter
      }, 0).toFixed(2) // 结果保留2位小数
    },
    totalCount () {
      return this.cartLists.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll () { // 全选按钮状态
      // 购物车为空时为不选中状态
      if (!this.cartLists.length) {
        return false
      }
      // find查找到没有选中的商品， 只要有一个商品为不选中状态则为不选中状态
      return !this.cartLists.find(item => !item.checked)
    }
  },
  methods: {
    selectAll () {
      // 如果全部都是选中状态，点击之后则为全部不选中
      // 如果全部为不选中或者部分选中，点击则为全部选中状态
      if (this.isSelectAll) { // 如果为全部选中
        this.cartLists.forEach(item => {
          item.checked = false
        })
      } else {
        this.cartLists.forEach(item => {
          item.checked = true
        })
      }
    },
    totalCountClick () {
      if (this.totalCount <= 0) {
        this.$toast.show('请选择要结算的商品！', 1000)
      } else {
        this.$toast.show('去结算页面...！', 1000)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .balance
    display flex
    background #feffe7
    font-size 16px
    justify-content space-between
    position fixed
    bottom 50px
    left 0
    right 0
    padding 0 16px
    height 40px
    align-items center
    .totalPrice
      display flex
      align-items center
      span
        font-weight 700
    .toBalance
      background #ff5777
      color #FFF
      padding 5px 10px
      border-radius 20px
      margin-left 20px
    .check
      position relative
      label
        padding-left 24px
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
</style>
