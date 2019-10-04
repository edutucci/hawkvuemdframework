<template lang="pug">
  q-input(
    type="tel"
    v-model="formattedValue"
    @input="change"
    :stack-label="stackLabel"
  )
</template>

<script>
import money from './directive'
import defaults from './options'
import {unformat, format} from './utils'

export default {
  name: 'QMoney',
  props: {
    value: {
      required: true,
      type: [Number, String],
      default: 0
    },
    stackLabel: {
      type: String,
      default: () => ''
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
  directives: {money},
  data () {
    return {
      formattedValue: ''
    }
  },
  created () {
    this.formatValue(this.value)
  },
  watch: {
    value: function (val) {
      this.formatValue(val)
    }
  },
  methods: {
    formatValue (value) {
      this.formattedValue = format(this.value, this.$props)
    },
    change (value) {
      this.$emit('input', this.masked ? value : unformat(value, this.precision))
    }
  }
}
</script>
