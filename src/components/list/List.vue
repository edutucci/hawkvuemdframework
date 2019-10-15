<template lang="pug">
  div.no-user-select.h-list(
    :class="[ { 'border border-gray': bordered, 'item-separator': itemSeparator } ]"
    style="padding: 2px 0px"
  )
    slot

</template>

<script>

export default {
  name: 'HList',
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    itemSeparator: {
      type: Boolean,
      default: false
    }
  }
}
</script>
