<template>
  <div v-html="body"></div>
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
    this.article = res.data
    this.body = marked(res.data.body)
  }
}
</script>
