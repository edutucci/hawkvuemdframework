<template lang="pug">
h-input-container(
  :inputContainerFieldBottomBorderColor="inputContainerFieldBottomBorderColor"
  :inputContainerFieldBackgroundColor="inputContainerFieldBackgroundColor"
  :bg-color="inputContainerBackgroundColor"
  :text-color="inputContainerTextColor"
  :label-color="inputContainerLabelColor"
  :icon-color="inputContainerIconColor"
  :iconDropdownColor="inputContainerIconDropdownColor"
  :helperTextColor="inputContainerHelperTextColor"
  :errorTextColor="inputContainerErrorTextColor"
  :iconErrorTextColor="inputContainerIconErrorTextColor"
  :label="containerLabel"
  :filled="filled"
  :leadingIcon="leadingIcon"
  :trailingIcon="trailingIcon"
  :focused="focused"
  :dense="dense"
  :errorMessage="errorMessage"
  :helperText="helperText"
  :inputTextCounter="inputTextCounter"
  :inputCounter="inputCounter"
  :clearable="clearable"
  :type="type"
  :inputDropdown="inputDropdown"
  :loading="loading"
  @onClearable="onClearable"
  @onTogglePassword="togglePassword"
  @onIconDropDownClick="onIconDropDownClick"
  :id="containerId"
  v-click-away="away"
)

.column
  .col(
    v-if="!selectChips"
  )
    .row.align-items-center
      .col-auto.h-pa-xs.h-ml-sm.bg-gray300.text-body1(v-if="prefix && prefix.length")
        | {{prefix}}
      .col()
        h-input-field.text-caption.cursor-pointer(
          :class="[inputContainerTextColor]"
          :id="inputId"
          v-model="inputDisplay"
          :type="compInputType"
          :maxlength="maxlength"
          :readonly="readonly"
          :filled="filled"
          :textCenter="textCenter"
          :placeholder="containerPlaceholder"
          :focused="focused"
          :chips="chips"
          :use-mask="useMask"
          :mask="mask"
          :tokens="tokens"
          :decimal="decimal"
          :thousands="thousands"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
          @onKeyDown="onKeyDown"
          @onTab="onTab"
          @onEnter="onEnter"
          @onEscape="onEscape"
          @onDelete="onDelete"
          @click="onClick"
        )
      .col-auto.h-pa-xs.h-ml-md.bg-gray300.text-body1(v-if="suffix && suffix.length")
        | {{suffix}}

</template>

<script>

// import _ from 'lodash';
import { v1 as uuidv1 } from 'uuid';
import resize from 'vue-resize-directive';
import InputProperties from './InputProperties.vue';
// import viewport from '../others/viewport';
// import { unformat, format } from './currencyDirective/utils';
// import masker from './maskDirective/masker';

export default {
  extends: InputProperties,
  directives: {
    resize,
  },
  props: {
    modelValue: {
      type: [String, Array, Number],
      default: '',
    },
  },
  emits: ['update:modelValue', 'onFilter', 'blur', 'onKeyDown', 'onTab', 'onEnter', 'onEscape', 'onClick', 'changeMultiselect', 'clear'],
  data() {
    return {
      containerId: uuidv1(),
      inputId: uuidv1(),
      dropMenuId: uuidv1(),
      inputDisplay: '',
      inputLabel: '',
      focused: false,
      inputContainerFieldBottomBorderColor: '',
      inputContainerFieldBackgroundColor: '',
      inputContainerBackgroundColor: '',
      inputContainerTextColor: '',
      inputContainerLabelColor: '',
      inputContainerIconColor: '',
      inputContainerIconDropdownColor: '',
      inputContainerHelperTextColor: '',
      inputContainerErrorTextColor: '',
      inputContainerIconErrorTextColor: '',
      showdropdown: false,
      multiselectItem: [],
      selectChipsValue: [],
      dropdownObject: {
        left: '',
        bottom: '',
        top: '0',
        width: '',
      },
      containerRect: {
        top: 0,
        left: 0,
      },
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
  },
  computed: {
    containerLabel() {
      let value = this.label;
      if (!this.focused) {
        if ((!this.inputDisplay) || (this.inputDisplay && this.inputDisplay.length === 0)) {
          value = '';
        }
      }
      return value;
    },
    inputDropdown() {
      let value = false;
      if (this.type === 'search' || this.type === 'select' || this.type === 'multi-select') {
        value = true;
      }
      return value;
    },
    inputTextCounter() {
      const valueLength = (this.modelValue) ? this.modelValue.length : `${0}`;
      return `${valueLength} / ${this.textCounter}`;
    },
    compInputType() {
      let value = '';
      switch (this.inputType) {
        case 'password':
          value = 'password';
          break;
        default:
          value = 'text';
      }
      return value;
    },
    containerPlaceholder() {
      const value = (this.placeholder && this.placeholder.length > 0) ? this.placeholder : this.label;
      return value;
    },
  },
  methods: {
    onClearable() {
      this.inputDisplay = '';
      this.$emit('clear');
    },
    togglePassword() {
      this.inputType = (this.inputType === 'password') ? 'text' : 'password';
    },
    onIconDropDownClick() {
      this.onClick();
      this.$nextTick(() => {
        this.focus();
      });
    },
    onFocus() {
      this.focused = true;

      if (this.bgColor === 'bg-white') {
        this.inputContainerLabelColor = 'text-primary';
        if (this.filled) {
          this.inputContainerFieldBottomBorderColor = 'border-primary';
        }
      }
    },
    onBlur() {
      this.focused = false;
      this.makeInputContainerColors();
      this.$emit('blur');
    },
    onInput(value) {
      if (this.useMask && (this.type === 'text' || this.type === 'search')) {
        this.changeModelMask(value);
      } else if (this.type === 'text' || this.type === 'password') {
        this.$emit('update:modelValue', value);
      } else if (this.type === 'search') {
        this.$emit('update:modelValue', value);
        this.onInputSearch(value);
      } else if (this.type === 'currency') {
        this.changeModelCurrencyMask();
      }
    },
    onKeyDown() {
      if (this.inputDropdown) {
        this.onShowDropdown();
      } else {
        this.$emit('onKeyDown');
      }
    },
    onTab() {
      this.$emit('onTab');
    },
    onEnter() {
      if (this.chips) {
        this.selectChipsValue.push({
          text: this.inputDisplay,
          value: this.inputDisplay,
        });
        const arrValue = [];
        this.selectChipsValue.forEach((chip) => {
          arrValue.push(chip.value);
        });
        this.$emit('input', arrValue);
      } else {
        this.$emit('onEnter');
      }
    },
    onEscape() {
      if (this.type === 'select' || this.type === 'multi-select' || this.type === 'search') {
        this.showdropdown = false;
      }
      this.$emit('onEscape');
    },
    onDelete() {
      if (this.chips) {
        if (this.inputDisplay.length === 0 && this.modelValue && this.modelValue.length) {
          this.closeChip(this.modelValue.length - 1);
        }
      }
    },
    onClick() {
      if (this.inputDropdown) {
        this.onShowDropdown();
      }
      this.$emit('onClick');
    },
    away() {
      this.showdropdown = false;
    },
  },
};
</script>
