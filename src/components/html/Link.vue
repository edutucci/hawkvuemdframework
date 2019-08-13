<template lang="pug">
  div(style="display:inline-flex;")
    a(
      v-if="url && url.length > 0 && !newWindow"
      :class="textColor"
      :href="url"
    )
      h-fa-icon(v-if="icon && icon.length > 0" :text-color="textColor" :icon="icon" :size="iconSize")
      span(v-if="text && text.length > 0").h-pl-xs {{text}}
    a(
      v-else-if="url && url.length > 0 && newWindow"
      :class="textColor"
      :href="url"
      target="_blank"
    )
      h-fa-icon(v-if="icon && icon.length > 0" :text-color="textColor" :icon="icon" :size="iconSize")
      span(v-if="text && text.length > 0").h-pl-xs {{text}}
    span(v-else) {{text}}
</template>

<script>
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'HLink',
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: String,
      default: '16px'
    },
    url: {
      type: String,
      default: ''
    },
    newWindow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
