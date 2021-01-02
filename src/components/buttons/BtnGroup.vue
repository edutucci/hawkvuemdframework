<template lang="pug">
div(style="display:inline-flex;")
  div(
    class="no-user-select btngroup flex flex-justify-center flex-items-center full-width"
    :class="[compBgColor, compBorderColor,\
      {'rounded': rounded, 'outlined border border-radius': outlined } ]"
  )
    slot

</template>

<script>

import componentBase from '../componentBase.vue';

export default {
  name: 'HBtnGroup',
  extends: componentBase,
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  components: {
  },
  data() {
    return {
    };
  },
  mounted() {
    this.changeComponentBackground(this.bgColor, this.outlined);
    this.changeBorderColor();
  },
  watch: {
    bgColor(value) {
      this.compBgColorHover = '';
      this.changeComponentBackground(value, this.outlined);
      this.changeBorderColor();
    },
    outlined(value) {
      this.changeBorderColor();
      this.changeComponentBackground(this.bgColor, value);
    },
  },
  methods: {
    changeComponentBackground(bgColor, outlined) {
      this.compBgColor = bgColor;
      if (outlined) {
        this.compBgColor = 'bg-transparent';
      }
    },
    changeBorderColor() {
      this.compBorderColor = '';
      if (this.outlined) {
        this.compBorderColor = (this.bgColor === 'bg-white') ? 'border-gray' : this.bgColor;
        this.compBorderColor = this.compBorderColor.replace(/bg/, 'border');
      }
    },
  },
};
</script>

<style scoped>

</style>
