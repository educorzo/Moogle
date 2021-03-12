<template>
  <div>
    <Picture :images="info.album.images" :name="info.name + ' track picture'" />
    <h5 class="information overflow" :title="info.artists[0].name">{{info.artists[0].name}}</h5>
    <h5 class="information overflow" :title="'Runtime:' + formatRuntime()">Runtime: {{formatRuntime()}}</h5>
  </div>
</template>

<script>
import Picture from './Picture'

export default {
  name: 'Song',
  components: { Picture },
  props: {
    info: Object
  },
  methods: {
    formatRuntime () {
      return new Date(this.info.duration_ms).toISOString().slice(11, -5)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/card.scss";
</style>
