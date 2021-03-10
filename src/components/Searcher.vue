<template>
<div id='searcher'>
  <input
    type="text"
    class="input border"
    placeholder="Search some music"
    :searchTerm="searchTerm"
    v-on="listeners"
    aria-labelledby="searchlabel"
  >
  <label id="searchlabel" for="input" class="invisible" >Search some music</label>
  <div class='icon-frame border'>
    <img src="../assets/Search.svg" alt="search icon" />
  </div>
</div>
</template>

<script>
export default {
  name: 'Searcher',
  props: {
    searchTerm: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
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
