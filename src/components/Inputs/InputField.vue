<template lang="pug">
  input.input-field(
    v-if="!this.chips"
    v-focus="inputFocus"
    :class="[{'text-center': textCenter, 'readonly': readonly}, filled]"
    v-model="inputDisplay"
    :type="inputtype"
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
    v-focus="inputFocus"
    :class="[{'text-center': textCenter, 'readonly': readonly}, filled]"
    v-model="inputDisplay"
    :type="inputtype"
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

import { mixin as focusMixin } from 'vue-focus'
import InputProperties from './InputProperties'
import _ from 'lodash'

export default {
  extends: InputProperties,
  mixins: [focusMixin],
  name: 'InputField',
  props: {
    value: {
      type: [String, Array],
      default: ''
    },
    focused: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputFocus: false
    }
  },
  mounted () {
    this.inputtype = this.type
    this.inputDisplay = this.value
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
    onInput: _.debounce(function (value) {
      console.log('value debounce input-field:', value)
      this.inputDisplay = value
      this.$emit('input', value)
    }, 500),
    onInputChip (value) {
      console.log('onInputChip input-field:', value)
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
