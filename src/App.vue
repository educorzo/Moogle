<template>
  <div id="app">
    <Header/>
    <div id="main-body">
      <Results v-bind:results="searchResults" v-if="Object.keys(searchResults).length !== 0 && searchResults.error === undefined"/>
    </div>
    <div id="ads-body" v-if="Object.keys(searchResults).length === 0 || searchResults.error !== undefined">
      <ErrorMessage v-if="searchResults.error !== undefined" :error="searchResults.error"/>
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Results from './components/Results.vue'
import ErrorMessage from './components/ErrorMessage.vue'
import { mapState } from 'vuex'
import store from './Store'

export default {
  name: 'App',
  components: {
    Header,
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
      searchResults: {}
    }
  },
  computed: mapState(['searchTerm']),
  created () {
    this.unsubscribe = store.subscribe((mutation) => {
      if (mutation.type === 'update') {
        this.search()
      }
    })
  },
  beforeDestroy () {
    this.unsubscribe()
  },
  methods: {
    async search () {
      this.searchResults = await this.Api.search(store.state.searchTerm)
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
