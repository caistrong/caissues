<template>
  <div class="article-item">
    <router-link :to="{ name: 'article', params: { id: article.number } }">{{article.title}}</router-link>
  </div>
</template>
<script>
export default {
  props: {
    article: Object
  }
}
</script>
<style lang="stylus" scoped>
.article-item
  height 4rem
  border 1px solid black
  margin-bottom 1rem
</style>
