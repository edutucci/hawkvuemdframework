<template>
  <div class="full-size">
    <h1>CHIPS</h1>

    <h3>Styles</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-chips text="disabled" icon="fas fa-camera-retro" closable disabled hide-on-close></h-chips>
      <h-chips text="Eduardo" bgcolor="bg-secondary" closable hide-on-close></h-chips>
      <h-chips text="Jhon" closable hide-on-close icon="fas fa-camera-retro" bgcolor="bg-primary" textcolor="text-white"></h-chips>
      <h-chips text="Jhon" closable hide-on-close avatar="http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918" bgcolor="bg-primary" textcolor="text-white"></h-chips>

      <h-chips text="outlined disabled" icon="fas fa-camera-retro" closable disabled hide-on-close outlined></h-chips>
      <h-chips text="outlined disabled" closable disabled hide-on-close outlined></h-chips>
      <h-chips text="Outlined" closable hide-on-close outlined></h-chips>
    </div>

    <h3>Input Chips</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="h-mt-md">
        <h-input
          left-icon="fas fa-birthday-cake"
          label="Type your chips"
          chips
          v-model="chipsInput"
        />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      txtName: '',
      chipsInput: ['tucci', 'cleiton', 'carlos', 'pablo', 'luis']
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
