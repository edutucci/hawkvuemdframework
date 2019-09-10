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
    maxlength: {
      type: Number,
      default: 9999
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: false
    },
    filled: {
      type: Boolean,
      default: false
    },
    rounded: {
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
    selectSingle: {
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
    search: {
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
    prefix: {
      type: String,
      default: () => defaults.prefix
    },
    suffix: {
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
