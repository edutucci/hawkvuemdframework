<template lang="pug">
  input.input-field(
    v-if="inputMask"
    :id="inputId"
    v-focus="inputFocus"
    :class="[{'text-center': textCenter, 'readonly': readonly}, filled]"
    v-model="inputDisplay"
    v-mask="config"
    :readonly="readonly"
    :placeholder="placeholder"
    @input="onInput($event.target.value)"
    @focus="onInputFocus()"
    @blur="onInputBlur()"
    @keydown.tab="onTab"
    @keyup.enter="onEnter"
    @click="onClick"
  )
  input.input-field(
    v-else-if="inputCurrency"
    :id="inputId"
    v-focus="inputFocus"
    :class="[{'text-center': textCenter, 'readonly': readonly}, filled]"
    v-model="inputDisplay"
    v-money="{ precision, decimal, thousands, currencyprefix, currencysuffix }"
    :readonly="readonly"
    :placeholder="placeholder"
    :maxlength="maxlength"
    @input="onInput($event.target.value)"
    @focus="onInputFocus()"
    @blur="onInputBlur()"
    @keydown.tab="onTab"
    @keyup.enter="onEnter"
    @click="onClick"
  )
  input.input-field(
    v-else-if="!this.chips"
    :id="inputId"
    v-focus="inputFocus"
    :class="[{'text-center': textCenter, 'readonly': readonly}, filled]"
    v-model="inputDisplay"
    :type="type"
    :readonly="readonly"
    :placeholder="placeholder"
    :maxlength="maxlength"
    @input="onInput($event.target.value)"
    @focus="onInputFocus()"
    @blur="onInputBlur()"
    @keydown.down="onKeyDown"
    @keydown.tab="onTab"
    @keyup.enter="onEnter"
    @keyup.esc="onEscape"
    @keyup.40="onArrowDown"
    @click="onClick"
  )
  input.input-field(
    v-else
    :id="inputId"
    v-focus="inputFocus"
    :class="[{'text-center': textCenter, 'readonly': readonly}, filled]"
    v-model="inputDisplay"
    :readonly="readonly"
    :placeholder="placeholder"
    :maxlength="maxlength"
    @input="onInputChip($event.target.value)"
    @focus="onInputFocus()"
    @blur="onInputBlur()"
    @keydown.down="onKeyDown"
    @keydown.tab="onTab"
    @keyup.enter="onEnter"
    @keyup.delete="onDelete"
    @keyup.esc="onEscape"
    @keyup.40="onArrowDown"
    @click="onClick"
  )
</template>

<script>

import uuidv1 from 'uuid/v1'
import { mixin as focusMixin } from 'vue-focus'
import InputProperties from './InputProperties'
import money from './currencyDirective/directive'
import mask from './maskDirective/directive'

export default {
  extends: InputProperties,
  mixins: [focusMixin],
  directives: { money, mask },
  name: 'InputField',
  props: {
    value: {
      type: [String, Array, Number, Object],
      default: ''
    },
    focused: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputId: uuidv1(),
      inputFocus: false
    }
  },
  mounted () {
    // console.log('tokens:', JSON.stringify(this.tokens))
    this.inputtype = this.type
    this.inputDisplay = this.value
  },
  computed: {
    config () {
      return {
        mask: this.mask,
        tokens: this.tokens,
        masked: true
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
  watch: {
    type: function (value) {
      this.inputtype = value
    },
    value: function (value) {
      // console.log('value change in input-field:', value)
      this.inputDisplay = value
    },
    focused: function (value) {
      // console.log('focused change in input-field:', value)
      this.inputFocus = value
    }
  },
  methods: {
    onInput (value) {
      // console.log('value debounce input-field:', value)
      // this.inputDisplay = value
      this.$emit('input', value)
    },
    onInputMask (e) {
      if (e.isTrusted) return // ignore native event
      this.$emit('input', e.target.value)
    },
    onInputChip (value) {
      // console.log('onInputChip input-field:', value)
      this.inputDisplay = value
      this.$emit('input', value)
    },
    onInputFocus () {
      this.inputFocus = true
      this.$emit('focus')
    },
    onInputBlur () {
      this.inputFocus = false
      this.$emit('blur')
    },
    onKeyDown () {
      this.$emit('onKeyDown')
    },
    onTab () {
      this.$emit('onTab')
    },
    onEnter () {
      // console.log('enter key input-field')
      this.$emit('onEnter')
    },
    onDelete () {
      this.$emit('onDelete')
    },
    onEscape () {
      this.$emit('onEscape')
    },
    onClick () {
      this.$emit('click')
    },
    onArrowDown () {
      this.$emit('onArrowDown')
    },
    focus () {
      this.inputFocus = true
    }
  }
}
</script>

<style scoped>
</style>
