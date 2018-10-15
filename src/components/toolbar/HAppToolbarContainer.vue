<template lang="pug">
  div.full-width.flex.flex-wrap.flex-items-center(
    :class="[bgcolor, textcolor]"
    style="padding-left: 16px; padding-top: 8px; padding-bottom: 8px;"
  )
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
