<template>
  <div id="app">
    <Header/>
    <Body class="main-margin"/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Header,
    Body
  },
  props: {
    api: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/styles/theme.scss";

  #app {
    min-height: 100vh;
    background: $special-black;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    .body {
      background: $special-white;
    }
  }
</style>
