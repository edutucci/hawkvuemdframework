<template lang="pug">
  .main-input-container(
    :class="[bgcolor, { rounded: rounded }]"
  )
    .full-width
      .flex.full-width
        .flex.flex-items-center(v-if="leftIcon && leftIcon.length" style="padding: 6px")
          div
            h-fa-icon(
              :icon="leftIcon"
              size="18px"
            )
        .flex.flex-1.flex-column.full-width
          .full-with.input-container.border-bottom(
            :class="[inputBorder, { outline:outline, filled: filled, rounded: rounded }]"
          )
            .flex.flex-column.input-field-container
              .full-width.input-label(
                :class="[textcolor, {primary: primary, nofocus: nofocus, 'input-container-rounded': rounded}]"
              )
                | {{label}}
              .full-width(style="padding: 4px 0px")
                slot
    .full-width(style="margin-left: 30px")
      .flex.flex-column
        .flex.full-width.helper-text
          .flex-1(
            v-if="helperText"
          )
            | {{helperText}}
          .flex(
            v-if="textCounter"
          )
            | {{textCounter}}
      .flex.flex-column
        .flex.full-with.error-message(
          v-if="errorMessage"
        )
          | {{errorMessage}}
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
      if (this.textcolor && this.textcolor.length > 1) {
        let color = this.textcolor.split('-')[1]
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
