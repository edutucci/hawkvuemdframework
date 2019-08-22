<template lang="pug">
  div(style="position:relative; display: inline-block;")
    i(
      class="h-icon material-icons"
      :class="[textColor]"
      :style="styleObject"
      @click="onClick"
    )
      | {{icon}}
    slot

 </template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '20px'
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
