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
  )
</template>

<script>

import maskCore from './maskCore.js'

export default {
  name: 'HInputMask',
  props: {
    value: {
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
    },
    floatLabel: {
      type: String
    },
    staticLabel: {
      type: String
    },
    errorLabel: {
      type: String
    },
    helperText: {
      type: String
    },
    icon: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    cleartext: {
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
      this.inputDisplayMask = this.maskObj.maskedValue
    },
    inputDisplayMask: function (newValue) {
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
        console.log('processing mask')
        // let myInput = document.getElementById('my-input-mask').getElementsByTagName('input')[0]
        let maskObj = await maskCore.createMask(this.mask, value)
        this.changeInputText(maskObj)
      }
    },
    changeInputText (maskObj) {
      this.maskObj.rawValue = maskObj.rawValue
      this.maskObj.maskedValue = maskObj.maskedValue

      // this.setCursorPos(this.inputDisplayMask, myInput)
      let modelValue = (!this.masked) ? maskObj.rawValue : maskObj.maskedValue
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
