<template>
<div class="search" v-loading="isLoading">
  <NavBar class="category-bar">
    <div slot="left" @click="goBack" class="left">
      <img :src="backImg" alt="">
    </div>
    <div slot="center">
      <el-input
        :placeholder="searchKey"
        prefix-icon="el-icon-search"
        :autofocus="autofocus"
        :clearable="clearable"
        v-model="searchKey">
      </el-input>
    </div>
    <div slot="right" @click="search(searchKey)" class="right">
      搜索
    </div>
  </NavBar>
  <div class="search-content">
    <div class="history">
      <div class="history-search">
        <div class="history-search-left">
          <img :src="searchIcon" alt="">
          历史搜索
        </div>
        <div class="history-search-right" @click="clearSearchHistory">
          <img :src="clearIcon" alt="">
        </div>
      </div>
      <div class="history-key" v-if="historyWord.length!==0">
        <div class="history-key-item" @click="search(item)" v-for="(item, index) in historyWord" :key="'history'+ index">{{item}}</div>
      </div>
    </div>
    <div class="history">
      <div class="history-search">
        <div class="history-search-left">
          <img :src="hotIcon" alt="">
          热门搜索
        </div>
      </div>
      <div class="history-key" v-if="hotWord.length!==0">
        <div class="history-key-item" :style="{color: item.color}" @click="search(item.query)" v-for="(item,index)  in hotWord" :key="'hot-' + index">{{item.frontword}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { hotSearchKey } from 'service/api'
export default {
  name: 'HotSearch',
  data () {
    return {
      autofocus: true,
      clearable: true,
      isLoading: false,
      searchKey: '',
      hotWord: [],
      historyWord: [],
      backImg: require('assets/img/common/back.svg'),
      searchIcon: require('assets/img/common/search.svg'),
      clearIcon: require('assets/img/common/clear.svg'),
      hotIcon: require('assets/img/common/cfav.svg')
    }
  },
  components: {
    NavBar
  },
  created () {
    this.searchKey = this.$route.params.searchKey
    this.getHotSearchKey()
    this.getSearchHistory()
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    getHotSearchKey () {
      hotSearchKey().then(res => {
        console.log(res)
        this.hotWord = res.hotWord.data || []
      }).catch(err => {
        console.log(err)
      })
    },
    search (word) {
      this.searchKey = word
      this.setSearchHistory(this.searchKey)
      this.getSearchHistory()
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$toast.show('暂无搜索结果...', 1000)
        setTimeout(() => {
          this.$router.push('/category')
        }, 1000)
      }, 1500)
      /* searchResult().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }) */
    },
    // localStorage 存储搜索历史记录
    setSearchHistory (keywords) {
      keywords = keywords.trim()
      let { historyItems } = localStorage
      if (historyItems === undefined) {
        localStorage.historyItems = keywords
      } else {
        // 无论关键字是否存在都移除， 并将新的关键字添加到首位
        const onlyItem = historyItems.split('|').filter(item => item !== keywords)
        if (onlyItem.length > 0) {
          historyItems = keywords + '|' + onlyItem.join('|')
        }
        localStorage.historyItems = historyItems
        console.log(historyItems)
      }
    },
    getSearchHistory () {
      if (localStorage.getItem('historyItems')) {
        this.historyWord = localStorage.getItem('historyItems').split('|').filter(item => item)
        console.log(this.historyWord)
      } else {
        this.historyWord = []
      }
    },
    // 清空历史记录
    clearSearchHistory () {
      localStorage.removeItem('historyItems')
      this.getSearchHistory()
    }
  }
}
</script>

<style scoped lang="stylus">
  .category-bar
    position relative
    z-index 10
    font-size 14px
    img
      width 20px
      height 20px
      vertical-align middle
    .left
      text-align left
      margin-left 10px
    .right
      margin-right 10px
      text-align right
    /deep/ .el-input__inner
      background #f6f6f6
      height 30px
      font-size 12px
      line-height 30px
      &:focus
        border-color #ff5777
  .history
    padding 10px 10px
    border-top 1px solid #f4f4f4
    &-search
     color #999
     font-size 12px
     display flex
     justify-content space-between
     align-items center
     height 30px
     line-height 30px
     &-left,&-right
       img
         width 14px
         height 14px
         vertical-align middle
         margin-bottom 4px
    &-key
      display flex
      flex-wrap wrap
      padding 10px 0
      &-item
        font-size 12px
        line-height 24px
        padding 0 5px
        border 1px solid #f4f4f4
        border-radius 4px
        margin-left 10px
        margin-top 10px
</style>
