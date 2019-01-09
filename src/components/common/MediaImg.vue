<template lang="pug">
  div.media.flex
    img.full-width(
      v-if="img && img.length > 0" :src="img"
    )
    .media-text.full-size.flex.flex-column.overflow-hidden
      slot
</template>

<script>

export default {
  name: 'HMediaImg',
  props: {
    img: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      imageSizeObject: {
        width: '100px',
        height: '100px'
      }
    }
  },
  watch: {
    width: function (value) {
      this.imageSizeObject.width = value
    },
    height: function (value) {
      this.imageSizeObject.height = value
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
