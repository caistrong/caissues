<template>
  <div class="article-list-wrap">
    <div class="article-list">
      <ArticleItem v-for="article in articles" v-bind:key="article.id" v-bind:article="article"></ArticleItem>
    </div>
    <Pagination @change="refreshList"/>
  </div>
</template>
<script>
import ArticleItem from './ArticleItem'
import GithubApi from '../utils/githubApi.js'
import Pagination from './Pagination'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem,
    Pagination
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    refreshList: async function (pageNumber) {
      this.articles = await GithubApi.getIssuesOfPage(+pageNumber)
    }
  },
  async created  () {
    this.articles = await GithubApi.getIssuesOfPage(1)
  }
}
</script>
<style lang="stylus" scoped>
.article-list-wrap
  .article-list
    width 80%
    margin 0 auto
</style>
