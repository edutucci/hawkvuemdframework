<template lang="pug">
  div.h-icon(style="position:relative; display: inline-block;")
    h-image(
      v-if="image"
      :src="icon"
      :style="styleObject"
    )
    i(
      class="h-icon"
      :class="[icon, textColor, {'fa-pulse': pulse, 'fa-spin': spin}]"
      :style="styleObject"
      @click="onClick"
      v-else-if="IsFaIcon"
    )
    i(
      class="h-icon material-icons"
      :class="[textColor]"
      :style="styleObject"
      @click="onClick"
      v-else-if="!IsFaIcon"
    )
      | {{icon}}
    slot

 </template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'HIcon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '16px'
    },
    pulse: {
      type: Boolean,
      default: false
    },
    spin: {
      type: Boolean,
      default: false
    },
    image: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    size: function (value) {
      this.makeIconSize(value)
    }
  },
  computed: {
    IsFaIcon () {
      let value = false
      if (this.icon && this.icon.length > 0) {
        value = this.icon.indexOf('fa-')
      }
      return value > -1
    }
  },
  mounted () {
    this.makeIconSize(this.size)
  },
  data () {
    return {
      color: '',
      bkgcolor: '',
      styleObject: {
        fontSize: '16px'
      }
    }
  },
  methods: {
    makeIconSize (value) {
      this.styleObject.fontSize = value
    },
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
