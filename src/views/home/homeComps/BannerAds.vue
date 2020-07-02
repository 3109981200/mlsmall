<template>
  <div class="ads">
    <div class="ads-item" v-for="(item,index) in adsData" :key="index">
      <img :src="item.backgroundImage" alt="">
      <p>{{item.title}}</p>
      <div class="time" v-show="index === 0">
        <span class="h">{{hours}}</span>:<span class="m">{{minutes}}</span>:<span class="s">{{seconds}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerAds',
  props: {
    adsData: {
      Type: Array
    }
  },
  data () {
    return {
      hours: '00',
      minutes: '00',
      seconds: '00'
    }
  },
  mounted () {
    this.begin()
  },
  methods: {
    begin () {
      const now = new Date().getTime()
      const end = new Date().getTime() + 7200000
      let sec = end - now
      setInterval(() => {
        sec -= 1000
        this.hours = this.cover(parseInt(sec / 1000 / 60 / 60 % 24))
        this.minutes = this.cover(parseInt(sec / 1000 / 60 % 60))
        this.seconds = this.cover(parseInt(sec / 1000 % 60))
      }, 1000)
    },
    cover (s) {
      return s > 10 ? s : '0' + s
    }
  }
}
</script>

<style scoped lang="stylus">
.ads
  display flex
  padding .625rem .3125rem
  .ads-item
    flex 0 0 25%
    padding .3125rem
    align-items center
    text-align center
    position relative
    font-size .875rem
    img
      width 100%
    p
      position absolute
      bottom .625rem
      left 0
      right 0
      color #FFF
      font-weight 700
    .time
      position absolute
      bottom 1.875rem
      left 0
      right 0
      font-weight 700
      span
        color #FFF
        background rgba(0, 0, 0, 0.8)
        padding 0 1px
</style>
