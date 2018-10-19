<template lang="pug">
  .flex-1
    .title
      h3 {{text}}
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
