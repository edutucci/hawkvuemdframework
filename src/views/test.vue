<template>
  <div>
    <!-- <h-input float-label="Phone" placeholder="" left-icon="fas fa-phone" cleartext v-model="inputDisplayTelefone" id="my-input-telefone" @focus="onFocusTelefone"/>
    <h-input float-label="ZipCode" placeholder="" left-icon="fas fa-phone" cleartext v-model="inputDisplayCep" id="my-input-cep" @focus="onFocusCep"/>
    <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="Change Text" @click="applyText"/>
    <html-separator/>
    <h-input-plus-minus circlebuttons v-model="plusMinusModel"></h-input-plus-minus>
    <h-input-plus-minus v-model="plusMinusModel"></h-input-plus-minus> -->
    <!-- <div style="display:inline-block; background: gray">
      <p>gray</p>
    </div> -->
    <div class="flex cursor-pointer" style="">
      <h-list-item-side class="bg-primary">
        <h-fa-icon icon="fas fa-home"/>
      </h-list-item-side>
      <h-list-item-side class="bg-positive">
        <h-fa-icon icon="fas fa-home"/>
      </h-list-item-side>
    </div>

    <h1>Single Line Item</h1>
    <html-separator/>
    <div style="width: 350px">
      <h-list>
        <h-list-body>
          <h-list-item>
            <h-list-item-content>
              <h-list-item-text title="House in the clouds"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item>
            <h-list-item-content>
              <h-list-item-text title="At the top"/>
            </h-list-item-content>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div>

    <h1>Two Line Item</h1>
    <div style="width: 350px">
      <h-list>
        <h-list-body>
          <h-list-item>
            <h-list-item-content>
              <h-list-item-text title="House in the clouds" caption="Jonathan creates a new world"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item>
            <h-list-item-content>
               <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
            </h-list-item-content>
          </h-list-item>
          <html-separator/>
         <h-list-item>
            <h-list-item-side>
              <h-fa-icon icon="fas fa-film"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="House in the clouds" caption="Jonathan creates a new world"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item>
            <h-list-item-side>
              <h-fa-icon icon="fas fa-plane"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
            </h-list-item-content>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div>

    <h1>Three Line Item</h1>
    <div style="width: 350px">
      <h-list>
        <h-list-body>
          <h-list-item>
            <h-list-item-side>
              <h-avatar src=""/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Brunch this weekend?" caption="I`ll be in your neighborhood doing errands this weekend."/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item>
            <h-list-item-side>
              <h-avatar src=""/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Summer" caption="Wish I could come, but I'm out out town this weekend."/>
            </h-list-item-content>
          </h-list-item>
          <html-separator/>
          <h-list-item>
            <h-list-item-side>
              <h-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
            </h-list-item-content>
            <h-list-item-side>
              <h-list-item-text title="01"/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-side>
              <h-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
            </h-list-item-content>
            <h-list-item-side>
              <h-list-item-text title="02"/>
            </h-list-item-side>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div>

    <h1>Custom Item</h1>
    <div style="width: 350px">
      <h-list>
        <h-list-body>
          <h-list-item>
            <h-list-item-side>
              <h-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
            </h-list-item-content>
            <h-list-item-side>
              <div class="text-center">
                <h-fa-icon icon="fas fa-star" textcolor="text-yellowA400"/>
                <h-list-item-text title="01"/>
              </div>
            </h-list-item-side>
          </h-list-item>
          <html-separator/>
          <h-list-item>
            <h-list-item-side>
              <h-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
            </h-list-item-content>
            <h-list-item-side>
              <div class="text-center">
                <h-fa-icon icon="fas fa-star" textcolor="text-yellowA400"/>
                <h-list-item-text title="02"/>
              </div>
            </h-list-item-side>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div>

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
