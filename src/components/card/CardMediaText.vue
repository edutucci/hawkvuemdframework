<template lang="pug">
.full-size.flex
  .flex.flex-column(style="padding: 12px;")
    .title-media.text-h2
      | {{text}}
    .subtitle-media.flex
      strong {{desc}}
</template>

<script>
export default {
  name: 'HCardMediaText',
  props: {
    text: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>

</style>
