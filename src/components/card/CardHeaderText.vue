<template lang="pug">
  .row.flex.flex-column.overflow-hidden.card-padding
    .flex
      .card-header-image-padding(v-if="(icon && icon.length) || (avatar && avatar.length)")
        h-icon(:icon="icon" textcolor="text-gray")
        h-image(avatar :src="avatar")

      .row.flex.flex-column
        .title
          h3  {{text}}
        .subtitle
          | {{desc}}

</template>

<script>
export default {
  name: 'HCardHeaderText',
  props: {
    text: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    avatar: {
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
