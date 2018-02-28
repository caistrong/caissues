<template>
  <div class="article-item" @click="gotoDetails">
    <h2>{{article.title}}</h2>
  </div>
</template>
<script>
export default {
  props: {
    article: Object
  },
  methods: {
    gotoDetails: function () {
      this.$router.push({ name: 'article', params: { id: this.article.number } })
    }
  }
}
</script>
<style lang="stylus" scoped>
.article-item
  display flex
  flex-direction column
  justify-content center
  height 5rem
  background #EEEEEE
  margin-bottom 1rem
  &:hover
    cursor pointer
  h2
    font-size 1.2rem
    margin-left 1rem
  a
    text-decoration none
    color #000
</style>
