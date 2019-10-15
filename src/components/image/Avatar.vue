<template lang="pug">
  .h-avatar-container(
    :style="[imgsize]"
  )
    .h-avatar-content.flex.align-items-center.overflow-hidden(
      v-if="src && src.length > 0"
      :class="[bgColor, textColor, { 'square': square, 'border-radius': borderRadius }]"
    )
      img(:src="src" alt="avatar")
    .h-avatar-content.flex.justify-center.align-items-center.overflow-hidden(
      v-else
      :class="[bgColor, textColor, { 'square': square, 'border-radius': borderRadius }]"
    )
      slot

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  name: 'HAvatar',
  extends: componentBase,
  props: {
    src: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '40px'
    },
    square: {
      type: Boolean,
      default: false
    },
    borderRadius: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      imgsize: {
        fontSize: this.size
      }
    }
  },
  mounted () {
    this.defineSize()
  },
  watch: {
    size: function (value) {
      this.defineSize()
    }
  },
  methods: {
    defineSize () {
      this.imgsize.fontSize = this.size
    }
  }

}
</script>
