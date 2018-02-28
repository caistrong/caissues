<template>
  <div class="article-detail-wrap" v-html="body"></div>
</template>
<script>
import GithubApi from '../utils/githubApi.js'
import marked from 'marked'

export default {
  name: 'ArticleDetails',
  data () {
    return {
      article: null,
      body: ''
    }
  },

  async created () {
    let number = this.$route.params.id
    let res = await GithubApi.getIssue(number)
    this.article = res
    this.body = marked(res.body)
  }
}
</script>
<style lang="stylus" scoped>
.article-detail-wrap
  width 80%
  margin 0 auto
  background #EEEEEE
  padding 1rem 2rem
</style>
