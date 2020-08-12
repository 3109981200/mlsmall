<template>
  <div class="block-info">
    <ProfileBlockInfoItem :blockInfo="item" v-for="(item, index) in blockInfo" :key="index" :class="{'block-info-item-top' : index==0, 'block-info-item-cart': index==1}"/>
  </div>
</template>

<script>
import ProfileBlockInfoItem from './ProfileBlockInfoItem'
export default {
  name: 'ProfileBlockInfo',
  props: {
    blockInfo: {
      Type: Array,
      default: []
    }
  },
  components: {
    ProfileBlockInfoItem
  },
  created () {
    console.log(this.blockInfo)
  }
}
</script>

<style scoped lang="stylus">
.block-info
  padding 0 10px 10px
</style>
