<template>
    <div class="shopping-cart">
      <CartNavbar></CartNavbar>
      <CartList/>
    </div>
</template>

<script>
import CartNavbar from './cartComps/CartNavbar'
import CartList from './cartComps/CartList'
export default {
  name: 'ShopCart',
  data () {
    return {

    }
  },
  components: {
    CartNavbar,
    CartList
  },
  computed: {

  },
  created () {

  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
.shopping-cart
  background #f6f6f6
</style>
