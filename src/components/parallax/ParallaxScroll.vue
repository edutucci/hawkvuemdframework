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
      this.changeBackground()
    },
    height: function (value) {
      this.changeHeight()
    }
  },
  mounted () {
    this.changeBackground()
    this.changeHeight()
  },
  methods: {
    changeBackground () {
      this.parallaxObject.backgroundImage = 'url("' + this.backgroundImage + '")'
    },
    changeHeight () {
      this.parallaxObject.minHeight = this.height
    }
  }
}
</script>
