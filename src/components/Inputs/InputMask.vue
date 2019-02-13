<template lang="pug">
  h-input(
    v-model="inputDisplayMask"
    :readonly="readonly"
    :cleartext="cleartext"
    :left-icon="icon"
    :float-label="floatLabel"
    :static-label="staticLabel"
    :placeholder="placeholder"
    :helper-text="helperText"
    :error-label="errorLabel"
    :outlined="outlined"
    @focus="onInputFocus()"
    @blur="onInputBlur()"
    @keydown.down="onKeyDown"
    @keydown.tab="onTab"
    @keyup.enter="onEnter"
    @keyup.esc="onEscape"
    @click="onClick"
  )
</template>

<script>

import maskCore from './maskCore.js'
import inputBase from './inputBase'

export default {
  extends: inputBase,
  name: 'HInputMask',
  props: {
    value: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    mask: {
      type: String,
      default: ''
    },
    masked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputDisplayMask: '',
      maskObj: {
        rawValue: '',
        maskedValue: ''
      }
    }
  },
  watch: {
    value: function (newValue) {
      // console.log('mudou value: ' + newValue)
      this.inputDisplayMask = this.maskObj.maskedValue
    },
    inputDisplayMask: function (newValue) {
      // console.log('mudou inputDisplayMask: ' + newValue)
      this.onChangeMask(newValue)
    },
    masked: function (newValue) {
      this.changeInputText(this.maskObj)
    }
  },
  methods: {
    async onChangeMask (value) {
      // console.log('value vale: ' + value)
      // console.log('maskObj.maskedValue vale: ' + this.maskObj.maskedValue)

      if (value !== this.maskObj.maskedValue) {
        // console.log('processing mask')
        // let myInput = document.getElementById('my-input-mask').getElementsByTagName('input')[0]
        let maskObj = await maskCore.createMask(this.mask, value)
        this.changeInputText(maskObj)
      }

      if (value.length > this.maskObj.maskedValue.length) {
        // console.log('value > q mask: ')
        this.inputDisplayMask = this.maskObj.maskedValue
      }
    },
    changeInputText (maskObj) {
      this.maskObj.rawValue = maskObj.rawValue
      this.maskObj.maskedValue = maskObj.maskedValue

      // this.setCursorPos(this.inputDisplayMask, myInput)
      let modelValue = (!this.masked) ? this.maskObj.rawValue : this.maskObj.maskedValue
      this.$emit('input', modelValue)
    },
    setCursorPos (mask, input) {
      let cursorPos = mask.indexOf('_')
      this.$nextTick(() => {
        this.setCaretPosition(input, cursorPos)
      })
    },
    setCaretPosition (ctrl, pos) {
      if (ctrl) {
        ctrl.focus()
        ctrl.setSelectionRange(pos, pos)
      }
    }
  }
}
</script>
