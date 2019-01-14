<template>
  <div>
    <!-- <h1>Teste</h1>
    <html-article
      border="border-negative"
      border-type="chip"
      type='outlined'
      bgcolor="bg-white"
      textcolor="text-primary"
    >
      body html article
    </html-article>

    <html-article
      class="h-ml-md"
      border="border-negative"
      border-type="radius"
      type='outlined'
      bgcolor="bg-white"
      textcolor="text-primary"
    >
      body html article
    </html-article>
    <html-separator/>
    <div style="display:inline-block;">
      <div class="btn bg1">
        BBBBB
      </div>
    </div>
    <div style="display:inline-block;">
      <div class="btn bg2">
        BBBBB
      </div>
    </div>
    <div class="btn bg3">
      BBBBB
    </div>-->

    <html-separator/>

    <div>
      <h-rating
        :messages="['muito mal', 'mal', 'bom', 'muito bom', 'excelente']"
        v-model="rating"
        halfpoints
        showmessages
      >
      </h-rating>
    </div>
    <div>
      model: {{rating}}
    </div>
    <div>
      <h-rating></h-rating>
    </div>

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
    <!-- <h-input float-label="Name" placeholder="" left-icon="fas fa-phone" cleartext v-model="inputDisplayTelefone" id="my-input-telefone" @focus="onFocusTelefone"/>
    <h-btn textbutton text="teste" @click="applyText"/>
    <input v-model="inputDisplayCep" id="my-input-cep" @focus="onFocusCep"/> -->

    <!-- <div>
      <h1>Criar Configuração</h1>
      <div class="flex">
        <div class="flex flex-items-center" >
          <div>
            <h-radio text="Opçao sem produto"></h-radio>
            <h-radio text="Opçao com produto"></h-radio>
          </div>
        </div>
        <div style="width: 256px">
          <div>
            <h1>Foto</h1>
          </div>
        </div>
      </div>
    </div> -->
     <html-separator/>
     <h-input-plus-minus circlebuttons v-model="plusMinusModel"></h-input-plus-minus>
     <h-input-plus-minus v-model="plusMinusModel"></h-input-plus-minus>

     <html-separator/>
     <h-carousel style="width:400px; height: 300px">
       <h-carousel-slider title="Elegant River" subtitle="Nice Place">
         <img src="img/mountains.jpg"  class="full-size"/>
       </h-carousel-slider>
       <h-carousel-slider title="Nallah" subtitle="Landscape">
          <img src="img/Nallah_Sindh.jpg" class="full-size"/>
        </h-carousel-slider>
       <h-carousel-slider title="Soccer Game" subtitle="Great Moments">
          <img src="img/90minute.png" class="full-size"/>
       </h-carousel-slider>
       <h-carousel-slider title="Elegant River" subtitle="Nice Place">
         <img src="img/mountains.jpg"  class="full-size"/>
       </h-carousel-slider>
       <h-carousel-slider title="Nallah" subtitle="Landscape">
          <img src="img/Nallah_Sindh.jpg" class="full-size"/>
        </h-carousel-slider>
       <h-carousel-slider title="Soccer Game" subtitle="Great Moments">
          <img src="img/90minute.png" class="full-size"/>
       </h-carousel-slider>
     </h-carousel>
    <html-separator/>
    <div>
      <h1>BORDERS COLORS</h1>
      <h1>Border With 1</h1>
      <div>
        <div class="bg-black border-white auto-size border-1" style="padding: 4px">
          <span class="text-white">Border white</span>
        </div>
        <div class="bg-white border-black auto-size border-1 h-ml-sm" style="padding: 4px">
          <span class="text-black">Border Black</span>
        </div>
        <div class="bg-white border-primary auto-size border-1 h-ml-sm" style="padding: 4px">
          <span class="text-primary">Border Primary</span>
        </div>
        <div class="bg-white border-secondary auto-size border-1 h-ml-sm" style="padding: 4px">
          <span class="text-secondary">Border Secondary</span>
        </div>
        <div class="bg-white border-positive auto-size border-1 h-ml-sm" style="padding: 4px">
          <span class="text-positive">Border Positive</span>
        </div>
      </div>
      <html-separator></html-separator>
      <h1>Border With 2</h1>
      <div>
        <div class="bg-white border-negative auto-size border-2" style="padding: 4px">
          <span class="text-negative">Border Negative</span>
        </div>
        <div class="bg-white border-info auto-size border-2 h-ml-sm" style="padding: 4px">
          <span class="text-info">Border Info</span>
        </div>
        <div class="bg-white border-warning auto-size border-2 h-ml-sm" style="padding: 4px">
          <span class="text-warning">Border Warning</span>
        </div>
        <div class="bg-white border-gray auto-size border-2 h-ml-sm" style="padding: 4px">
          <span class="text-black">Border Gray</span>
        </div>
      </div>
      <html-separator></html-separator>
      <h1>Border Corner Rounded</h1>
      <div>
        <div class="bg-white border-negative auto-size border-2 border-corner-rounded" style="padding: 4px">
          <span class="text-negative">Border Negative</span>
        </div>
        <div class="bg-white border-info auto-size border-2 border-corner-rounded h-ml-sm" style="padding: 4px">
          <span class="text-info">Border Info</span>
        </div>
      </div>
      <html-separator></html-separator>
      <h1>Border Rounded</h1>
      <div>
        <div class="border-negative auto-size border-2 border-rounded" style="padding: 4px">
          <span class="text-negative">Border Negative</span>
        </div>
        <div class="border-info auto-size border-2 border-rounded h-ml-sm" style="padding: 4px">
          <span class="text-info">Border Info</span>
        </div>
      </div>
    </div>

</div>
</template>

<script>

import maskCore from './maskCore.js'

export default {
  data () {
    return {
      plusMinusModel: -999,
      rating: 3.5,
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
