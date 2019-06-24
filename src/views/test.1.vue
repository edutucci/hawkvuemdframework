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
    <!-- <div class="flex cursor-pointer" style="">
      <h-list-item-side class="bg-primary">
        <h-fa-icon icon="fas fa-home"/>
      </h-list-item-side>
      <h-list-item-side class="bg-positive">
        <h-fa-icon icon="fas fa-home"/>
      </h-list-item-side>
    </div> -->

    <!-- <div class="flex">
      <div style="background: green;">
        <p>1</p>
      </div>
      <div style="background: violet;">
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
      <div class="flex flex-items-center" style="background: yellow;">
        <p>1</p>
      </div>
    </div> -->

    <!-- <h1>Corrigindo List</h1>
    <div style="width: 350px">
      <h-list>
        <h-list-body>
          <h-list-item separator>
            <h-list-item-side>
              <p>1</p>
            </h-list-item-side>
            <h-list-item-content>
              <p>1</p>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
            </h-list-item-side>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div> -->

    <!-- <pre v-highlightjs="containedButtons">
      <code class="html">
      </code>
    </pre> -->

    <!-- <pre>
      <code class="language-javascript">
        {{testeLang}}
      </code>
    </pre> -->

    <!-- <prism language="html" :code="containedButtons"></prism> -->
    <prism language="javascript" :code="testeLang"></prism>

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
          <html-separator/>
          <h-list-item>
            <h-list-item-side>
              <h-avatar src="avatar/AnaArmas.jpg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Ana"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item>
            <h-list-item-side>
              <h-avatar src="avatar/Eduard.jpg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Eduard"/>
            </h-list-item-content>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div>

    <div class="h-mt-md" style="width: 350px">
      <h-list>
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
            <h-app-toolbar-title title="Topics"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-body>
          <h-list-item>
            <h-list-item-content>
              <h-list-item-text title="Attractions"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item>
            <h-list-item-content>
              <h-list-item-text title="Dinning"/>
            </h-list-item-content>
          </h-list-item>
          <html-separator/>
          <h-list-item>
            <h-list-item-side>
              <h-fa-icon icon="fas fa-film"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Attractions"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item>
            <h-list-item-side>
              <h-fa-icon icon="fas fa-utensils"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Dinning"/>
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

    <div class="h-mt-md" style="width: 350px">
      <h-list>
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
            <h-app-toolbar-title title="Cart"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-header text="Today"/>
        <h-list-body>
          <h-list-item>
            <h-list-item-side class="flex-items-center">
              <h-list-item-img class="flex-items-center" src="img/pencil.png"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Pencil" caption="in stock"/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-list-item-text title="1.50"/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-side class="flex-items-center">
              <h-list-item-img class="flex-items-center" src="img/rubberbands.png"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Hubberbands" caption="in stock"/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-list-item-text title="4.5"/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-side class="flex-items-center">
              <h-list-item-img class="flex-items-center" src="img/rulers.png"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Rulers" caption="only 1 left in stock"/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-list-item-text title="8.00"/>
            </h-list-item-side>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div>

    <div class="h-mt-md" style="width: 350px">
      <h-list>
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
            <h-app-toolbar-title title="Files"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-body>
         <h-list-item>
            <h-list-item-side>
              <h-list-item-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Photos" caption="Jan 9, 2018"/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-fa-icon icon="fas fa-info-circle" textcolor="text-gray"/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-side>
              <h-list-item-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Recipes" caption="Jan"/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-fa-icon icon="fas fa-info-circle" textcolor="text-gray"/>
            </h-list-item-side>
          </h-list-item>
          <html-separator/>
          <h-list-header text="Recent files"/>
          <h-list-item>
            <h-list-item-side>
              <h-list-item-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Vacation itinerary" caption="Jan 20, 2018"/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-fa-icon icon="fas fa-info-circle" textcolor="text-gray"/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-side>
              <h-list-item-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="Kicthen remodel" caption="Jan 10, 2018"/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-fa-icon icon="fas fa-info-circle" textcolor="text-gray"/>
            </h-list-item-side>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div>

    <h1>Three Line Item</h1>
    <div style="width: 400px">
      <h-list>
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
            <h-app-toolbar-title title="My Recipes"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-header text="Recipes"/>
        <h-list-body>
          <h-list-item>
            <h-list-item-side>
              <h-list-item-img class="flex-items-center" src="img/Crunchy.jpg" large/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Crunchy Croissants" caption="Buttery, flaky pastry named for its crescent shape."/>
            </h-list-item-content>
            <h-list-item-side>
              <h-list-item-text title="01"/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-side>
              <h-list-item-img class="flex-items-center" src="img/GrilledEggPlant.jpg" large/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Grilled Eggplant" caption="Tender with a rich, complex and flavor when cooked."/>
            </h-list-item-content>
            <h-list-item-side>
              <h-list-item-text title="02"/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-side>
              <h-list-item-img class="flex-items-center" src="img/TangerineSalad.jpg" large/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Tangerine Salad" caption="Peak tangerine season lasts from autumn to spring."/>
            </h-list-item-content>
            <h-list-item-side>
              <h-list-item-text title="03"/>
            </h-list-item-side>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div>

    <div class="h-mt-md" style="width: 400px">
      <h-list>
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
            <h-app-toolbar-title title="Inbox"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-header text="Today"/>
        <h-list-body>
          <h-list-item>
            <h-list-item-side class="flex-items-center">
              <h-avatar src="avatar/Eduard.jpg"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Brunch this weekend?" caption="I'll be in your neighborhood doing errands this weekend."/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item>
            <h-list-item-side class="flex-items-center">
              <h-avatar src="avatar/AnaArmas.jpg"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Summer BBQ" caption="Wish I coould come, but I'm out of town this weekend."/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item>
            <h-list-item-side class="flex-items-center">
              <h-avatar src="avatar/Kostenlose.jpg"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Oui Oui" caption="Do you have Paris recommendations? Have you ever been?."/>
            </h-list-item-content>
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
              <h-list-item-img src="avatar/folder_open.jpeg"/>
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
              <h-list-item-img src="avatar/folder_open.jpeg"/>
            </h-list-item-side>
            <h-list-item-content>
              <h-list-item-text title="At the top" caption="Cindy climbs new heights"/>
            </h-list-item-content>
            <h-list-item-side class="flex-justify-end">
              <div class="text-right"><h-fa-icon icon="fas fa-star" textcolor="text-yellowA400"/></div>
              <h-list-item-text title="02" class="flex-justify-end"/>
              <h-list-item-text caption="5 min ago" class="flex-justify-end"/>
            </h-list-item-side>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div>

    <h1>Expand and collapse</h1>
    <div class="h-mt-md" style="width: 350px">
      <h-list>
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
            <h-app-toolbar-title title="Topics"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-collapsible separator>
          <h-collapsible-menu icon="fas fa-film" text="Attractions">
            <h-list-body>
              <h-list-item>
                <h-list-item-left text="Shopping"/>
              </h-list-item>
              <h-list-item>
                <h-list-item-left text="Museums"/>
              </h-list-item>
            </h-list-body>
          </h-collapsible-menu>
          <h-collapsible-menu icon="fas fa-utensils" text="Dining">
            <h-list-body>
              <h-list-item>
                <h-list-item-left text="Restaurants"/>
              </h-list-item>
            </h-list-body>
          </h-collapsible-menu>
        </h-collapsible>
      </h-list>
    </div>

    <h1>Controls</h1>
    <div class="h-mt-md" style="width: 400px">
      <h-list>
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
            <h-app-toolbar-title title="Inbox"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-header text="Today"/>
        <h-list-body>
          <h-list-item>
            <h-list-item-side class="flex-items-center">
              <h-avatar src="avatar/Eduard.jpg"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Brunch this weekend?" caption="I'll be in your neighborhood doing errands this weekend."/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-checkbox/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-side class="flex-items-center">
              <h-avatar src="avatar/AnaArmas.jpg"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Summer BBQ" caption="Wish I coould come, but I'm out of town this weekend."/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-checkbox/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-side class="flex-items-center">
              <h-avatar src="avatar/Kostenlose.jpg"/>
            </h-list-item-side>
            <h-list-item-content separator>
              <h-list-item-text title="Oui Oui" caption="Do you have Paris recommendations? Have you ever been?."/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-checkbox/>
            </h-list-item-side>
          </h-list-item>
          <html-separator/>
          <h-list-header text="Notifications"/>
          <h-list-item>
            <h-list-item-content separator>
              <h-list-item-text title="Games"/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-toggle/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-content separator>
              <h-list-item-text title="WhatsApp"/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-toggle/>
            </h-list-item-side>
          </h-list-item>
          <h-list-item>
            <h-list-item-content separator>
              <h-list-item-text title="E-Mail"/>
            </h-list-item-content>
            <h-list-item-side class="flex-items-center">
              <h-toggle/>
            </h-list-item-side>
          </h-list-item>
        </h-list-body>
      </h-list>
    </div>

  </div>
</template>

<script>

import maskCore from './maskCore.js'
// import Prism from 'vue-prismjs'
// import 'prismjs/themes/prism.css'

export default {
  // components: {
  //   Prism
  // },
  data () {
    return {
      scriptTest: `
<script>

import maskCore from './maskCore.js'
import Prism from 'vue-prismjs'
import 'prismjs/themes/prism.css'

export default {
  data () {
    return {
    }
  }
}
      `,
      containedButtons: `
<div>
  <div>
    <h-btn contained bgcolor="bg-white" textcolor="text-black" text="white" left-icon="fas fa-envelope" @click="btnClick"/>
    <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="primary" right-icon="fas fa-envelope"/>
    <h-btn contained bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
    <h-btn contained bgcolor="bg-positive" textcolor="text-white" text="positive"/>
    <h-btn contained bgcolor="bg-negative" textcolor="text-white" text="negative"/>
    <h-btn contained bgcolor="bg-info" textcolor="text-white" text="info"/>
    <h-btn contained bgcolor="bg-warning" textcolor="text-white" text="warning"/>
  </div>
  <div class="col-6">
    <h-btn contained class="full-width" bgcolor="bg-primary" textcolor="text-white" text="full width" right-icon="fas fa-envelope"/>
    <h-btn contained class="full-width" bgcolor="bg-positive" textcolor="text-white" text="full width" left-icon="fas fa-envelope"/>
  </div>
</div>
      `,
      testeLang: `
  watch: {
    inputDisplayCep: function (newValue) {
      // console.log('mudou value: ' + newValue)
      this.onChangeCep(newValue)
    },
    inputDisplayTelefone: function (newValue) {
      // console.log('mudou telefone: ' + newValue)
      this.onChangeTelefone(newValue)
    }
  }
      `,
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
  mounted () {
    let a2 = ['1', 'Tucci C', 'Tucci B', 'Pablo']
    // descending
    a2.sort(function strDes (a, b) {
      if (a > b) return -1
      else if (a < b) return 1
      else return 0
    })
    console.log('a2 descending: ' + JSON.stringify(a2))

    a2 = ['1', 'Tucci C', 'Tucci B', 'Pablo']
    // ascending
    a2.sort(function strDes (a, b) {
      if (a > b) return 1
      else if (a < b) return -1
      else return 0
    })
    console.log('a2 ascending: ' + JSON.stringify(a2))
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
