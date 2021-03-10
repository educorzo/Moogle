<template>
    <div>
      <img class="picture" v-if="getBestImage() !== ''" :src="getBestImage()" :alt="name">
      <svg class="emptyPicture" v-if="getBestImage() === ''"
        title="Image unavailable" xmlns="http://www.w3.org/2000/svg">
        <rect  x="0" y="0"/>
      </svg>
    </div>
</template>

<script>
import selectImage from '@/core/ImageSelector.js'

export default {
  name: 'Picture',
  props: {
    images: Array,
    name: String
  },
  methods: {
    getBestImage () {
      return selectImage(this.images, 150)
    }
  }
}
</script>

<style scoped lang="scss">
  .picture {
    height: 150px;
    width: 150px;
  }
  .emptyPicture {
    height: 150px;
    width: 150px;
    background-color: gray;
  }
</style>
