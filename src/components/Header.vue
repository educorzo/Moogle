<template>
  <div class="header">
    <h1 class="brand">Moogle!</h1>
    <Searcher/>
  </div>
</template>

<script>
import Searcher from './Searcher.vue'
export default {
  name: 'Header',
  components: {
    Searcher
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/theme.scss";
  .header {
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    background: $deep-yellow;

    .brand {
      margin-right: 2%;
      color: $dark-purple;
      font-family: fantasy;
    }
  }
</style>
