<template lang="pug">
div.flex.flex-column.full-width
  .div(v-if="separator")
    h-separator
  .flex.flex-column.full-with(@click="selectCollapse()")
    .flex.full-width(
      class="color-hover"
      :class="[textColor, compBgColor, compBgColorHover]"
    )
      .flex.flex-items-center(v-if="icon && icon.length" style="padding-left:16px;padding-right:8px;height:40px;")
        h-icon(:icon="icon" :text-color="textColor")
      .flex.flex-1.flex-items-center.overflow-hidden(style="padding-left:16px;")
        | {{text}}
      .flex.flex-items-center.arrow(style="padding-left:16px;padding-right:16px;")
        h-icon(
          :text-color="textColor"
          :class="{ 'arrow2': !isVisible, 'arrow': isVisible }"
          icon="fas fa-angle-down"
        )
    .full-width(v-if="isVisible")
      slot
  div(v-if="separator")
    h-separator

</template>

<script>

import componentBase from '../componentBase.vue';

export default {
  name: 'HCollapsibleMenu',
  extends: componentBase,
  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isVisible: false,
      separator: false,
      hasicon: false,
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
    selectCollapse() {
      this.$parent.selectCollapse(this);
    },
    setVisible(value) {
      this.isVisible = value;
    },
    setSeparator(value) {
      this.separator = value;
    },
    toggle() {
      this.setVisible(!this.isVisible);
      this.setSeparator(!this.separator);
    },
  },
};
</script>

<style scoped>

</style>
