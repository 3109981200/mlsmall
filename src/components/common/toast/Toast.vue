<template>
  <div class="message" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message = 'Toast消息', time = 1500) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, time)
    }
  }
}
</script>

<style scoped lang="stylus">
  .message
    background rgba(0,0,0,.7)
    color #FFF
    position absolute
    top 50%
    left 50%
    text-align center
    transform translateX(-50%)
    z-index 2500
    padding 12px
    border-radius 5px
/*  @-webkit-keyframes fadeOut !*设置内容由显示变为隐藏*!
    0%
      opacity 1
    100%
      opacity 0
  .fadeOut
    -webkit-animation: fadeOut 3s ease*/
</style>
