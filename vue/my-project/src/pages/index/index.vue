<template>
  <div>
    <index-header></index-header>
    <router-link to="goods">
    	我特么要跳转到产品页面
    </router-link>
  </div>
</template>

<script>
import IndexHeader from './components/header'

export default {
  name: 'index',
  components: {
    IndexHeader
  }
}
</script>

<style lang="stylus" scoped>
</style>
