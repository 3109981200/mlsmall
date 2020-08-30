<template>
  <div class="category" v-loading.fullscreen.lock="isLoading">
    <CategoryNavbar></CategoryNavbar>
    <div class="category-content">
      <CategoryTabBox :category="category"></CategoryTabBox>
      <CategoryContentList></CategoryContentList>
    </div>
  </div>
</template>

<script>
import { getCategory } from 'service/api'
import CategoryNavbar from './categoryComps/CategoryNavbar'
import CategoryTabBox from './categoryComps/CategoryTabBox'
import CategoryContentList from './categoryComps/CategoryContentList'
export default {
  name: 'Category',
  components: {
    CategoryNavbar,
    CategoryTabBox,
    CategoryContentList
  },
  data () {
    return {
      isLoading: false,
      category: []
    }
  },
  created () {
    this.categoryList()
  },
  methods: {
    categoryList () {
      this.isLoading = true
      getCategory().then(res => {
        console.log(res)
        this.category = res.list || []
        this.isLoading = false
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.category
  position relative
  &-content
    display flex
</style>
