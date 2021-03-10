<template>
  <div v-if="error !== undefined">
    <h2 v-if="error.status === 401">
      Your session has expired. Click <a href="/">here</a>
    </h2>
    <h2 v-if="error.status !== 401">
      Ups, there were an error: "{{ error.message }}".
    </h2>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    error: {}
  }
}
</script>

<style scoped lang="scss">
</style>
