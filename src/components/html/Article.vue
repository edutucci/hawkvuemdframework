<template lang="pug">
  .border.border-radius(
    :class="[bgcolor, textcolor, borderColor]"
  )
    slot

</template>

<script>
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'HArticle',
  props: {
    type: {
      type: String,
      default: ''
    },
    border: {
      type: String,
      default: ''
    },
    borderType: {
      type: String,
      default: ''
    }
  }
}
</script>
