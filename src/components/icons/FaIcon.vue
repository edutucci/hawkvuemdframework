<template lang="pug">
  div(style="position:relative; display: inline-block;")
    i(
      class="h-icon"
      :class="[icon, textColor, {'fa-pulse': pulse, 'fa-spin': spin}]"
      :style="styleObject"
      @click="onClick"
    )
    slot

 </template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'HFaIcon',
  props: {
    icon: {
      type: String
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
    }
  },
  watch: {
    size: function (value) {
      this.styleObject.fontSize = value
    }
  },
  mounted () {
    this.styleObject.fontSize = this.size
  },
  data () {
    return {
      color: '',
      bkgcolor: '',
      styleObject: {
        fontSize: '24px'
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
/* .faicon {
  position: relative;
} */
</style>
