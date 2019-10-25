<template lang="pug">
  .h-image-container(
    :style="[imgsize]"
    @click="onClick"
  )
    .h-image-content.flex.justify-center.overflow-hidden(
      v-if="src && src.length > 0"
      :class="[bgColor, textColor, { 'avatar': avatar, 'border-radius': borderRadius }]"
    )
      img.h-avatar-img-content(:src="src" alt="avatar")
    .h-image-content.flex.justify-center.align-items-center.overflow-hidden(
      v-else
      :class="[bgColor, textColor, { 'avatar': avatar, 'border-radius': borderRadius }]"
    )
      slot

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  name: 'HImage',
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
    avatar: {
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
    },
    onClick () {
      this.$emit('click')
    }
  }

}
</script>
