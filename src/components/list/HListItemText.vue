<template lang="pug">
  .row.flex-column
    .title
      | {{title}}
    .subtitle.flex.flex-wrap
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
