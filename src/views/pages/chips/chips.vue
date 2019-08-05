<template>
  <h-page-content padding>
    <div class="text-h4">CHIPS</div>

    <comp-code class="h-mt-lg" title="Styles" :code="chip">
      <h-chips text="disabled" icon="fas fa-camera-retro" closable disabled hide-on-close></h-chips>
      <h-chips text="Eduardo" bgcolor="bg-secondary" closable hide-on-close></h-chips>
      <h-chips text="Jhon" closable hide-on-close icon="fas fa-camera-retro" bgcolor="bg-primary" textcolor="text-white"></h-chips>
      <h-chips text="Jhon" closable hide-on-close avatar="http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918" bgcolor="bg-primary" textcolor="text-white"></h-chips>

      <h-chips text="outlined disabled" icon="fas fa-camera-retro" closable disabled hide-on-close outlined></h-chips>
      <h-chips text="outlined disabled" closable disabled hide-on-close outlined></h-chips>
      <h-chips text="Outlined" closable hide-on-close outlined></h-chips>
    </comp-code>

    <h1 class="text-primary"> Chips Help</h1>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>closable</div>
        <div>icon</div>
        <div>img</div>
        <div>text</div>
        <div>disabled</div>
        <div>hide-on-close</div>
        <div>outlined</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Boolean</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>Booelan</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Show icon close to right of the text</div>
        <div>Sets the icon to left of the text</div>
        <div>Sets the img to left of the text</div>
        <div>Sets the text of the chip</div>
        <div>The chips is disabled</div>
        <div>Hides the chip if you click on icon close but it does not emits onClose event</div>
        <div>Sets the input to outlined mode</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@onClose</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on icon close click. This is available if hide-on-close is disabled.</div>
      </div>
    </div>

    <!-- <comp-code class="h-mt-lg" title="Input Chips" >
      <h-input-chips
        v-model="chipsInput"
        float-label="Name"
        static-label="My chips list"
        left-icon=""
        helper-text="Type your chips"
        error-label="Write 1 chips please"
        cleartext
        @change="onchange"
        @onTab="ontab"
        @onDelete="onDelete"
      >
      </h-input-chips>
      <div>
        <span class="text-gray">InputchipsModel: {{ chipsInput }}</span>
      </div>
    </comp-code> -->

    <comp-code class="h-mt-lg" title="Input Chips"  :code="inputchip" :script="inputchipScript"
      javascript
    >
      <div class="h-mt-md">
        <h-input
          left-icon="fas fa-birthday-cake"
          label="Type your chips"
          chips
          v-model="chipsInput"
        />
      </div>
    </comp-code>

    <h1 class="text-primary"> Input Chips Help</h1>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>left-icon</div>
        <div>static-label</div>
        <div>error-label</div>
        <div>helper-text</div>
        <div>cleartext</div>
        <div>readonly</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the icon to left of the input</div>
        <div>Sets the static label for the input</div>
        <div>Sets the error label for the input</div>
        <div>Sets the helper text for the input</div>
        <div>Shows the icon to clear input on right side</div>
        <div>Input can not be modified</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@onTab</div>
        <div>@change(value)</div>
        <div>@onDelete(value)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on Tab</div>
        <div>Triggered when model changes. The model value is sent.</div>
        <div>Triggered chips is removed. The chips value is sent.</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Methods</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>focus</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>The input get focus</div>
      </div>
    </div>

  </h-page-content>
</template>

<script>
export default {
  data () {
    return {
      chipsInput: ['tucci', 'cleiton', 'carlos', 'pablo', 'luis'],
      chip: `
<h-chips text="disabled" icon="fas fa-camera-retro" closable disabled hide-on-close></h-chips>
<h-chips text="Eduardo" bgcolor="bg-secondary" closable hide-on-close></h-chips>
<h-chips text="Jhon" closable hide-on-close icon="fas fa-camera-retro" bgcolor="bg-primary" textcolor="text-white"></h-chips>
<h-chips text="Jhon" closable hide-on-close avatar="http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918" bgcolor="bg-primary" textcolor="text-white"></h-chips>

<h-chips text="outlined disabled" icon="fas fa-camera-retro" closable disabled hide-on-close outlined></h-chips>
<h-chips text="outlined disabled" closable disabled hide-on-close outlined></h-chips>
<h-chips text="Outlined" closable hide-on-close outlined></h-chips>
`,
      inputchip: `
<div>
  <h-input
    left-icon="fas fa-birthday-cake"
    label="Type your chips"
    chips
    v-model="chipsInput"
  />
</div>
`,
      inputchipScript: `
export default {
  components: {
  },
  data () {
    return {
      chipsInput: ['tucci', 'cleiton', 'carlos', 'pablo', 'luis']
    }
  }
}
`
    }
  },
  methods: {
    closeChip (index) {
      this.$delete(this.chipsInput, index)
    },
    onchange (value) {
      console.log('onchange: ' + value)
    },
    ontab () {
      console.log('ontab: ')
    },
    onDelete (value) {
      console.log('ondelete: ' + value)
    }
  }
}
</script>
