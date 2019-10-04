<template lang="pug">
  .page-content.full-height(
    :class="{'page-content-padding': padding }"
    style=" margin-top: 57px;"
    id="page-content"
  )
    slot
</template>

<script>

import resize from 'vue-resize-directive'

export default {
  name: 'PageContent',
  directives: {
    resize
  },
  props: {
    padding: {
      type: Boolean,
      default: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.page-content-padding {
  padding: 10px;
}
</style>
