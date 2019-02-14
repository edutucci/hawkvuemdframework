<template lang="pug">
  .flex-1.list-item-content-padding.flex-column.overflow-hidden
    slot
    div.full-with(v-if="separator")
      html-separator
</template>

<script>
export default {
  name: 'HListItemContent',
  props: {
    separator: {
      type: Boolean,
      default: false
    }
  }
}
</script>
