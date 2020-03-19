<template>
  <input
    type="text"
    v-mask="config"
    :value="display"
    v-bind="$attrs"
    v-on="listeners"
  />
</template>

<script>
// link: https://www.pika.dev/npm/ke-the-mask/code

import mask from './maskDirective/directive'
import tokens from './maskDirective/tokens'
import masker from './maskDirective/masker'

export default {
  name: 'TheMask',
  props: {
    value: [String, Number],
    mask: {
      type: [String, Array],
      required: true
    },
    masked: { // by default emits the value unformatted, change to true to format with the mask
      type: Boolean,
      default: false // raw
    },
    tokens: {
      type: Object,
      default: () => tokens
    }
  },
  directives: { mask },
  data () {
    return {
      lastValue: null, // avoid unecessary emit when has no change
      display: this.value
    }
  },
  watch: {
    value (newValue) {
      this.display = newValue
      // if (newValue !== this.lastValue) {
      //   this.display = newValue
      // }
    },
    masked () {
      this.refresh(this.display)
    }
  },
  computed: {
    config () {
      return {
        mask: this.mask,
        tokens: this.tokens,
        masked: this.masked
      }
    },
    listeners () {
      var vm = this
      return Object.assign({},
        vm.$listeners,
        {
          input (e) {
            vm.onInputMask(e)
          }
        }
      )
    }
  },
  methods: {
    onInputMask (e) {
      console.log('onInputMask:', e.target.value)
      if (e.isTrusted) return // ignore native event
      this.refresh(e.target.value)
    },

    refresh (value) {
      this.display = value
      let localvalue = masker(value, this.mask, this.masked, this.tokens)
      if (localvalue !== this.lastValue) {
        this.lastValue = localvalue
        this.$emit('input', localvalue)
        console.log('mask field on input', localvalue)
      }
    }
  }
}
</script>
