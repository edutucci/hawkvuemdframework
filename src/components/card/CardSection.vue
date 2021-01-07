<template lang="pug">
.h-card-section(
  :class="{'col-auto': auto, 'col': !auto}"
)
  slot

</template>

<script>
export default {
  name: 'HCardSection',
  props: {
    auto: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {

    };
  },
};
</script>
