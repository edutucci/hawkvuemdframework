<template lang="pug">
  h-input(
    float-label="Phone"
    left-icon="fas fa-phone"
    cleartext
    v-model="inputDisplayMask"
    id="my-input-mask"
  )
</template>

<script>

import maskCore from './maskCore.js'

export default {
  name: 'HInputMask',
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          rawValue: '',
          maskedValue: ''
        }
      }
    },
    mask: {
      type: String
    }
  },
  data () {
    return {
      inputDisplayMask: ''
    }
  },
  watch: {
    inputDisplayMask: function (newValue) {
      // console.log('mudou telefone: ' + newValue)
      this.onChangeMask(newValue)
    }
  },
  methods: {
    async onChangeMask (value) {
      console.log('value vale: ' + value)
      // let myInput = document.getElementById('my-input-mask').getElementsByTagName('input')[0]
      let maskObj = await maskCore.createMask(this.mask, value)
      let inputDisplayMask = maskObj.maskedValue
      // myInput.value = inputDisplayMask
      console.log('inputDisplayMask vale: ' + inputDisplayMask)
      this.inputDisplayMask = inputDisplayMask
      // this.setCursorPos(this.inputDisplayMask, myInput)
      this.$emit('input', maskObj)
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
