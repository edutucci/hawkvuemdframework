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
        h-fa-icon(:text-color="textColor" icon="fas fa-check" :size="iconSize")
      .col-auto.h-pl-xs(v-else-if="icon && icon.length > 0")
        h-fa-icon(:text-color="textColor" :icon="icon" :size="iconSize")
      .col-auto.h-pl-xs(v-else-if="avatar && avatar.length > 0")
        h-avatar(:src="avatar" :size="avatarSize")
      .col(v-if="text && text.length > 0" class="h-ml-xs h-mr-xs")
        | {{text}}
      .col-auto(v-if="closable" @click.stop="onClose")
        h-fa-icon(:text-color="textColor" icon="fas fa-times-circle" :size="iconSize" )

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    value: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      chiptextcolor: this.textColor,
      typography: 'text-body1',
      iconSize: '16px',
      avatarSize: '24px'
    }
  },
  mounted () {
    this.changeComponentBackground()
    this.changeBorderColor()
    this.changeSizes()
  },
  watch: {
    bgColor: function (value) {
      this.changeComponentBackground()
      this.changeBorderColor()
    },
    outlined: function (value) {
      this.changeComponentBackground()
      this.changeBorderColor()
    },
    dense: function (value) {
      this.changeSizes()
    }
  },
  methods: {
    changeComponentBackground () {
      this.compBgColor = this.bgColor
      if (this.outlined) {
        this.compBgColor = 'bg-white'
      } else {
        if (this.bgColor === 'bg-white') {
          this.compBgColor = 'bg-gray300'
        }
      }
    },
    changeBorderColor () {
      this.compBorderColor = ''
      if (this.outlined) {
        if (this.bgColor === 'bg-white') {
          this.compBorderColor = 'border-gray500'
        } else {
          this.compBorderColor = this.bgColor
          this.compBorderColor = this.compBorderColor.replace(/bg/, 'border')
        }
      }
    },
    changeSizes () {
      this.iconSize = (!this.dense) ? '16px' : '12px'
      this.avatarSize = (!this.dense) ? '24px' : '16px'
      this.typography = (!this.dense) ? 'text-body1' : 'text-caption'
    },
    onClick () {
      if (this.filter && this.value !== undefined) {
        let val = !this.value
        this.$emit('input', val)
      }
    },
    onClose () {
      console.log('chip close fired')
      if (!this.disabled) {
        this.$emit('onClose')
      }
    }
  }
}
</script>
