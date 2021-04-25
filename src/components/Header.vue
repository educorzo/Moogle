<template>
  <div class="header">
    <h1 class="brand main-margin">Moogle!</h1>
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
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    @media (max-width: $md) {
        padding-top: 2%;
        padding-bottom: 2%;
    }

    @media (min-width: $md) {
        justify-content: flex-start;
    }
    background: $deep-yellow;

    .brand {
      margin-top: 0;
      margin-bottom: 0;
      margin-right: 2%;
      color: $logo-color;

      @media (max-width: $md) {
        margin-bottom: 0.2rem;
        justify-content: flex-start;
      }
      font-family: fantasy;
    }
  }
</style>
