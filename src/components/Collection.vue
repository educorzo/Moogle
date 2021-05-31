<template>
  <ul :class="'collection ' + type">
    <li v-for="card in collection" :key="card.id">
      <Card v-bind:card="card"/>
    </li>
  </ul>
</template>

<script>
import Card from './Card.vue'

export default {
  components: { Card },
  name: 'Collection',
  props: {
    collection: Array,
    type: String
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/theme.scss";
  @import "../assets/styles/collection.scss";

  .collection {
    border-radius: 0.5rem;
  }

  .albums {
    background: $yellow;
  }

  .artists {
    background: $deep-purple;
  }

  .tracks{
    background: $purple;
  }
</style>
