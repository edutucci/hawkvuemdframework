<template lang="pug">
  parallax-scroll(
    :background-image="backgroundImage"
    :height="height"
  )
</template>

<script>

import ParallaxProperties from './ParallaxProperties'
import ParallaxScroll from './ParallaxScroll'

export default {
  name: 'Parallax',
  extends: ParallaxProperties,
  components: {
    ParallaxScroll
  },
  data () {
    return {}
  }
}
</script>
