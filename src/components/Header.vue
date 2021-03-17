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
    padding-left: 10%;
    @media screen and (max-width: $small-screen) {
      justify-content: center;
      padding: 1% 0% 1% 0% ;
    }
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
