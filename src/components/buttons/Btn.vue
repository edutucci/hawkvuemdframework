<template lang="pug">
  div(class="h-btn" style="display:inline-flex;")
    div(
      @click="onClick"
      class="btn flex flex-items-center full-width color-hover position-relative"
      :class="\
        [compBgColor, textcolor, compBgColorHover, size, \
        { 'fab': fab, 'contained': (!textButton && !outlined), 'textbutton': textButton, 'outlined': outlined, \
          disabled: disabled, rounded: rounded }]"
    )
      div(class="btn-content full-width flex flex-justify-center" :class="[typography]")
        div(v-if="leftIcon && leftIcon.length > 0" class="flex-align-center")
          h-fa-icon(:textcolor="textcolor" :icon="leftIcon" size="16px")
        div(v-if="text && text.length > 0" class="flex flex-align-center h-ml-sm h-mr-sm")
          | {{buttonText}}
        div(v-if="rightIcon && rightIcon.length > 0" class="flex-align-center")
          h-fa-icon(:textcolor="textcolor" :icon="rightIcon" size="16px")
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
    }
  },
  components: {
  },
  data () {
    return {
      typography: 'text-body1'
    }
  },
  mounted () {
    this.onBackgroundHover()
    this.changeComponentBackground()
    this.changeFontSize()
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
      this.compBorderColor = ''
      if (value) {
        this.onBackgroundHover()
        this.changeBorderColor()
      }
      this.changeComponentBackground()
    },
    bgcolor: function (value) {
      this.compBgColorHover = ''
      this.compBorderColor = ''
      this.onBackgroundHover()
      this.changeComponentBackground()
    },
    size: function (value) {
      this.changeFontSize()
    }
  },
  computed: {
    buttonText () {
      return (!this.caps) ? this.text : this.text.toUpperCase()
    }
  },
  methods: {
    changeComponentBackground () {
      this.compBgColor = this.bgcolor
      if (this.textButton || this.outlined) {
        this.compBgColor = 'bg-transparent'
      }
    },
    changeBorderColor () {
      this.compBorderColor = this.bgcolor
      this.compBorderColor = this.compBorderColor.replace(/bg/, 'border')
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
        this.$emit('click')
      }
    },
    onBackgroundHover () {
      if (!this.textButton && !this.outlined) {
        this.getBackgroundHover(false)
      } else {
        this.getBackgroundHover(true)
      }
    }
  }
}
</script>

<style scoped>

</style>
