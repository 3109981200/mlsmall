<template>
    <div :style="headStyle" class="head" >
      <div class="head-box">
        <div class="head-ico">
          <img class="avatar-ico" :src="homeProfile.avatarUrl" alt="">
          <img class="member-ico" :src="homeProfile.memberCenterIcon" alt="">
        </div>
        <div class="head-title">
          <div class="username">{{homeProfile.userName}}</div>
          <img :src="homeProfile.memberBannerImage" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProfileHead',
  props: {
    homeProfile: {
      Type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    headStyle () {
      return {
        backgroundImage: 'url(' + this.homeProfile.backgroundImage + ')',
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  created () {
    // console.log(this.homeProfile)
  }
}
</script>

<style scoped lang="stylus">
.head
  background-size 100% 50%
  margin-bottom 10px
  padding 0 10px
  overflow hidden
  &-box
    margin 50px auto 0
    position relative
  &-ico
    position absolute
    left 50%
    top -30px
    transform translateX(-50%)
    margin 0 auto
    width 80px
    height 80px
    z-index 1
    border-radius 50%
    border 3px solid #FFF
  .avatar-ico
    width 100%
    border-radius 50%
  .member-ico
    width 20px
    height 20px
    position absolute
    bottom 0
    right 10px
    z-index 2
  &-title
    position relative
    background #FFF
    border-radius 8px
    padding 60px 0 0
    text-align center
    .username
      padding-bottom 10px
      font-size 16px
    img
      width 100%
      border-bottom-left-radius 8px
      border-bottom-right-radius 8px
      vertical-align bottom
</style>
