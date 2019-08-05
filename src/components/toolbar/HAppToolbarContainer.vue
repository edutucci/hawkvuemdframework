<template lang="pug">
  .h-pa-sm.full-width.flex.flex-wrap.flex-items-center
    slot
</template>

<script>
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
  },
  data () {
    return {
    }
  }
}
</script>
