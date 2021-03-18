<template>
  <div>
    <div id="main-body">
      <Results v-bind:results="searchResults" v-if="hasResults()"/>
    </div>
    <div id="ads-body" v-if="!hasResults()">
      <ErrorMessage v-if="searchResults.error !== undefined" :error="searchResults.error"/>
    </div>
  </div>
</template>

<script>
import Results from './Results.vue'
import { mapState } from 'vuex'
import store from '../Store'
import ErrorMessage from './ErrorMessage.vue'

export default {
  name: 'Body',
  components: {
    Results,
    ErrorMessage
  },
  props: {
    api: {
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
      this.searchResults = await this.api.search(store.state.searchTerm)
    },
    hasResults () {
      return Object.keys(this.searchResults).length !== 0 && this.searchResults.error === undefined
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/styles/theme.scss";
  $margin: 10%;

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
</style>
