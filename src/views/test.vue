<template>
  <div>
    <h-input float-label="Phone" placeholder="" left-icon="fas fa-phone" cleartext v-model="inputDisplayTelefone" id="my-input-telefone" @focus="onFocusTelefone"/>
    <h-input float-label="ZipCode" placeholder="" left-icon="fas fa-phone" cleartext v-model="inputDisplayCep" id="my-input-cep" @focus="onFocusCep"/>
    <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="Change Text" @click="applyText"/>
    <html-separator/>
    <h-input-plus-minus circlebuttons v-model="plusMinusModel"></h-input-plus-minus>
    <h-input-plus-minus v-model="plusMinusModel"></h-input-plus-minus>
  </div>
</template>

<script>

import maskCore from './maskCore.js'

export default {
  data () {
    return {
      plusMinusModel: -999,
      inputDisplayTelefone: '',
      inputDisplayCep: '',
      inputDisplayPlaca: '',
      maskTel: '(11)1111-1111',
      maskCep: '11111-111',
      maskPlacaCarro: 'AAA-1111',
      maskModel: {
        rawValue: '',
        maskedValue: ''
      }
    }
  },
  watch: {
    inputDisplayCep: function (newValue) {
      // console.log('mudou value: ' + newValue)
      this.onChangeCep(newValue)
    },
    inputDisplayTelefone: function (newValue) {
      // console.log('mudou telefone: ' + newValue)
      this.onChangeTelefone(newValue)
    }
  },
  methods: {
    applyText () {
      this.inputDisplayTelefone = 'moudou aeeeeeeeeeeee'
    },
    async onChangeTelefone (value) {
      console.log('value vale: ' + value)
      let myInput = document.getElementById('my-input-telefone').getElementsByTagName('input')[0]
      let inputDisplayTelefone = await maskCore.setMaskValue(this.maskTel, value)
      console.log('inputDisplayTelefone vale: ' + inputDisplayTelefone)
      this.inputDisplayTelefone = inputDisplayTelefone
      // console.log('inputDisplayTelefone: ' + inputDisplayTelefone)
      // console.log('this.inputDisplayTelefone: ' + this.inputDisplayTelefone)
      this.setCursorPos(this.inputDisplayTelefone, myInput)
    },
    onChangeCep (value) {
      let myInput = document.getElementById('my-input-cep')
      this.inputDisplayCep = maskCore.setMaskValue(this.maskCep, value)
      this.setCursorPos(this.inputDisplayCep, myInput)
    },
    onChangePlaca (value) {
      let myInput = document.getElementById('my-input-placa')
      this.inputDisplayPlaca = maskCore.setMaskValue(this.maskPlacaCarro, value)
      this.setCursorPos(this.inputDisplayPlaca, myInput)
    },
    setCursorPos (mask, input) {
      let cursorPos = mask.indexOf('_')
      this.$nextTick(() => {
        this.setCaretPosition(input, cursorPos)
      })
    },
    onFocusTelefone (value) {
      // this.onChangeTelefone(this.inputDisplayTelefone)
    },
    onFocusCep (value) {
      // this.onChangeCep(this.inputDisplayCep)
    },
    onFocusPlaca (value) {
      this.onChangePlaca(this.inputDisplayPlaca)
    },
    onBlur () {
      // this.inputDisplay = this.maskInput.getRawValue().replace(/_/g, '')
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

<style scoped>
.btn {
  padding: 8px;
  font-size: 16px;
  outline: none;
  white-space: nowrap;
  display: inline-flex;
  cursor: pointer;
}

.bg1 {
  background-color: brown;
}

.bg2 {
  background-color: gray;
}

.bg3 {
  background-color: lightskyblue;
}
</style>
