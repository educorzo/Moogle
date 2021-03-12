<template>
  <div class="card">
    <h4 class="title overflow" :title="card.name">{{ card.name }}</h4>
    <component v-bind:is="fixTypeName()" :info="card"></component>
  </div>
</template>

<script>
import Artist from './Artist'
import Album from './Album'
import Song from './Song'

export default {
  name: 'Card',
  components: { Artist, Album, Song },
  props: {
    card: Object
  },
  methods: {
    fixTypeName () {
      if (this.card.type === 'track') {
        return 'Song'
      } else {
        return this.capitalize(this.card.type)
      }
    },
    capitalize (type) {
      return type.charAt(0).toUpperCase() + type.slice(1)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/card.scss";
</style>
