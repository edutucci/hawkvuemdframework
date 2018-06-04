<template lang="pug">
  .flex.flex-1.flex-items-center.item-padding
    .icon-left
      strong(v-if="lefttext && lefttext.length > 0")
        | {{lefttext}}
      h-fa-icon(v-else-if="icon && icon.length" :icon="icon" style="color: gray")
      h-avatar(v-else-if="avatar && avatar.length > 0" :src="avatar")
      img(v-else-if="img && img.length > 0" :src="img" style="width:32px; height:32px;")
    .flex-1.flex-column.overflow-hidden
      .title
        strong {{text}}
      .subtitle.flex.flex-wrap
        strong {{desc}}
      div.full-with(v-if="separator")
        hr
</template>

<script>

import HFaIcon from '../icons/HFaIcon.vue'
import HAvatar from '../image/HAvatar.vue'

export default {
  components: {
    HFaIcon,
    HAvatar
  },
  props: {
    separator: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Array,
      default: () => ([])
    },
    img: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    lefttext: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}

</style>
