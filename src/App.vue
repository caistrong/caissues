<template>
  <div id="app">
    <Labelbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import ArticleList from './components/ArticleList'
import Labelbar from './components/Labelbar'

export default {
  name: 'App',
  components: {
    ArticleList,
    Labelbar
  }
}
</script>

<style lang="stylus" scoped>
#app
  width 80%
  margin 30px auto
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
*
  box-sizing border-box
</style>
