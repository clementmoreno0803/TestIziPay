<template>
<TheHeaderVue />
  <router-view />
</template>
<script>
import TheHeaderVue from "./components/layout/TheHeader.vue"

export default ({
  components: {
    TheHeaderVue
  }
})
</script>

<style lang="less">
body{
  margin: 0;
    background: #000000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
