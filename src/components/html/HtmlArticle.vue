<template lang="pug">
  div(style="display:inline-block;")
    article(
      v-if="type === 'contained'"
      class="full-width article-content flex flex-justify-center"
      :class="[bgcolor, textcolor]"
    )
      slot
    article(
      v-else-if="type === 'outlined'"
      class="full-width article-content flex flex-justify-center"
      :class="[bgcolor, textcolor, border, borderType]"
    )
      slot

</template>

<script>
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'HtmlArticle',
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
