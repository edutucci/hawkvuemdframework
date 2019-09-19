<template lang="pug">
  div
</template>

<script>

import componentBase from '../componentBase.vue'
import defaults from './currencyDirective/options'

export default {
  extends: componentBase,
  name: 'InputProperties',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    },
    helperText: {
      type: String,
      default: ''
    },
    textCounter: {
      type: Number,
      default: 0
    },
    inputCounter: {
      type: Boolean,
      default: false
    },
    suffix: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 9999
    },
    leadingIcon: {
      type: String,
      default: ''
    },
    trailingIcon: {
      type: String,
      default: ''
    },
    // outlined: {  removed because is default textfield
    //   type: Boolean,
    //   default: false
    // },
    filled: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    textCenter: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    inputSelect: {
      type: Boolean,
      default: false
    },
    multiSelect: {
      type: Boolean,
      default: false
    },
    displayMode: {
      type: String,
      default: ''
    },
    inputSearch: {
      type: Boolean,
      default: false
    },
    inputIcon: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => ([])
    },
    chips: {
      type: Boolean,
      default: false
    },
    inputMask: {
      type: Boolean,
      default: false
    },
    inputCurrency: {
      type: Boolean,
      default: false
    },
    mask: {
      type: String,
      default: ''
    },
    masked: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: () => defaults.precision
    },
    decimal: {
      type: String,
      default: () => defaults.decimal
    },
    thousands: {
      type: String,
      default: () => defaults.thousands
    },
    currencyprefix: {
      type: String,
      default: () => defaults.prefix
    },
    currencysuffix: {
      type: String,
      default: () => defaults.suffix
    }
  },
  data () {
    return {
      inputDisplay: '',
      inputtype: ''
    }
  }
}
</script>
