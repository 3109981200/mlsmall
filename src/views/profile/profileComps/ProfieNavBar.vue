<template>
  <NavBar class="profileNavbar">
    <div slot="center">个人中心</div>
  </NavBar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: 'ProfieNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped lang="stylus">
.profileNavbar
  background #ff5777
  color #FFF
  font-size 16px
</style>
