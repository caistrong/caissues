<template>
  <div class="article-list-wrap">
    <div class="article-list">
      <ArticleItem v-for="article in articles" v-bind:key="article.id" v-bind:article="article"></ArticleItem>
    </div>
  </div>
</template>
<script>
import ArticleItem from './ArticleItem'
import GithubApi from '../utils/githubApi.js'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  data () {
    return {
      articles: []
    }
  },
  async created  () {
    let res = await GithubApi.getIssues()
    this.articles = res.data
  }
}
</script>
<style lang="stylus" scoped>
.article-list-wrap
  width 80%
  margin 0 auto
  .article-list
    width 80%
    margin 0 auto
</style>
