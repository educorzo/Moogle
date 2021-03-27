<template>
  <div>
    <div class="results" v-if="hasResults()">
      <Collection v-if="results['artists']" v-bind:collection="results['artists'].items" type="artists"/>
      <Collection v-if="results['albums']" v-bind:collection="results['albums'].items"  type="albums"/>
      <Collection v-if="results['tracks']" v-bind:collection="results['tracks'].items"  type="tracks"/>
    </div>
    <div class="no-results" v-if="!hasResults()">
      <h2>No results were found.</h2>
    </div>
  </div>
</template>

<script>
import Collection from './Collection.vue'

export default {
  components: { Collection },
  name: 'Results',
  props: {
    results: Object
  },
  methods: {
    hasResults () {
      return this.results.albums.total + this.results.artists.total + this.results.tracks.total !== 0
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/theme.scss";

  .results {
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>
