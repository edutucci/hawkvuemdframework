<template lang="pug">
  div.full-width.flex.flex-wrap(
    :class="[bgcolor, textcolor]"
    style="padding:16px;"
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
