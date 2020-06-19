<!--详情页颜色、尺码选择组件-->
<template>
<div class="price">
  <el-drawer
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose">
    <div slot="title"></div>
    <span>我来啦!</span>
  </el-drawer>
</div>
</template>

<script>
export default {
  name: 'DetailsPriceDrawer',
  data(){
    return{

    }
  },
  props:{

  }
}
</script>

<style scoped lang="stylus">

</style>
