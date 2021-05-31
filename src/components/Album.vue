<template>
  <div>
    <a :href="info.external_urls.spotify">
      <Picture :images="info.images" :name="info.name + ' album cover'"/>
    </a>
    <h4 class="information overflow" :title='info.artists[0].name'>{{ info.artists[0].name }}</h4>
    <h5 class="information">{{ info.release_date.substring(0,4) }}</h5>
  </div>
</template>

<script>
import Picture from './Picture'

export default {
  name: 'Album',
  components: { Picture },
  props: {
    info: Object
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/card.scss";
</style>
