<template>
  <h-page-content>
      <input
         v-model="inputValue"
         @input="onInput($event.target.value)"
         v-money="{ precision, decimal, thousands, prefix, suffix }"
      />

      <h-banner class="h-mt-md">
      </h-banner>
      <!-- <img src="img/landscape1.jpeg"/> -->
      <h-image src="svg/bag_currency.svg"/>
      <i class="far fa-address-card"></i>
      <i class="material-icons">alarm</i>
      <i class="material-icons">add_shopping_cart</i>

      <h5>Icon Test</h5>
      <div class="row h-mt-md">
        <h-icon icon="fas fa-cart-plus"></h-icon>
        <h-icon icon="add_shopping_cart"></h-icon>
      </div>

  </h-page-content>
</template>

<script>

import money from './currencyDirective/directive'
import defaults from './currencyDirective/options'
// import { format, unformat } from './currencyDirective/utils'

export default {
  directives: { money },
  props: {
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
      inputValue: '2345'
    }
  },
  mounted () {
    this.inputValue = '20000'
  },
  methods: {
    onInput (value) {
      console.log('value vale:', value)
    }
  }
}
</script>
