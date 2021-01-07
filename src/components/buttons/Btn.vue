<template lang="pug">
div(
  class="h-btn btn-container no-user-select"
  style="display:inline-flex; cursor: pointer;"
  :id="containerId"
)
  div(
    @click="onClick"
    class="btn btn-content flex flex-items-center full-width color-hover position-relative"
    :class="\
      [compBgColor, textColor, size, compBgColorHover, compBorderColor, compActiveClass, \
      { 'btn2': !dropdown, 'active': (isActive || active), 'border': outlined, 'fab': fab, \
        'contained': (!textButton && !outlined), 'btn-dropdown': dropdown, 'textbutton': textButton, 'outlined': outlined, \
        disabled: (disabled && !((textButton || fab) && bgColor === 'bg-transparent')), rounded: rounded }]"
  )
    div(v-if="!dropdown" class="full-width flex flex-justify-center flex-items-center full-height" :class="[typography]")
      div(v-if="leftIcon && leftIcon.length > 0" class="flex-align-center")
        h-icon(class="btn-icon" :text-color="textColor" :icon="leftIcon" size="16px")
      div(v-if="text && text.length > 0" class="flex flex-align-center h-ml-xs h-mr-xs")
        | {{buttonText}}
      div(v-if="rightIcon && rightIcon.length > 0" class="flex-align-center")
        h-icon(class="btn-icon" :text-color="textColor" :icon="rightIcon" size="16px")
      slot
    div(
      v-else
      class="no-user-select"
    )
      .flex.align-items-center.cursor-pointer.full-height
        h-icon.h-mr-xs(
          v-if="leftIcon && leftIcon.length > 0"
          :icon="leftIcon"
          :text-color="textColor"
        )
        h-image.h-mr-xs(
          v-else-if="avatar && avatar.length > 0"
          :src="avatar"
          avatar
        )
        h-image.h-mr-xs(v-else-if="img && img.length > 0"
          :src="img"
        )
        .btn-dropdown-content.flex.flex-items-center.text-body1(
          :class="[textColor]"
        )
          .text-body1(
            v-if="text"
          )
            | {{text}}

          div
            slot(name="content")

          h-icon.h-ml-xs(
            :icon="dropDownIcon"
            :text-color="textColor"
            size="18px"
          )

      .dropdown-content.bg-white.shadow-2.border-radius(
        v-if="showdropdown"
        :style="[dropdownObject]"
        :id="menuid"
        @click="showdropdown = false"
        v-click-away="close"
      )
        slot

</template>

<script>

// eslint-disable-next-line import/no-extraneous-dependencies
import uuidv1 from 'uuid/v1';
import componentBase from '../componentBase.vue';
import viewport from '../others/viewport';

export default {
  name: 'HBtn',
  mixins: [],
  extends: componentBase,
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    textButton: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    fab: {
      type: Boolean,
      default: false,
    },
    dropdown: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    rightIcon: {
      type: String,
    },
    leftIcon: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    caps: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
    },
    active: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    dropDownIcon: {
      type: String,
      default: 'fas fa-caret-down',
    },
  },
  emits: ['click', 'update:modelValue'],
  components: {
  },
  data() {
    return {
      typography: 'text-body1',
      isActive: false,

      // dropdown button
      menuid: uuidv1(),
      containerId: uuidv1(),
      showdropdown: false,
      dropdownObject: {
        left: '',
        right: '',
        bottom: '',
        top: '0',
        width: '',
      },
      containerRect: {
        top: 0,
        left: 0,
      },
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  mounted() {
    this.onBackgroundHover();
    this.changeComponentBackground(this.bgColor, this.outlined);
    this.changeFontSize();
    this.changeBorderColor();
    this.showdropdown = this.modelValue;
  },
  watch: {
    textButton(value) {
      this.compBgColorHover = '';
      this.compBorderColor = '';
      if (value) {
        this.onBackgroundHover();
      }
      this.changeComponentBackground(this.bgColor, this.outlined);
    },
    outlined(value) {
      this.compBgColorHover = '';
      // console.log('outlined mudou:', value)
      this.onBackgroundHover();
      this.changeBorderColor();
      this.changeComponentBackground(this.bgColor, value);
    },
    bgColor(value) {
      // console.log('this.bgColor changed', this.bgColor)
      this.compBgColorHover = '';
      this.onBackgroundHover();
      this.changeComponentBackground(value, this.outlined);
      this.changeBorderColor();
    },
    size(value) {
      this.changeFontSize(value);
    },
    modeValue(value) {
      console.log('mudou modeValue:', value);
      this.showdropdown = value;
      if (value) {
        this.checkViewport();
      }
    },
  },
  computed: {
    buttonText() {
      let { text } = this;
      if (text) {
        text = (!this.caps) ? this.text : this.text.toUpperCase();
      }
      return text;
    },
    compActiveClass() {
      return (this.isActive || this.active) ? this.activeClass : '';
    },
  },
  methods: {
    changeComponentBackground(bgColor, outlined) {
      this.compBgColor = bgColor;
      if (this.textButton || outlined) {
        this.compBgColor = 'bg-transparent';
      }
    },
    changeBorderColor() {
      this.compBorderColor = '';
      if (this.outlined) {
        this.compBorderColor = this.bgColor;
        this.compBorderColor = this.compBorderColor.replace(/bg/, 'border');
      }
    },
    changeFontSize(size) {
      switch (size) {
        case 'xs':
          this.typography = 'text-caption';
          break;
        case 'sm':
          this.typography = 'text-body2';
          break;
        case 'md':
          this.typography = 'text-body1';
          break;
        case 'lg':
          this.typography = 'text-h5';
          break;
        case 'xl':
          this.typography = 'text-h4';
          break;
        default:
          this.typography = 'text-body1';
      }
    },
    onClick() {
      if (!this.disabled) {
        if (!this.dropdown) {
          this.$emit('click');
        } else if (!this.modelValue) {
          this.$emit('click');
        } else {
          this.close();
        }
      }
    },
    onBackgroundHover() {
      if (!this.textButton && !this.outlined) {
        this.getBackgroundHover(false);
      } else {
        this.getBackgroundHover(true);
      }
    },
    setActive(value) {
      this.isActive = value;
    },
    close() {
      this.$emit('update:modelValue', false);
    },
    updateDropdownPosition() {
      if (!this.showdropdown) {
        return false;
      }
      const containerElement = document.getElementById(this.containerId);
      if (containerElement) {
        const containerRect = containerElement.getClientRects();
        if (this.containerRect.top !== containerRect[0].top
          || this.containerRect.left !== containerRect[0].left
          || this.window.width !== window.innerWidth
          || this.window.height !== window.innerHeight
        ) {
          this.checkViewport();
        } else {
          setTimeout(() => {
            this.updateDropdownPosition();
          }, 200);
        }
      }

      return true;
    },
    updateContainerRect(containerRect) {
      this.containerRect.top = containerRect[0].top;
      this.containerRect.left = containerRect[0].left;
    },
    checkViewport() {
      this.dropdownObject.left = '';
      this.dropdownObject.right = '';
      this.dropdownObject.top = '';
      this.dropdownObject.bottom = '';
      this.showdropdown = true;

      const containerElement = document.getElementById(this.containerId);
      if (containerElement) {
        const containerRect = containerElement.getClientRects();
        this.updateContainerRect(containerRect);

        this.dropdownObject.top = `${containerRect[0].bottom}px`;
        this.dropdownObject.right = `${window.innerWidth - containerRect[0].right}px`;
        this.windowWidth = window.innerWidth;
        this.window.height = window.innerHeight;

        this.$nextTick(() => {
          const menu = document.getElementById(this.menuid);
          if (menu) {
            if (viewport.elementBelowOfPage(menu)) {
              const menuHeight = menu.clientHeight;
              this.dropdownObject.top = `${this.containerRect.top - menuHeight}px`;
            }
            const rectMenu = menu.getClientRects();
            if (rectMenu['0'].width > containerRect['0'].right) {
              this.dropdownObject.right = '';
              this.dropdownObject.left = `${containerRect['0'].left}px`;
            }
          }
          setTimeout(() => {
            this.updateDropdownPosition();
          }, 200);
        });
      }
    },
  },
};
</script>

<style scoped>

</style>
