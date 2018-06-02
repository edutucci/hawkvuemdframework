<template lang="pug">
  div.flex(style="padding-right: 16px;")
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
  }
}
</script>

