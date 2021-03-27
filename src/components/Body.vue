<template>
  <div class='body'>
    <div id="main-body">
      <Results v-bind:results="searchResults" v-if="hasResults()"/>
    </div>
    <div id="ads-body" v-if="!hasResults()">
      <ErrorMessage v-if="searchResults.error !== undefined" :error="searchResults.error"/>
       <img src="../assets/Cow.svg" alt="search icon" />
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

<style scopped lang="scss">
  #ads-body {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  img {
    width: 20rem;
    height: 20rem;
  }
</style>
