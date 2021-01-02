<template lang="pug">
.full-width
  slot
</template>

<script>

import componentBase from '../componentBase.vue';

export default {
  extends: componentBase,
  name: 'HCollapsible',
  props: {
    separator: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentCollapse: undefined,
    };
  },
  methods: {
    selectCollapse(collapse) {
      if (this.currentCollapse) {
        if (this.currentCollapse.text === collapse.text) {
          this.currentCollapse.toggle();
          return;
        }
        this.currentCollapse.setSeparator(false);
        this.currentCollapse.setVisible(false);
      }

      this.currentCollapse = collapse;
      this.currentCollapse.setSeparator(true);
      this.currentCollapse.setVisible(true);
    },
  },
};
</script>

<style scoped>
</style>
