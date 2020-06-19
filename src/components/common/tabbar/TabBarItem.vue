<template>
    <div class="tabBar-items" @click="itemClick">
      <div v-show="!isActive"><slot name="item-icon"></slot></div>
      <div v-show="isActive"><slot name="item-icon-active"></slot></div>
      <div :style="isActiveColor"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  props: {
    path: {
      Type: String,
      default: function () {}
    },
    activeColor: String,
    isActive1: {
      Type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1 || this.isActive1
    },
    isActiveColor () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick () {
      // console.log(this.path)
      // console.log(this.$router)
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped lang="stylus">
  .tabBar-items
    flex 1
    text-align center
    img
      width 24px
      height 24px
      vertical-align middle
      margin-bottom 2px
</style>
