<template>
    <div class="tabs">
      <div class="tabs-item" v-for="(title,index) in titles" :key="index" @click="itemClick(index)" :class="{active: index === currentIndex}">
        <span>{{title}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      // console.log(index)
      this.$emit('tabsClick', index)
    }
  }
}
</script>

<style scoped lang="stylus">
.tabs
  display flex
  text-align center
  background #FFF
  .tabs-item
    flex 1
    height 44px
    line-height 44px
  .tabs-item.active
    color #ff5777
    span
      padding: 5px
      border-bottom 2px solid #ff5777
</style>
