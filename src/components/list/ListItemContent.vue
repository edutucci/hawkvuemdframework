<template lang="pug">
  .flex.flex-1.h-list-item-content.list-item-content-padding.overflow-hidden.flex-items-center
    .column.full-width
      slot
    // div.full-with(v-if="separator")
    //   h-separator
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
