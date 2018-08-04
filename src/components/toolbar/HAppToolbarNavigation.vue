<template lang="pug">
  div.flex(style="padding-right: 16px;" @click="onClick")
    h-fa-icon(:icon="icon")
</template>

<script>
import HFaIcon from '../icons/HFaIcon'

export default {
  components: {
    HFaIcon
  },
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
