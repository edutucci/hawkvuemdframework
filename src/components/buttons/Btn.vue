<template lang="pug">
  div(class="h-btn btn-container" style="display:inline-flex; cursor: pointer;")
    div(
      @click="onClick"
      class="btn btn-content flex flex-items-center full-width color-hover position-relative border"
      :class="\
        [compBgColor, textColor, size, compBgColorHover, compBorderColor, compActiveClass, \
        { 'active': (isActive || active), 'border': outlined, 'fab': fab, \
          'contained': (!textButton && !outlined), 'textbutton': textButton, 'outlined': outlined, \
          disabled: disabled, rounded: rounded }]"
    )
      div(class=" full-width flex flex-justify-center" :class="[typography]")
        div(v-if="leftIcon && leftIcon.length > 0" class="flex-align-center")
          h-fa-icon(:text-color="textColor" :icon="leftIcon" size="16px")
        div(v-if="text && text.length > 0" class="flex flex-align-center h-ml-xs h-mr-xs")
          | {{buttonText}}
        div(v-if="rightIcon && rightIcon.length > 0" class="flex-align-center")
          h-fa-icon(:text-color="textColor" :icon="rightIcon" size="16px")
        slot

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  name: 'HBtn',
  extends: componentBase,
  props: {
    textButton: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String
    },
    leftIcon: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    caps: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    active: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String,
      default: ''
    }
  },
  components: {
  },
  data () {
    return {
      typography: 'text-body1',
      isActive: false
    }
  },
  mounted () {
    this.onBackgroundHover()
    this.changeComponentBackground()
    this.changeFontSize()
    this.changeBorderColor()
  },
  watch: {
    textButton: function (value) {
      this.compBgColorHover = ''
      this.compBorderColor = ''
      if (value) {
        this.onBackgroundHover()
      }
      this.changeComponentBackground()
    },
    outlined: function (value) {
      this.compBgColorHover = ''
      if (value) {
        this.onBackgroundHover()
        this.changeBorderColor()
      }
      this.changeComponentBackground()
    },
    bgColor: function (value) {
      this.compBgColorHover = ''
      this.onBackgroundHover()
      this.changeComponentBackground()
      this.changeBorderColor()
    },
    size: function (value) {
      this.changeFontSize()
    }
  },
  computed: {
    buttonText () {
      let text = this.text
      if (text) {
        text = (!this.caps) ? this.text : this.text.toUpperCase()
      }
      return text
    },
    compActiveClass () {
      return (this.isActive || this.active) ? this.activeClass : ''
    }
  },
  methods: {
    changeComponentBackground () {
      this.compBgColor = this.bgColor
      if (this.textButton || this.outlined) {
        this.compBgColor = 'bg-transparent'
      }
    },
    changeBorderColor () {
      this.compBorderColor = ''
      if (this.outlined) {
        this.compBorderColor = this.bgColor
        this.compBorderColor = this.compBorderColor.replace(/bg/, 'border')
      }
    },
    changeFontSize () {
      switch (this.size) {
        case 'xs':
          this.typography = 'text-caption'
          break
        case 'sm':
          this.typography = 'text-body2'
          break
        case 'md':
          this.typography = 'text-body1'
          break
        case 'lg':
          this.typography = 'text-h5'
          break
        case 'xl':
          this.typography = 'text-h4'
          break
        default:
          this.typography = 'text-body1'
      }
    },
    onClick () {
      if (!this.disabled) {
        try {
          this.$parent.setActiveButton(this)
        } catch (error) {

        }

        this.$emit('click')
      }
    },
    onBackgroundHover () {
      if (!this.textButton && !this.outlined) {
        this.getBackgroundHover(false)
      } else {
        this.getBackgroundHover(true)
      }
    },
    setActive (value) {
      this.isActive = value
    }
  }
}
</script>

<style scoped>

</style>
