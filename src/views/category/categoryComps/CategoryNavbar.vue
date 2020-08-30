<template>
  <NavBar class="category-bar">
    <div slot="left" @click="goBack" class="left">
      <img :src="backImg" alt="">
    </div>
    <div slot="center">
      <el-input
        :placeholder="searchKey"
        prefix-icon="el-icon-search"
        @focus="onFocus"
        v-model="searchKey">
      </el-input>
    </div>
    <div slot="right" @click="goCart" class="right">
      <img :src="carImg" alt="">
    </div>
  </NavBar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'CategoryNavbar',
  data () {
    return {
      searchKey: '连衣裙',
      backImg: require('assets/img/common/back.svg'),
      carImg: require('assets/img/tabbar/shopcart.svg')
    }
  },
  components: {
    NavBar
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    goCart () {
      this.$router.push('/cart/cartList')
    },
    onFocus () {
      this.$router.push({
        name: 'Search',
        params: {
          searchKey: this.searchKey
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.category-bar
  position relative
  z-index 10
  background #FFF
  img
    width 20px
    height 20px
    vertical-align middle
  .left
    text-align left
    margin-left 10px
  .right
    text-align right
    margin-right 10px
  /deep/ .el-input__inner
    background #f6f6f6
    height 30px
    line-height 30px
    font-size 12px
    &:focus
      border-color #ff5777
</style>
