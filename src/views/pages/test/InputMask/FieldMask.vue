<template lang="pug">
  .border.border-gray
    mask-field(
      mask="###.###.###-##"
    )
    // h-input-field.border.text-caption(
    //   v-model="inputDisplay"
    //   input-mask
    //   mask="(##)##-##"
    //   :masked="masked"
    //   @input="onInput"
    // )
</template>

<script>

import MaskField from './maskField'

export default {
  components: {
    MaskField
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    masked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputDisplay: ''
    }
  },
  watch: {
    value: function (value) {
      console.log('mudou value:', value)
      this.inputDisplay = value
    }
  },
  methods: {
    onInput (value) {
      // console.log('value:', value)
      // console.log('input display:', this.inputDisplay)
      // this.$emit('input', value)

      // let modelValue = this.inputDisplay
      // if (!this.masked) {
      //   console.log('removing mask')
      //   let patt = new RegExp('[()-/:._]', 'g')
      //   modelValue = this.inputDisplay.replace(patt, '')
      //   console.log('mask removed:', modelValue)
      //   this.$emit('input', modelValue)
      // } else {
      //   this.$emit('input', value)
      // }
    }
  }
}
</script>
