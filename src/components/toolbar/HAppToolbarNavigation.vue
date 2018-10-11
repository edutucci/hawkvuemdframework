<template lang="pug">
  div.flex(style="" @click="onClick")
    h-fa-icon(:icon="icon" :textcolor="textcolor")
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
