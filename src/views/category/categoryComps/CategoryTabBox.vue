<template>
  <div class="left-tab-box">
      <div class="left-tab-box-item" :class="{active: currentIndex===index}" @click="itemClick(index)" v-for="(item, index) in category" :key="index">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'CategoryTabBox',
  props: {
    category: {
      Type: Array,
      default () {
        return []
      }
    }
  },
  components: {

  },
  data () {
    return {
      currentIndex: 0
    }
  },
  created () {

  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
    },
    getCategory () {

    }
  }
}
</script>

<style scoped lang="stylus">
.left-tab-box
  position fixed
  width 100px
  height calc(100vh - 44px)
  background #f6f6f6
  overflow-y scroll
  &::-webkit-scrollbar
    display none
  &-item
    font-size 14px
    height 44px
    line-height 44px
    text-align center
  .active
    background #ffffff
    color #ff5777
    border-left 3px solid #ff5777
</style>
