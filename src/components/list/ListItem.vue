<template>
<div
  class="row color-hover h-list-item cursor-pointer h-pa-sm"
  :class="[textColor, compBgColor, compBgColorHover, {active: active}]"
  style="min-height: 25px;"
  @click="$emit('click')"
  @mouseover="$emit('mouseover')"
  @mouseleave="$emit('onmouseleave')"
>
  <slot></slot>
</div>
</template>

<script>

import componentBase from '../componentBase.vue';

export default {
  extends: componentBase,
  name: 'HListItem',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click', 'mouseover', 'onmouseleave'],
  data() {
    return {
    };
  },
  mounted() {
    this.compBgColor = this.bgColor;
    this.onBackgroundHover();
  },
  watch: {
    bgColor(value) {
      this.onBackgroundHover();
      this.compBgColor = value;
    },
  },
  methods: {
    onBackgroundHover() {
      this.getBackgroundHover(false);
    },
    // onClick() {
    //   this.$emit('click');
    // },
    // onMouseover() {
    //   this.$emit('mouseover');
    // },
    // onMouseleave() {
    //   this.$emit('onmouseleave');
    // },
  },
};
</script>
