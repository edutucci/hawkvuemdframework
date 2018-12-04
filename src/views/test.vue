<template>
  <div>
    <h1>Teste</h1>
    <!-- <div style="width:600px;background: gray">600px</div>
    <div class="col-xs-12" style="background: red">col-xs-12</div>

    <h1></h1>
    <div style="width:1200px;background: gray">1200px</div>
    <div class="col-sm-12" style="background: red">col-sm-6</div>

    <h1></h1>
    <div style="width:1600px;background: gray">1600px</div>
    <div class="col-md-6" style="background: red">col-md-6</div>

    <h1></h1>
    <div style="width:1920px;background: gray">1920px</div>
    <div class="col-lg-6" style="background: red">col-lg-6</div>

    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" style="background: blue">example</div> -->
    <h-input float-label="Name" placeholder="" left-icon="fas fa-phone" cleartext v-model="inputDisplayTelefone" id="my-input-telefone" @focus="onFocusTelefone"/>
    <h-btn textbutton text="teste" @click="applyText"/>
    <input v-model="inputDisplayCep" id="my-input-cep" @focus="onFocusCep"/>
  </div>
</template>

<script>

import maskCore from './maskCore.js'

export default {
  data () {
    return {
      inputDisplayTelefone: '',
      inputDisplayCep: '',
      inputDisplayPlaca: '',
      maskTel: '(11)1111-1111',
      maskCep: '11111-111',
      maskPlacaCarro: 'AAA-1111'
    }
  },
  watch: {
    inputDisplayCep: function (newValue) {
      // console.log('mudou value: ' + newValue)
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
      // console.log('value vale: ' + value)
      let myInput = document.getElementById('my-input-telefone').getElementsByTagName('input')[0]
      let inputDisplayTelefone = await maskCore.setMaskValue(this.maskTel, value)
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
      this.onChangeTelefone(this.inputDisplayTelefone)
    },
    onFocusCep (value) {
      this.onChangeCep(this.inputDisplayCep)
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
