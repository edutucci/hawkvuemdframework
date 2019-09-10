<template lang="pug">
  .main-input-container(
    :class="[bgColor]"
  )
    .full-width
      .flex.full-width
        .flex(v-if="leftIcon && leftIcon.length")
          h-fa-icon.h-pr-sm.h-mt-xs(
            :icon="leftIcon"
            size="16px"
          )
        .flex.flex-1.flex-column.full-width
          .full-with.input-container(
            :class="[inputBorder, { outlined:outlined, filled: filled, rounded: rounded }]"
          )
            .flex.flex-column.input-field-container
              .full-width.text-caption.text-gray(
                :class="[textColor, {primary: primary, nofocus: nofocus, 'input-container-rounded': rounded}]"
              )
                | {{label}}
              .full-width
                slot

</template>

<script>

import InputProperties from './InputProperties'

export default {
  extends: InputProperties,
  name: 'InputContainer',
  props: {
  },
  data () {
    return {
      inputBorder: '',
      primary: false,
      inputContainerBorderStyle: {
      },
      nofocus: true,
      labelStyle: {
        fontSize: '12px',
        position: 'relative'
      },
      inputLabelStyle: {
        position: 'absolute',
        top: '2px',
        left: '9px',
        fontSize: '12px',
        zIndex: '2'
      }
    }
  },
  mounted () {
    this.changeBorderColor()
  },
  methods: {
    changeBorderColor () {
      this.inputBorder = this.borderColor
      if (this.textColor && this.textColor.length > 1) {
        let color = this.textColor.split('-')[1]
        if (color) {
          this.inputBorder = 'border-' + color
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
