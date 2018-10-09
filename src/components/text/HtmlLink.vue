<template lang="pug">
  router-link.h-pl-xs(
    v-if="routerLink && routerLink.length > 0"
    :class="textcolor"
    :to="routerLink"
  )
    | {{text}}
  a.h-pl-xs(
    v-else-if="!newWindow"
    :class="textcolor"
    :href="url"
  )
    | {{text}}
  a.h-pl-xs(
    v-else-if="newWindow"
    :class="textcolor"
    :href="url"
    target="_blank"
  )
    | {{text}}
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
    routerLink: {
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
