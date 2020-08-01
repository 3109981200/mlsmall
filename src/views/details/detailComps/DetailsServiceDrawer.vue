<!--详情页详细服务信息组件-->
<template>
    <div class="services">
      <el-drawer :visible.sync="showServiceDrawer" :direction="direction" :before-close="handleClose">
        <div slot="title" class="title">服务说明</div>
        <div class="content">
          <div class="content-item" v-for="(item,index) in service" :key="index">
            <div class="content-item-title">{{item.name}}</div>
            <div class="content-item-desc" v-if="item.content">{{item.content}}</div>
          </div>
        </div>
      </el-drawer>
    </div>
</template>

<script>
export default {
  name: 'DetailsServiceDialog',
  data () {
    return {
      direction: 'btt'
    }
  },
  props: {
    showServiceDrawer: {
      Type: Boolean
    },
    service: {
      Type: Array
    }
  },
  methods: {
    handleClose () {
      this.$emit('closeServiceDrawer', false)
    }
  }
}
</script>

<style scoped lang="stylus">
.title
  text-align center
  color #999
.content
  padding 15px
  font-size 13px
  text-align left
  &-item
    border-bottom 1px solid #a8a8a8
    margin-bottom 20px
    &:last-child
      border none
      margin-bottom 0
    &-title
      color #666
      padding-bottom 10px
    &-desc
      padding-bottom 10px
      color #999
      line-height 20px
.services >>> .el-drawer
    height auto!important
.services >>> .el-drawer__header
      margin 0
      padding 20px
</style>
