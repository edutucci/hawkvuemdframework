<template lang="pug">
  .flex.flex-1.flex-items-center(style="padding:8px;")
    .div
      h-fa-icon(v-if="icon !== undefined" :icon="icon" style="color: gray")
      h-avatar(v-else-if="avatar && avatar.length > 0" :src="avatar")
    .flex-1.flex-column.overflow-hidden(style="padding-left:16px;")
      .title
        h2 {{text}}
      .subtitle.flex.flex-wrap
        strong {{desc}}
</template>

<script>

export default {
  components: {
  },
  props: {
    icon: {
      type: Array
    },
    avatar: {
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
