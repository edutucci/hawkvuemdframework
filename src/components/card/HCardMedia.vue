<template lang="pug">
  div.media.flex.flex-items-center
    img.full-size(v-if="img && img.length > 0" :src="img")
    .media-text.full-size.flex.flex-column.overflow-hidden
      slot
</template>

<script>

export default {
  props: {
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}

.media {
  position: relative;
}

.media-text {
  position: absolute;
  top:0px;
  left:0px;
  z-index: 1;
}
</style>
