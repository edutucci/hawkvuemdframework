<template lang="pug">
  .flex.flex-1.flex-items-center(style="padding-top:8px;padding-bottom:8px;")
    .div(v-if="(icon && icon.length) || (avatar && avatar.length)" style="padding-left:16px;")
      h-fa-icon(textcolor="text-gray")
      h-avatar(:src="avatar")
    .flex-1.flex-column.overflow-hidden(style="padding-left:16px;")
      .title
        h2 {{text}}
      .subtitle.flex.flex-wrap
        | {{desc}}
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
