<template>
  <div class="jh-header">
    <nav class="header-nav">
      <div class="container cf">
        <div class="nav-logo">佳宏竹业</div>
        <div class="nav-menu">
          <ul class="menu-ul">
            <li
              v-for="item in $router.options.routes[0].children"
              :key="item.path"
              class="menu-li">

                <router-link :to="item.path" class="menu-link" title="">
                  {{item.name}}
                  <span class="caret" v-if="item.children !== undefined"></span>
                </router-link>

              </li>
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

.header-nav {
  min-height: 48px;
  line-height: 48px;
}

.nav-logo {
  width: 160px;
  height: 60px;
  float: left;
}

.nav-menu {
  float: right;
}

.nav-menu .menu-ul {
  display: block;
  float: right;
}
.nav-menu .menu-li {
  display: block;
  float: left;
  margin-left: 20px;
}
.menu-link {
  padding: 0 15px;
  height: 60px;
  line-height: 60px;
}
</style>
