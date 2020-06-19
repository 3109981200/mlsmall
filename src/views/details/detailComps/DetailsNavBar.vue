<!--详情页头部导航栏组件-->
<template>
  <NavBar>
      <div slot="left" class="go-back" @click="goBack">
        <img :src="backImg" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item" v-for="(item,index) in titles" :key="index"
             :class="{active: currentIndex===index}" @click="itemClick(index)">{{item}}</div>
      </div>
  </NavBar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailsNavBar',
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
      backImg: require('assets/img/common/back.svg')
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
    },
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus">
.go-back
  img
    width 24px
    height 24px
    vertical-align middle
.title
  display flex
  &-item
    flex 1
.active
  color #ff5777
</style>
