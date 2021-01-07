<template lang="pug">
.column.border.border-gray.banner-container.h-pa-sm(
  v-if="!wide"
  :class="[bgColor, textColor]"
)
  .col
    slot(name="text")

  .col
    .row.justify-end
      .col-auto
        slot(name="buttons")
.row.wrap.align-items-center.border.border-gray.banner-container.h-pa-sm(
  v-else
)
  .col
    slot(name="text")

  .col-auto
    slot(name="buttons")

</template>

<script>
import componentBase from '../componentBase.vue';

export default {
  extends: componentBase,
  name: 'HBanner',
  props: {
    wide: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
