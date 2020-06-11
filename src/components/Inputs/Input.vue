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
    :id="containerId"
  )
    .column.full-width(v-on-clickaway="away")
      .col(
        v-if="this.chips && type === 'text'"
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
        v-else-if="selectChips && type === 'multi-select'"
        @click="checkViewport"
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
          .col
            input.full-width.no-border.cursor-pointer(type="text"  @click="checkViewport" readonly)
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
              @focus="focus"
              @blur="blur"
              @onKeyDown="onKeyDown"
              @onTab="onTab"
              @onEnter="onEnter"
              @onEscape="onEscape"
              @onDelete="onDelete"
              @click="onClick"
            )
          .col-auto.h-pa-xs.h-ml-md.bg-gray300.text-body1(v-if="suffix && suffix.length")
            | {{suffix}}

      .bg-white.dropdown-content.scroll-y-only.shadow-2.border-radius(
        :style="[dropdownObject]"
        v-if="showdropdown && options && options.length > 0"
        :id="dropMenuId"
      )
        h-list(v-if="type === 'select'")
          h-list-item(
            v-for="(option, index) in options"
            :key="`${dropMenuId}-${index}`"
            @click="onSelectItem(option)"
          )
            slot(name="itemoption" :value="option")
              h-list-item-side(v-if="displayMode ==='icon'")
                h-icon(:icon="option.icon")
              h-list-item-side(v-if="displayMode ==='avatar'")
                h-image(:src="option.avatar" avatar)
              // h-list-item-side(v-if="displayMode ==='image'")
              //   img(:src="option.img" style="width:32px; height:32px;")
              h-list-item-content
                h-list-item-text(:title="option.text.toString()")

        h-list(v-else-if="type === 'multi-select'")
          h-list-item(
            v-show="type === 'multi-select'"
            v-for="(option, index) in options"
            :key="`${dropMenuId}-${index}`"
          )
            h-list-item-side
              h-checkbox(v-model="multiselectItem" :text="option.text" :value="option.value" @change="onSelectItem")

        h-list(v-else-if="type === 'search'")
          h-list-item(
            v-show="type === 'search'"
            v-for="(option, index) in options"
            :key="`${dropMenuId}-${index}`"
            @click="onSelectItem(option)"
          )
            slot(name="itemoption" :value="option")
              h-list-item-side.align-items-center(v-if="option.icon && option.icon.length")
                h-icon(:icon="option.icon" size="20px" style="color: gray")
              h-list-item-side.align-items-center(v-else-if="option.avatar && option.avatar.length > 0")
                h-image(:src="option.avatar" size="24px" avatar)
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
import resize from 'vue-resize-directive'
import masker from './maskDirective/masker'

export default {
  name: 'HInput',
  extends: InputProperties,
  mixins: [focusMixin, clickaway],
  directives: {
    resize
  },
  props: {
    value: {
      type: [String, Array, Number],
      default: ''
    }
  },
  data () {
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
        width: ''
      },
      containerRect: {
        top: 0,
        left: 0
      },
      window: {
        width: 0,
        height: 0
      }
    }
  },
  mounted () {
    this.makeInputValue()
    this.makeInputContainerColors()
    this.inputType = this.type
  },
  watch: {
    value: function () {
      this.makeInputValue()
    },
    bgColor: function () {
      this.makeInputContainerColors()
    },
    textcolor: function () {
      this.makeInputContainerColors()
    },
    masked: function () {
      if (this.useMask) {
        this.changeModelMask(this.inputDisplay)
      } else if (this.type === 'currency') {
        this.changeModelCurrencyMask()
      }
    },
    options: function () {
      this.checkViewport()
    },
    type: function (value) {
      this.inputType = value
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
      let value = (this.placeholder && this.placeholder.length > 0) ? this.placeholder : this.label
      return value
    },
    inputTextCounter () {
      let valueLength = (this.value) ? this.value.length : '' + 0
      return '' + valueLength + ' / ' + this.textCounter
    },
    inputDropdown () {
      let value = false
      if (this.type === 'search' || this.type === 'select' || this.type === 'multi-select') {
        value = true
      }
      return value
    },
    compInputType () {
      let value = ''
      switch (this.inputType) {
        case 'password':
          value = 'password'
          break
        default:
          value = 'text'
      }
      return value
    }
  },
  methods: {
    makeInputValue () {
      let localInputDisplay = this.value
      if (this.type === 'text' || this.type === 'search' || this.type === 'password') {
        this.inputDisplay = this.value
      } else if (localInputDisplay) {
        if (this.useMask) {
          this.inputDisplay = this.value
          // this.changeModelMask()
        } else if (this.type === 'currency') {
          this.changeModelCurrencyMask()
        } else if (this.type === 'select' && (this.options && this.options.length)) {
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
        } else if (this.type === 'multi-select' && (this.options && this.options.length)) {
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
    changeModelMask (value) {
      // console.log('entering changeModelMask:', value)
      // console.log('this.inputDisplay:', this.inputDisplay)
      // let modelValue = this.inputDisplay
      // if (!this.masked) {
      //   let patt = new RegExp('[()-/:._]', 'g')
      //   modelValue = this.inputDisplay.replace(patt, '')
      // }
      // console.log('modeValue:', modelValue)
      // this.$emit('input', modelValue)
      // console.log('changeModelMask:', value)
      this.inputDisplay = value
      let localvalue = masker(value, this.mask, this.masked, this.tokens)
      if (localvalue !== this.lastValue) {
        this.lastValue = localvalue
        this.$emit('input', localvalue)
        // console.log('mask field on input', localvalue)
        if (this.type === 'search') {
          this.onInputSearch(localvalue)
        }
      }
    },
    changeModelCurrencyMask () {
      this.formatCurrency(this.inputDisplay)
      let modelValue = (this.masked) ? this.inputDisplay : unformat(this.inputDisplay, this.precision)
      this.$emit('input', modelValue)
    },
    formatCurrency (value) {
      this.inputDisplay = format(value, this.$props)
    },
    onInput (value) {
      if (this.useMask && (this.type === 'text' || this.type === 'search')) {
        this.changeModelMask(value)
      } else if (this.type === 'text' || this.type === 'password') {
        this.$emit('input', value)
      } else if (this.type === 'search') {
        this.$emit('input', value)
        this.onInputSearch(value)
      } else if (this.type === 'currency') {
        this.changeModelCurrencyMask()
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
    updateDropdownPosition () {
      if (!this.showdropdown) {
        return false
      }
      let containerElement = document.getElementById(this.containerId)
      if (containerElement) {
        let dropMenu = document.getElementById(this.dropMenuId)
        let containerRect = containerElement.getClientRects()
        if (this.containerRect.top !== containerRect[0].top ||
          this.containerRect.left !== containerRect[0].left ||
          viewport.elementBelowOfPage(dropMenu) ||
          this.window.width !== window.innerWidth ||
          this.window.height !== window.innerHeight
        ) {
          this.checkViewport()
        } else {
          setTimeout(() => {
            this.updateDropdownPosition()
          }, 100)
        }
      }
    },
    updateContainerRect (containerRect) {
      this.containerRect.top = containerRect[0].top
      this.containerRect.left = containerRect[0].left
    },
    checkViewport () {
      this.showdropdown = true

      let containerElement = document.getElementById(this.containerId)
      if (containerElement) {
        let containerRect = containerElement.getClientRects()
        this.updateContainerRect(containerRect)

        this.dropdownObject.top = '' + containerRect[0].bottom + 'px'
        this.dropdownObject.width = '' + (containerRect[0].width) + 'px'
        this.dropdownObject.left = '' + (containerRect[0].left) + 'px'
        this.windowWidth = window.innerWidth
        this.window.height = window.innerHeight

        this.$nextTick(() => {
          let dropMenu = document.getElementById(this.dropMenuId)
          if (dropMenu) {
            if (viewport.elementBelowOfPage(dropMenu)) {
              let menuHeight = document.getElementById(this.dropMenuId).clientHeight
              this.dropdownObject.top = '' + (this.containerRect.top - menuHeight) + 'px'
            }
          }

          setTimeout(() => {
            this.updateDropdownPosition()
          }, 100)
        })
      }
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
      if (this.type === 'search') {
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
      if (this.type === 'select' || this.type === 'multi-select' || this.type === 'search') {
        this.showdropdown = false
      }
      this.$emit('onEscape')
    },
    onClick () {
      if (this.type === 'select' || this.type === 'multi-select') {
        this.checkViewport()
      }
      this.$emit('onClick')
    },
    away () {
      this.showdropdown = false
    },
    onSelectItem (option) {
      if (this.type === 'select' || this.type === 'search') {
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
