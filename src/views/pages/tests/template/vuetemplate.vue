<template lang="pug">
.column
  .col
    h3(v-for="opt in options" :key="opt.value")
      slot(:options="opt")
</template>

<script>
export default {
  props: {
    options: [Array],
  },
  data() {
    return {};
  },
};
</script>
