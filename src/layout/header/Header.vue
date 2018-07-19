<template>
  <div class="jh-header">
    <nav class="header-nav">
      <div class="container cf">
        <div class="nav-logo">佳宏竹业</div>
        <div class="nav-menu">
          <ul>
            <li
              v-for="item in $router.options.routes[0].children"
              :key="item.path">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'jh-header',
  mounted () {
    console.log(this)
    console.log(this.$router)
  }
}

</script>

<style scoped lang="">

.nav-logo {

}

</style>
