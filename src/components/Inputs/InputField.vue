<template lang="pug">
input.input-field(
  v-if="useMask"
  :id="inputId"
  v-vue3focus="inputFocus"
  :class="[{'text-center': textCenter, 'readonly': readonly}, filled]"
  v-model="inputDisplay"
  v-mask="config"
  :readonly="readonly"
  :placeholder="placeholder"
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
  v-else-if="type === 'currency'"
  :id="inputId"
  v-vue3focus="inputFocus"
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
  v-else-if="type === 'text' || type === 'password' || type === 'select' || type === 'multi-select' || type === 'search'"
  :id="inputId"
  v-vue3focus="inputFocus"
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
  v-else-if="type === 'text' && this.chips"
  :id="inputId"
  v-vue3focus="inputFocus"
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

import { v1 as uuidv1 } from 'uuid';
import { vue3Focus } from 'vue3-focus';
import InputProperties from './InputProperties.vue';
import money from './currencyDirective/directive';
import mask from './maskDirective/directive';

export default {
  extends: InputProperties,
  mixins: [],
  directives: { money, mask, vue3Focus },
  name: 'InputField',
  props: {
    modelValue: {
      type: [String, Array, Number, Object],
      default: '',
    },
    focused: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'focus', 'blur', 'onKeyDown', 'onTab', 'onEnter', 'onDelete', 'onEscape', 'click', 'onArrowDown'],
  data() {
    return {
      inputId: uuidv1(),
      inputFocus: false,
    };
  },
  mounted() {
    // console.log('tokens:', JSON.stringify(this.tokens))
    this.inputtype = this.type;
    this.inputDisplay = this.modelValue;
  },
  computed: {
    config() {
      return {
        mask: this.mask,
        tokens: this.tokens,
        masked: true,
      };
    },
    listeners() {
      const vm = this;
      return {
        ...vm.$attrs,
        input(e) {
          vm.onInputMask(e);
        },
      };
    },
  },
  watch: {
    type(value) {
      this.inputtype = value;
    },
    value(value) {
      // console.log('value change in input-field:', value)
      this.inputDisplay = value;
    },
    focused(value) {
      // console.log('focused change in input-field:', value)
      this.inputFocus = value;
    },
  },
  methods: {
    onInput(value) {
      // console.log('value debounce input-field:', value)
      // this.inputDisplay = value
      this.$emit('update:modelValue', value);
    },
    onInputMask(e) {
      if (e.isTrusted) return; // ignore native event
      this.$emit('inupdate:modelValueput', e.target.value);
    },
    onInputChip(value) {
      // console.log('onInputChip input-field:', value)
      this.inputDisplay = value;
      this.$emit('inupdate:modelValueput', value);
    },
    onInputFocus() {
      this.inputFocus = true;
      this.$emit('focus');
    },
    onInputBlur() {
      this.inputFocus = false;
      this.$emit('blur');
    },
    onKeyDown() {
      this.$emit('onKeyDown');
    },
    onTab() {
      this.$emit('onTab');
    },
    onEnter() {
      // console.log('enter key input-field')
      this.$emit('onEnter');
    },
    onDelete() {
      this.$emit('onDelete');
    },
    onEscape() {
      this.$emit('onEscape');
    },
    onClick() {
      this.$emit('click');
    },
    onArrowDown() {
      this.$emit('onArrowDown');
    },
    focus() {
      this.inputFocus = true;
    },
  },
};
</script>

<style scoped>
</style>
