<template>
  <div id="app">
    <div class="header">
      <h1 class="brand">Moogle!</h1>
      <Searcher v-model="searchTerm" v-on:keydown.enter="search()" />
    </div>
    <div id="main-body">
      <Results v-bind:results="searchResults" v-if="Object.keys(searchResults).length !== 0 && searchResults.error === undefined"/>
    </div>
    <div id="ads-body" v-if="Object.keys(searchResults).length === 0 || searchResults.error !== undefined">
      <ErrorMessage v-if="searchResults.error !== undefined" :error="searchResults.error"/>
    </div>
  </div>
</template>

<script>

import Searcher from './components/Searcher.vue'
import Results from './components/Results.vue'
import ErrorMessage from './components/ErrorMessage.vue'

export default {
  name: 'App',
  components: {
    Searcher,
    Results,
    ErrorMessage
  },
  props: {
    Api: {
      type: Object
    }
  },
  data () {
    return {
      searchTerm: '',
      searchResults: {}
    }
  },
  methods: {
    async search () {
      this.searchResults = await this.Api.search(this.searchTerm)
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/styles/theme.scss";
  $margin: 10%;

  #app {
    display: flex;
    flex-direction: column;

    background: $special-black;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    .header {
      padding-left: $margin;
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

    #main-body {
      @media screen and (min-width: $small-screen) {
        margin-left: $margin;
        margin-right: $margin;
      }

      background: $special-white;
    }

    #ads-body {
      height: 100vh;
      @media screen and (min-width: $small-screen) {
        margin-left: $margin;
        margin-right: $margin;
      }

      background: $special-white;
    }
  }
</style>
