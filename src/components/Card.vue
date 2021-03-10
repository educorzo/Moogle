<template>
  <div class="card">
    <h4 class="title overflow" :title="card.name">{{ card.name }}</h4>
    <Picture v-if="card.type==='album'" :images="card.images" :name="card.name + ' album cover'" />
    <Picture v-if="card.type==='track'" :images="card.album.images" :name="card.name + ' track picture'" />
    <Picture v-if="card.type==='artist'" :images="card.images" :name="card.name + ' members photo'" />
    <div v-if="card.type==='album'">
        <h4 class="information overflow" :title='card.artists[0].name'>{{ card.artists[0].name }}</h4>
        <h5 class="information">{{ card.release_date.substring(0,4) }}</h5>
    </div>
    <div v-if="card.type==='artist'">
        <h5 class="information">Popularity: {{ card.popularity }}</h5>
    </div>
    <div v-if="card.type==='track'">
      <h5 class="information overflow" :title="card.artists[0].name">{{card.artists[0].name}}</h5>
      <h5 class="information overflow" :title="'Runtime:' + formatRuntime()">Runtime: {{formatRuntime()}}</h5>
    </div>
  </div>
</template>

<script>
import Picture from './Picture'

export default {
  name: 'Card',
  components: { Picture },
  props: {
    card: Object
  },
  methods: {
    formatRuntime () {
      return new Date(this.card.duration_ms).toISOString().slice(11, -5)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/card.scss";
</style>
