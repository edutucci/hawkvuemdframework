<template lang="pug">
  .row.full-width.h-app-toolbar-container.h-pt-sm.h-pb-sm
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
