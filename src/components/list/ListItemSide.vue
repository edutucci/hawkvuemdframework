<template lang="pug">
.flex.h-list-item-side.list-item-content-padding.overflow-hidden
  .flex.flex-column
    slot
</template>

<script>
export default {
  name: 'HListItemSide',
};
</script>
