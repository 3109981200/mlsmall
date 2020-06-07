<template>
 <div>details:{{this.goodsID}}</div>
</template>

<script>
import { getGoodsDetails } from 'service/home'

export default {
  name: 'GoodsDetails',
  data () {
    return {
      id: null,
      details: null,
      detail: null
    }
  },
  created () {
    this.id = this.goodsID
    this.getDetails()
  },
  computed: {
    goodsID () {
      return this.$route.query.id
    }
  },
  methods: {
    getDetails () {
      getGoodsDetails().then(res => {
        this.details = res.list || []
        res.list.map(item => {
          if (item.itemInfo.itemId === this.goodsID) {
            this.detail = item
          }
        })
        console.log(this.detail)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
