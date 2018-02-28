<template>
  <div class="pages-wrap">
    <div class="page-item" v-for="i in pageCount" :key="i" @click="changePage">
      {{i}}
    </div>
  </div>
</template>
<script>
import GithubApi from '../utils/githubApi.js'
import config from '../utils/config.js'

export default {
  data () {
    return {
      issuesCount: 0,
      pageCount: 0
    }
  },
  methods: {
    changePage: function (e) {
      this.$emit('change', e.target.innerText)
    }
  },
  async created () {
    this.issuesCount = await GithubApi.getIssueCount()
    this.pageCount = Math.ceil(this.issuesCount / config.per_page)
  }
}
</script>
<style lang="stylus" scoped>
.pages-wrap
  display flex
  width 80%
  margin 0 auto
  justify-content center
  .page-item
    width 1.5rem
    height 1.5rem
    line-height 1.5rem
    margin-right 0.6rem
    text-align center
    border 0.2rem solid #EEEEEE
    &:hover
      background #EEEEEE
      cursor pointer

</style>
