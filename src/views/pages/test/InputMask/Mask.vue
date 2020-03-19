<template lang="pug">
  h-page-content(padding)
    .text-h4 Test Mask

    h-toggle(v-model="tmask")
    .text-body1 {{tmask}}

    mask-field(
      v-model="inputDisplay"
      :mask="['(##)##.##', '(##)###.##']"
      :masked="tmask"
    )
    .text-body1 {{inputDisplay}}

    .row.h-mt-md
      .col-auto.border.border-gray(style="width: 200px")
        h-input-field.border.text-caption(
          v-model="txtMask"
        )
      .col-auto.h-ml-sm
        h-btn(text="click me"
          bg-color="bg-primary" text-color="text-white"
          @click="inputDisplay = txtMask"
        )
    .text-body1 {{txtMask}}

    // .border.border-gray
    //   h-input-field.border.text-caption(
    //     v-model="inputDisplay"
    //     input-mask
    //     mask="(##)##-##"
    //   )
    // .text-body1 {{inputDisplay}}

</template>

<script>

// import FieldMask from './FieldMask'
import MaskField from './maskField'

export default {
  components: {
    MaskField
  },
  data () {
    return {
      tmask: true,
      txtMask: '',
      inputDisplay: '234'
    }
  },
  methods: {
    onInput (value) {
      console.log('value:', value)
      console.log('input display:', this.inputDisplay)
      // this.$emit('input', value)

      let modelValue = value
      if (!this.tmask) {
        let patt = new RegExp('[()-/:._]', 'g')
        modelValue = this.inputDisplay.replace(patt, '')
        console.log('mask removed:', modelValue)
        this.inputDisplay = modelValue
        // this.$emit('input', modelValue)
      }
    }
  }
}
</script>
