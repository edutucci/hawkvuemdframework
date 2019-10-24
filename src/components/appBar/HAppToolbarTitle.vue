<template lang="pug">
  .col-space.text-bold
    .row.full-height.align-items-start.h-app-toolbar-title.text-h6.h-mt-xs.h-ml-xs(
      :class="{ 'h-mt-xl': inset }"
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
