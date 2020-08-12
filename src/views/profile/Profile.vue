<template>
    <div class="profile">
      <ProfileHead :homeProfile="homeProfile"></ProfileHead>
      <ProfileBlockInfo :blockInfo="blockInfo"/>
      <div class="exit">退出登录</div>
      <!--<ProfileNavBar/>-->
    </div>
</template>

<script>
import ProfileHead from './profileComps/ProfileHead'
import ProfileBlockInfo from './profileComps/ProfileBlockInfo'
import { profileData } from '@/service/api'
export default {
  name: 'Profile',
  data () {
    return {
      homeProfile: {},
      blockInfo: {}
    }
  },
  components: {
    ProfileHead,
    ProfileBlockInfo
  },
  created () {
    this.getPageData()
  },
  methods: {
    getPageData () {
      profileData().then(res => {
        // console.log(res)
        this.homeProfile = res.data.homeProfile || {}
        this.blockInfo = res.data.blockInfo || {}
        console.log(this.blockInfo)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.profile
  background #f6f6f6
  margin-bottom 60px
.exit
  background #ff5777
  color #FFF
  text-align center
  padding 10px 0
  margin 0 10px
</style>
