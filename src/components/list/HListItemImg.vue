<template lang="pug">
  .overflow-hidden.full-height.flex
    img(
      v-if="src && src.length > 0" :src="src"
      :style="[imageSizeObject]"
    )
</template>

<script>
export default {
  name: 'HListItemImg',
  props: {
    src: {
      type: String,
      default: ''
    },
    large: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      imageSizeObject: {
        width: '40px',
        height: '40px'
      }
    }
  },
  watch: {
    large: function (value) {
      console.log('mudou large: ' + value)
      this.adjustImageSize(value)
    }
  },
  mounted () {
    this.adjustImageSize(this.large)
  },
  methods: {
    adjustImageSize (value) {
      this.imageSizeObject.width = (value) ? '100px' : '40px'
      this.imageSizeObject.height = (value) ? '56px' : '40px'
    }
  }
}
</script>
