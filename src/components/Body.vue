<template>
  <div class='body'>
    <div id="main-body">
      <Results v-bind:results="results" v-if="hasResults()"/>
    </div>
    <div id="ads-body" v-if="!hasResults()">
      <ErrorMessage v-if="results.error !== undefined" :error="results.error"/>
      <img src="../assets/images/Cow.svg" alt="Moogle logo" />
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
  data () {
    return {
      results: {}
    }
  },
  computed: mapState(['searchResults']),
  created () {
    this.unsubscribe = store.subscribe((mutation) => {
      if (mutation.type === 'update') {
        this.results = store.state.searchResults
      }
    })
  },
  beforeDestroy () {
    this.unsubscribe()
  },
  methods: {
    hasResults () {
      return Object.keys(this.results).length !== 0 && this.results.error === undefined
    }
  }
}
</script>

<style scopped lang="scss">
  .body {
    border-radius: 0.5rem;
  }
  #ads-body {
    margin-top: 5%;
    padding-top: 10rem;
  }
  img {
    width: 20rem;
    height: 20rem;
  }
</style>
