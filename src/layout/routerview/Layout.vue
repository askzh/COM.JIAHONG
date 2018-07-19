<template>
  <div>
    <jh-header></jh-header>
    <router-view></router-view>
    <jh-footer></jh-footer>
  </div>

</template>

<script>
import JhHeader from '@/layout/header/Header.vue'
import JhFooter from '@/layout/footer/Footer.vue'

export default {
  name: 'layout',
  components: {
    JhHeader,
    JhFooter
  }
}

</script>

<style>

</style>
