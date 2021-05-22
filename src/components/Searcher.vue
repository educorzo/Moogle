<template>
  <div class="searcher-flex-item">
    <div class="searcher-container">
      <div id='searcher'>
        <input
          type="text"
          class="input "
          placeholder="Search some music"
          v-model="searchTerm"
          v-on:keyup.enter="submit"
          v-on:blur="deleteAutocomplete"
          aria-labelledby="searchlabel"
        >
        <label id="searchlabel" for="input" class="invisible" >Search some music</label>
        <a v-on:click="submit">
          <div class='icon-frame'>
            <img src="../assets/images/Search.svg" alt="search icon" />
          </div>
        </a>
      </div>
      <autocomplete/>
    </div>
  </div>
</template>

<script>
import store from '../Store'
import Autocomplete from './Autocomplete.vue'
export default {
  components: { Autocomplete },
  name: 'Searcher',
  inject: ['api'],
  data () {
    return {
      searchTerm: ''
    }
  },
  watch: {
    searchTerm: function () {
      this.autocomplete()
    }
  },
  methods: {
    async submit () {
      const searchResult = await this.search()

      this.shareResults(searchResult)
      this.deleteAutocomplete()
    },

    async autocomplete () {
      const searchResult = await this.quickSearch()

      this.autocompleteResults(searchResult)
    },

    shareResults (searchResult) {
      store.commit('update', searchResult)
    },

    autocompleteResults (autoCompleteResults) {
      store.commit('autoComplete', autoCompleteResults)
    },

    deleteAutocomplete () {
      store.commit('autoComplete', {})
    },

    async search () {
      return this.api.search(this.searchTerm)
    },

    async quickSearch () {
      return this.api.search(this.searchTerm)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/theme.scss";
  @import "../assets/styles/accessibilityTools.scss";
  $height: 1.5rem;
  $padding: 0.3rem;

  .searcher-flex-item {
    min-width: 20rem;
    min-height: 1.9rem;
  }
  .searcher-container {
    position: absolute;
    background-color: white;
    border: 0.1rem solid $special-black;
    border-radius: 0.5rem;
  }

  #searcher {
    display: flex;
  }

  .border {
    border: 0.1rem solid $special-black;
    border-radius: 0.5rem;
  }

  .input {
    width: 17rem;
    height: $height;
    padding: $padding;
    border: 0;
    border-radius: 0.5rem;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  .icon-frame {
    width: 1.5rem;
    height: $height;
    padding: $padding;
    border:0;
    border-radius: 0.5rem;
    background: white;
  }

  img {
    width: 1.2rem;
    height: $height;
  }
</style>
