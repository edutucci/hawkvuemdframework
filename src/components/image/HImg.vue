<template lang="pug">
  .overflow-hidden
    img(
      v-if="src && src.length > 0" :src="src"
      :style="[imageSizeObject]"
      @click="onClick"
    )
</template>

<script>
export default {
  name: 'HImg',
  props: {
    src: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '32px'
    },
    height: {
      type: String,
      default: '32px'
    }
  },
  data () {
    return {
      imageSizeObject: {
        width: this.width,
        height: this.height
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
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
