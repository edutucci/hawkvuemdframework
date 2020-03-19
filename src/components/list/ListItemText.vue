<template lang="pug">
  .flex.full-height
    .column.full-width
      .text-body1
        | {{title}}
      .text-overline.text-gray.flex.flex-wrap
        | {{caption}}
</template>

<script>
export default {
  name: 'HListItemText',
  props: {
    title: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    }
  }
}
</script>
