<template lang="pug">
  div(:style="[parallaxObject]")

</template>

<script>

import ParallaxProperties from './ParallaxProperties'

export default {
  name: 'ParallaxScroll',
  extends: ParallaxProperties,
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '350px'
    }
  },
  data () {
    return {
      parallaxObject: {
        backgroundImage: 'url("")',
        minHeight: '',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  },
  watch: {
    backgroundImage: function (value) {
      this.changeBackground(value)
    },
    height: function (value) {
      this.changeHeight(value)
    }
  },
  mounted () {
    this.changeBackground(this.backgroundImage)
    this.changeHeight(this.height)
  },
  methods: {
    changeBackground (backgroundImage) {
      this.parallaxObject.backgroundImage = 'url("' + backgroundImage + '")'
    },
    changeHeight (height) {
      this.parallaxObject.minHeight = height
    }
  }
}
</script>
