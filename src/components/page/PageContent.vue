<template lang="pug">
  .page-content.full-height(
    :class="{'page-content-padding': padding }"
    v-resize.initial="onResize"
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
    onResize () {
      // console.log('page content resize')
    }
  }
}
</script>

<style scoped>
.page-content-padding {
  padding: 10px;
}
</style>
