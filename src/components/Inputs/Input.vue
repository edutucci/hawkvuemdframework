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
    @onClearable="onClearable"
    @onTogglePassword="togglePassword"
  )
    .column.full-width(v-on-clickaway="away"
    )
      .col(
        v-if="this.chips"
        @click="focus"
      )
        h-chips.h-pa-xs(
          v-for="(chip, index) in selectChipsValue"
          :key="index"
          :text="chip.text"
          dense
          closable
          @onClose="closeChip(index)"
        )
      .col(
        v-else-if="selectChips && multiSelect"
      )
        .row.wrap
          .col-auto(
            v-for="(chip, index) in selectChipsValue"
            :key="index"
          )
            h-chips.h-pa-xs(
              :text="chip.text"
              dense
              closable
              @onClose="closeSelectChip(index)"
            )
          .col(
            @click="checkViewport"
          )
            input.full-width.no-border.cursor-pointer(type="text"  @click="checkViewport" readonly)
      .col(
        v-if="!selectChips"
      )
        .row.align-items-center
          .col-auto(v-if="prefix && prefix.length")
            | {{prefix}}
          .col()
            h-input-field.text-caption.cursor-pointer(
              :class="[inputContainerTextColor]"
              :id="inputId"
              v-model="inputDisplay"
              :type="inputType"
              :maxlength="maxlength"
              :readonly="readonly"
              :filled="filled"
              :textCenter="textCenter"
              :placeholder="containerPlaceholder"
              :focused="focused"
              :chips="chips"
              :input-mask="inputMask"
              :input-currency="inputCurrency"
              :mask="mask"
              @input="onInput"
              @focus="focus"
              @blur="blur"
              @onKeyDown="onKeyDown"
              @onTab="onTab"
              @onEnter="onEnter"
              @onEscape="onEscape"
              @onDelete="onDelete"
              @click="onClick"
            )
          .col-auto.text-body2(v-if="suffix && suffix.length")
            | {{suffix}}

      .bg-white.dropdown-content.scroll-y-only.shadow.border-radius(
        :style="{right: right, bottom: bottom}"
        v-if="showdropdown"
        :id="dropMenuId"
      )
        h-list(v-if="inputSelect")
          h-list-item(
            v-for="(option, index) in options"
            :key="`${dropMenuId}-${index}`"
            @click="onSelectItem(option)"
          )
            h-list-item-side(v-if="displayMode ==='icon'")
              h-fa-icon(:icon="option.icon")
            h-list-item-side(v-if="displayMode ==='avatar'")
              h-avatar(:src="option.avatar")
            // h-list-item-side(v-if="displayMode ==='image'")
            //   img(:src="option.img" style="width:32px; height:32px;")
            h-list-item-content
              h-list-item-text(:title="option.text")

        h-list(v-else-if="multiSelect")
          h-list-item(
            v-show="multiSelect"
            v-for="(option, index) in options"
            :key="`${dropMenuId}-${index}`"
          )
            h-list-item-side
              h-checkbox(v-model="multiselectItem" :text="option.text" :value="option.value" @change="onSelectItem")

        h-list(v-else-if="inputSearch")
          h-list-item(
            v-show="inputSearch"
            v-for="(option, index) in options"
            :key="`${dropMenuId}-${index}`"
            @click="onSelectItem(option)"
          )
            h-list-item-side.align-items-center(v-if="option.icon && option.icon.length")
              h-fa-icon(:icon="option.icon" size="24px" style="color: gray")
            h-list-item-side.align-items-center(v-else-if="option.avatar && option.avatar.length > 0")
              h-avatar(:src="option.avatar" size="24px")
            h-list-item-side.align-items-center(v-else-if="option.img && option.img.length > 0")
              img(:src="option.img" width="24px" height="24px")
            h-list-item-content
              h-list-item-text(:title="option.text" :caption="option.desc")

</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import { mixin as focusMixin } from 'vue-focus'
import InputProperties from './InputProperties'
import _ from 'lodash'
import uuidv1 from 'uuid/v1'
import viewport from '../others/viewport'
import { unformat, format } from './currencyDirective/utils'

export default {
  name: 'HInput',
  extends: InputProperties,
  mixins: [focusMixin, clickaway],
  props: {
    value: {
      type: [String, Array, Number],
      default: ''
    }
  },
  data () {
    return {
      inputId: uuidv1(),
      dropMenuId: uuidv1(),
      inputDisplay: '',
      inputPlaceholder: '',
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
      right: '',
      bottom: '',
      multiselectItem: [],
      selectChipsValue: []
    }
  },
  mounted () {
    this.makeInputValue()
    this.makeInputContainerColors()
    this.inputType = this.type
  },
  watch: {
    value: function (value) {
      this.makeInputValue()
    },
    bgColor: function (value) {
      this.makeInputContainerColors()
    },
    textcolor: function (value) {
      this.makeInputContainerColors()
    },
    masked: function (newValue) {
      if (this.inputMask) {
        this.changeModelMask()
      } else {
        this.changeModelCurrencyMask()
      }
    },
    options: function (value) {
      this.checkViewport()
    }
  },
  computed: {
    containerLabel () {
      let value = this.label
      if (!this.focused) {
        if ((!this.inputDisplay) || (this.inputDisplay && this.inputDisplay.length === 0)) {
          value = ''
        }
      }
      return value
    },
    containerPlaceholder () {
      let value = ''
      if (!this.focused) {
        if ((!this.inputDisplay) || (this.inputDisplay && this.inputDisplay.length === 0)) {
          value = this.label
        }
      }
      return value
    },
    inputTextCounter () {
      let valueLength = (this.value) ? this.value.length : '' + 0
      return '' + valueLength + ' / ' + this.textCounter
    },
    inputDropdown () {
      let value = false
      if (this.inputSearch || this.inputSelect || this.multiSelect) {
        value = true
      }
      return value
    }
  },
  methods: {
    makeInputValue () {
      let localInputDisplay = this.value
      this.inputDisplay = this.value
      if (localInputDisplay) {
        if (this.inputSelect && (this.options && this.options.length)) {
          let index = this.options.findIndex(item => item.value === this.value)
          if (index !== -1) {
            let option = this.options[index]
            this.onSelectItem(option)
          }
        } else if (this.chips) {
          this.selectChipsValue = []
          if (Array.isArray(localInputDisplay)) {
            localInputDisplay.forEach(item => {
              this.selectChipsValue.push({
                text: item,
                value: item
              })
            })
          }
          this.inputDisplay = ''
        } else if (this.multiSelect && (this.options && this.options.length)) {
          let multiselectItem = []
          let arrDisp = []
          this.selectChipsValue = []
          if (Array.isArray(localInputDisplay)) {
            localInputDisplay.forEach(item => {
              let index = this.options.findIndex(opt => opt.value === item)
              if (index !== -1) {
                arrDisp.push(this.options[index].text)
                multiselectItem.push(this.options[index].value)
                this.selectChipsValue.push({
                  text: this.options[index].text,
                  value: this.options[index].value
                })
              }
            })
            this.inputDisplay = arrDisp.join(', ')
          }
          this.multiselectItem = multiselectItem
        }
      }
    },
    makeInputContainerColors () {
      if (this.bgColor === 'bg-white') {
        this.inputContainerFieldBottomBorderColor = 'border-gray500'
        this.inputContainerFieldBackgroundColor = (!this.filled) ? 'bg-white' : 'bg-gray'
        this.inputContainerBackgroundColor = 'bg-white'
        this.inputContainerTextColor = 'text-black'
        this.inputContainerLabelColor = 'text-black'
        this.inputContainerIconColor = 'text-gray600'
        this.inputContainerIconDropdownColor = 'text-primary'
        this.inputContainerHelperTextColor = 'text-gray600'
        this.inputContainerErrorTextColor = 'text-red800'
        this.inputContainerIconErrorTextColor = 'text-red600'
      } else {
        this.inputContainerFieldBottomBorderColor = 'border-white'
        this.inputContainerFieldBackgroundColor = this.bgColor
        this.inputContainerBackgroundColor = this.bgColor
        this.inputContainerTextColor = 'text-white'
        this.inputContainerLabelColor = 'text-white'
        this.inputContainerIconColor = 'text-white'
        this.inputContainerIconDropdownColor = 'text-white'
        this.inputContainerHelperTextColor = 'text-white'
        this.inputContainerErrorTextColor = 'text-white'
        this.inputContainerIconErrorTextColor = 'text-white'
      }
    },
    changeModelMask () {
      let modelValue = this.inputDisplay
      if (!this.masked) {
        let patt = new RegExp('[()-/:._]', 'g')
        modelValue = this.inputDisplay.replace(patt, '')
      }
      this.$emit('input', modelValue)
    },
    changeModelCurrencyMask () {
      let modelValue = (this.masked) ? this.inputDisplay : unformat(this.inputDisplay, this.precision)
      this.$emit('input', modelValue)
    },
    formatCurrency (value) {
      this.inputDisplay = format(value, this.$props)
    },
    onInput (value) {
      if (this.inputSelect) {
        return
      }

      if (this.inputSearch) {
        this.onInputSearch(value)
        return
      }

      this.inputDisplay = value

      if (this.inputCurrency) {
        this.changeModelCurrencyMask()
      } else if (this.inputMask) {
        this.changeModelMask()
      } else if (!this.chips) {
        this.$emit('input', value)
      }
    },
    onInputSearch: _.debounce(function (value) {
      this.$emit('onFilter', value)
    }, 500),
    focus () {
      this.focused = true

      if (this.bgColor === 'bg-white') {
        this.inputContainerLabelColor = 'text-primary'
        if (this.filled) {
          this.inputContainerFieldBottomBorderColor = 'border-primary'
        }
      }
    },
    checkViewport () {
      this.showdropdown = true
      this.bottom = ''

      this.$nextTick(() => {
        let input = document.getElementById(this.inputId)
        let dropMenu = document.getElementById(this.dropMenuId)
        if (input && dropMenu) {
          if (viewport.elementBelowOfPage(dropMenu)) {
            this.bottom = '0px'
          }
        }
      })
    },
    blur () {
      this.focused = false
      this.makeInputContainerColors()
      this.$emit('blur')
    },
    togglePassword () {
      this.inputType = (this.inputType === 'password') ? 'text' : 'password'
    },
    onKeyDown () {
      if (this.inputSearch) {
        this.checkViewport()
      } else {
        this.$emit('onKeyDown')
      }
    },
    onTab () {
      this.$emit('onTab')
    },
    onEnter () {
      if (this.chips) {
        this.selectChipsValue.push({
          text: this.inputDisplay,
          value: this.inputDisplay
        })
        let arrValue = []
        this.selectChipsValue.forEach(chip => {
          arrValue.push(chip.value)
        })
        this.$emit('input', arrValue)
      } else {
        this.$emit('onEnter')
      }
    },
    onEscape () {
      if (this.inputSelect || this.multiSelect || this.inputSearch) {
        this.showdropdown = false
      }
      this.$emit('onEscape')
    },
    onClick () {
      if (this.inputSelect || this.multiSelect) {
        this.checkViewport()
      }
      this.$emit('onClick')
    },
    away () {
      this.showdropdown = false
    },
    onSelectItem (option) {
      if (!this.multiSelect) {
        this.inputDisplay = option.text
        this.$emit('input', option.value)
        this.away()
      } else {
        let multivalue = []
        this.selectChipsValue = []
        this.multiselectItem.forEach(item => {
          let idx = this.options.findIndex(opt => opt.value === item)
          if (idx !== -1) {
            multivalue.push(this.options[idx].value)
            this.selectChipsValue.push({
              text: this.options[idx].text,
              value: this.options[idx].value
            })
          }
        })
        this.$emit('input', this.multiselectItem)
        this.$emit('changeMultiselect', this.multiselectItem)
      }
    },
    closeChip (index) {
      this.closeSelectChip(index)
    },
    onDelete () {
      if (this.chips) {
        if (this.inputDisplay.length === 0 && this.value && this.value.length) {
          this.closeChip(this.value.length - 1)
        }
      }
    },
    onClearable () {
      this.inputDisplay = ''
    },
    closeSelectChip (index) {
      this.$delete(this.selectChipsValue, index)
      let arrValue = []
      this.selectChipsValue.forEach(chip => {
        arrValue.push(chip.value)
      })
      this.$emit('input', arrValue)
    }
  }
}
</script>

<style scoped>
</style>
