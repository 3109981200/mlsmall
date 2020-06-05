<template>
  <div>分类</div>
</template>

<script>
import { getGoodsDetails } from 'service/home'

export default {
  name: 'Category',
  data () {
    return {
      id: '1mhbuts',
      details: null
    }
  },
  created () {
    getGoodsDetails().then(res => {
      console.log(res.list)
      res.list.map(item => {
        if (item.itemInfo.itemId === this.id) {
          this.details = item
        }
      })
      console.log(this.details)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
