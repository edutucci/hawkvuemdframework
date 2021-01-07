<template lang="pug">
.h-chip.chip-container(
  style="display:inline-flex; cursor: pointer;"
)
  .row.align-items-center(
    @click="onClick"
    class="chip full-width flex-justify-center flex-items-center full-height"
    :class="\
      [compBgColor, textColor, compBorderColor, typography, \
      { 'border': outlined, 'dense': dense }]"
  )
    .col-auto.h-pl-xs(v-if="this.filter && value")
      h-icon(:text-color="textColor" icon="fas fa-check" :size="iconSize")
    .col-auto.h-pl-xs(v-else-if="icon && icon.length > 0")
      h-icon(:text-color="textColor" :icon="icon" :size="iconSize")
    .col-auto.h-pl-xs(v-else-if="avatar && avatar.length > 0")
      h-image(:src="avatar" :size="avatarSize" avatar)
    .col(v-if="text && text.length > 0" class="h-ml-xs h-mr-xs")
      | {{text}}
    .col-auto(v-if="closable" @click.stop="onClose")
      h-icon(:text-color="textColor" icon="fas fa-times-circle" :size="iconSize" )

</template>

<script>

import componentBase from '../componentBase.vue';

export default {
  extends: componentBase,
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'onClose'],
  data() {
    return {
      chiptextcolor: this.textColor,
      typography: 'text-body1',
      iconSize: '16px',
      avatarSize: '24px',
    };
  },
  mounted() {
    this.changeComponentBackground(this.bgColor, this.outlined);
    this.changeBorderColor();
    this.changeSizes(this.dense);
  },
  watch: {
    bgColor(value) {
      this.changeComponentBackground(value, this.outlined);
      this.changeBorderColor();
    },
    outlined(value) {
      this.changeComponentBackground(this.bgColor, value);
      this.changeBorderColor();
    },
    dense(value) {
      this.changeSizes(value);
    },
  },
  methods: {
    changeComponentBackground(bgColor, outlined) {
      this.compBgColor = bgColor;
      if (outlined) {
        this.compBgColor = 'bg-white';
      } else if (bgColor === 'bg-white') {
        this.compBgColor = 'bg-gray300';
      }
    },
    changeBorderColor() {
      this.compBorderColor = '';
      if (this.outlined) {
        if (this.bgColor === 'bg-white') {
          this.compBorderColor = 'border-gray500';
        } else {
          this.compBorderColor = this.bgColor;
          this.compBorderColor = this.compBorderColor.replace(/bg/, 'border');
        }
      }
    },
    changeSizes(dense) {
      this.iconSize = (!dense) ? '16px' : '12px';
      this.avatarSize = (!dense) ? '24px' : '16px';
      this.typography = (!dense) ? 'text-body1' : 'text-caption';
    },
    onClick() {
      if (this.filter && this.modelValue !== undefined) {
        const val = !this.modelValue;
        this.$emit('update:modelValue', val);
      }
    },
    onClose() {
      // console.log('chip close fired');
      if (!this.disabled) {
        this.$emit('onClose');
      }
    },
  },
};
</script>
