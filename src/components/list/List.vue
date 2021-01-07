<template lang="pug">
.no-user-select.h-list(
  :class="[ { 'border border-gray': bordered, 'item-separator': itemSeparator, 'content-separator': contentSeparator } ]"
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
      default: false,
    },
    itemSeparator: {
      type: Boolean,
      default: false,
    },
    contentSeparator: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
