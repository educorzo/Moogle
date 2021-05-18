<template>
  <ul class="autocomplete" v-if="results['artists']">
    <li v-for="card in results['artists'].items" :key="card.id">
      <h4 class="title overflow" :title="card.name">{{ card.name }}</h4>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import store from '../Store'

export default {
  name: 'AutoComplete',
  components: {},
  data () {
    return {
      results: {}
    }
  },
  computed: mapState(['autoCompleteResults']),
  created () {
    this.unsubscribe = store.subscribe((mutation) => {
      if (mutation.type === 'autoComplete') {
        this.results = store.state.autoCompleteResults
      }
    })
  },
  beforeDestroy () {
    this.unsubscribe()
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/theme.scss";
  .autocomplete {
    margin: 0;
    padding: 0;
    background: white;
    width: 100%;
    list-style-type: none;
    text-align: left;
    li {
      padding-left: 1rem;
    }
  }
</style>
