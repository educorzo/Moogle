<template>
  <div>
    <a :href="info.external_urls.spotify">
      <Picture :images="info.images" :name="info.name + ' members photo'"/>
    </a>
    <h5 class="information">Popularity: {{ info.popularity }}</h5>
  </div>
</template>

<script>
import Picture from './Picture'

export default {
  name: 'Artist',
  components: { Picture },
  props: {
    info: Object
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/styles/card.scss";
</style>
