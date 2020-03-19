<template lang="pug">
  .h-list-header.list-title.flex
    .flex.flex-justify-start.title
      h4.no-margin  {{text}}
    .flex.flex-justify-start.title(style="padding-left: 48px;")
      h3  {{middletext}}
    div
      slot
</template>

<script>
export default {
  name: 'HListHeader',
  props: {
    text: {
      type: String,
      default: ''
    },
    middletext: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

.list-title {
  position: relative;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
}

H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}

.no-padding {
  padding: 0px;
}

</style>
