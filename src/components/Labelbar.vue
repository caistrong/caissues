<template>
  <div class="index" @click="goToIndex">首页</div>
</template>
<script>
export default {
  methods: {
    goToIndex () {
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style lang="stylus" scoped>
.index
  width 4rem
  text-align center
  margin 1.5rem auto
  border 0.2rem solid #EEEEEE
  &:hover
    cursor pointer
    background #EEEEEE
</style>
