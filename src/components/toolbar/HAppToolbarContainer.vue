<template lang="pug">
  .row.h-pa-sm.full-width.flex-items-center
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
