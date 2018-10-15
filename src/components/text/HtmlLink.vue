<template lang="pug">
  a(
    v-if="url && url.length > 0 && !newWindow"
    :class="textcolor"
    :href="url"
  )
    h-fa-icon(v-if="icon && icon.length > 0" :textcolor="textcolor" :icon="icon" size="16px")
    span(v-if="text && text.length > 0").h-pl-xs {{text}}
  a(
    v-else-if="url && url.length > 0 && newWindow"
    :class="textcolor"
    :href="url"
    target="_blank"
  )
    h-fa-icon(v-if="icon && icon.length > 0" :textcolor="textcolor" :icon="icon" size="16px")
    span(v-if="text && text.length > 0").h-pl-xs {{text}}
  span(v-else) {{text}}
</template>

<script>
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'BtnLink',
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
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
