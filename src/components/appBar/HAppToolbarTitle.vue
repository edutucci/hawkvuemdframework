<template lang="pug">
  .col-space.text-bold
    .row.align-items-center.h-app-toolbar-title.text-h6.h-ml-xs(
      :class="{ 'h-mt-xl': inset, 'full-height': !inset}"
    )
      slot

</template>

<script>
export default {
  name: 'HToolbarTitle',
  props: {
    inset: {
      type: Boolean,
      default: false
    }
  }
}
</script>
