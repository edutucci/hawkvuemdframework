<template lang="pug">
  .flex.flex-1.list-item-content-padding.overflow-hidden.flex-items-center
    .flex.flex-column
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
