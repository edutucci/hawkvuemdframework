<template lang="pug">
  div(style="position:relative; display: inline-block;")
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
      default: '24px'
    },
    height: {
      type: String,
      default: '24px'
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
