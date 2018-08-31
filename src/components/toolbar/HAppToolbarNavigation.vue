<template lang="pug">
  div.flex(style="padding-right: 16px;" @click="onClick")
    h-fa-icon(:icon="icon" :textcolor="textcolor")
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    icon: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    onClick () {
      console.log('tb click')
      this.$emit('click')
    }
  }
}
</script>
