<template>
  <div id='searcher'>
    <input
      type="text"
      class="input border"
      placeholder="Search some music"
      v-model="searchTerm"
      v-on:keyup.enter="submit"
      aria-labelledby="searchlabel"
    >
    <label id="searchlabel" for="input" class="invisible" >Search some music</label>
    <a v-on:click="submit">
      <div class='icon-frame border'>
        <img src="../assets/images/Search.svg" alt="search icon" />
      </div>
    </a>
  </div>
</template>

<script>
import store from '../Store'
export default {
  name: 'Searcher',
  data () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    submit () {
      store.commit('update', this.searchTerm)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/theme.scss";
  @import "../assets/styles/accessibilityTools.scss";
  $height: 1.5rem;
  $padding: 0.3rem;

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
    border-right: none;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;

    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  .icon-frame {
    width: 1.5rem;
    height: $height;
    padding: $padding;
    border-left: none;
    border-top-left-radius: 0rem;
    border-bottom-left-radius: 0rem;

    background: white;
  }

  img {
    width: 1.2rem;
    height: $height;
  }
</style>
