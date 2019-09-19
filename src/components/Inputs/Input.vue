<template lang="pug">
  h-input-container(
    :bg-color="inputContainerColor"
    :text-color="inputContainerTextColor"
    :label="containerLabel"
    :filled="filled"
    :leadingIcon="leadingIcon"
    :focused="focused"
    :dense="dense"
    :errorMessage="errorMessage"
    :helperText="helperText"
    :inputTextCounter="inputTextCounter"
    :inputCounter="inputCounter"
  )
    .column.full-width(v-on-clickaway="away")
      .col(
        v-if="this.chips"
        @click="focus"
      )
        h-chips.h-pa-xs(
          v-for="(chip, index) in value"
          :key="index"
          :text="chip"
          text-color="text-white"
          bgcolor="bg-primary"
          closable
          @onClose="closeChip(index)"
        )
      .col
        .row.align-items-center
          .col-auto.text-subtitle1(v-if="prefix && prefix.length")
            | {{prefix}}
          .col
            h-input-field(
              :id="inputId"
              v-model="inputDisplay"
              :type="inputtype"
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
          .col-auto.input-icons-padding(v-if="clearable")
            h-fa-icon.h-mr-xs(
              text-color="text-gray600"
              icon="fas fa-times-circle"
              @click="inputDisplay = ''"
            )
          .col-auto.input-icons-padding(v-if="inputtype === 'password'")
            h-fa-icon(
              text-color="text-gray600"
              icon="fas fa-eye"
              @click="togglePassword"
            )
          .col-auto(v-if="trailingIcon && trailingIcon.length > 0")
            .row.justify-center.align-items-center.full-height
              .col-auto.h-mr-sm
                h-fa-icon(:icon="trailingIcon" text-color="text-gray600")
          .col-auto.input-icons-padding(v-if="inputSearch || inputSelect")
            h-fa-icon(
              text-color="text-primary"
              icon="fas fa-caret-down"
            )

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
              h-list-item-side(v-if="displayMode ==='image'")
                img(:src="option.img" style="width:32px; height:32px;")
              h-list-item-content
                h-list-item-text(:title="option.text")

          h-list(v-else-if="multiSelect")
            h-list-item(
              v-show="multiSelect"
              v-for="(option, index) in options"
              :key="`${dropMenuId}-${index}`"
              @click="onSelectItem(option)"
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
              h-list-item-side(v-if="option.icon && option.icon.length")
                h-fa-icon(:icon="option.icon" size="32x" style="color: gray")
              h-list-item-side(v-else-if="option.avatar && option.avatar.length > 0")
                h-avatar(:src="option.avatar" style="width:32px; height:32px;")
              h-list-item-side(v-else-if="option.img && option.img.length > 0")
                img(:src="option.img" style="width:32px; height:32px;")
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
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputId: uuidv1(),
      dropMenuId: uuidv1(),
      inputtype: '',
      inputDisplay: '',
      inputPlaceholder: '',
      inputLabel: '',
      focused: false,
      inputContainerColor: '',
      inputContainerTextColor: '',
      showdropdown: false,
      right: '',
      bottom: '',
      multiselectItem: [],
      chipsValue: [],
      maskObj: {
        rawValue: '',
        maskedValue: ''
      }
    }
  },
  mounted () {
    this.inputtype = this.type
    this.inputContainerColor = this.bgColor
    this.inputContainerTextColor = this.textcolor
    this.makeInputValue()
  },
  watch: {
    inputDisplay: function (value) {
      // console.log('mudou display: ', value)
      if (!this.chips && !this.inputMask && !this.inputCurrency && !this.inputSelect && !this.inputSearch) {
        this.$emit('input', value)
      }
    },
    value: function (value) {
      // console.log('mudou value: ', value)
      if (!this.chips && !this.inputMask && !this.inputCurrency) {
        this.inputDisplay = value
      }
    },
    bgColor: function (value) {
      console.log('mudou bgColor: ', value)
      this.inputContainerColor = value
    },
    textcolor: function (value) {
      this.inputContainerTextColor = value
    },
    multiselectItem: function (value) {
      let arrDisp = []
      let display = ''
      value.forEach(item => {
        let val = this.options.find(opt => opt.value === item)
        if (val) {
          arrDisp.push(val.text)
        }
      })
      if (arrDisp.length) {
        display = arrDisp.join()
      }
      this.inputDisplay = display
    },
    type: function (value) {
      this.inputtype = value
    },
    masked: function (newValue) {
      if (this.inputMask) {
        this.changeModelMask()
      } else {
        this.changeModelCurrencyMask()
      }
    },
    options: function (value) {
      // console.log('mudou options:', JSON.stringify(value))
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
        } else if (this.multiSelect && (this.options && this.options.length)) {
          let multiselectItem = []
          if (Array.isArray(localInputDisplay)) {
            localInputDisplay.forEach(item => {
              let index = this.options.findIndex(opt => opt.value === item)
              if (index !== -1) {
                multiselectItem.push(this.options[index].value)
              }
            })
          }
          this.multiselectItem = multiselectItem
        } else if (Array.isArray(localInputDisplay)) {
          this.onChangeChips(localInputDisplay)
        }

        // if (this.inputMask) {
        //   this.changeModelMask()
        // }
      }
    },
    changeModelMask () {
      let modelValue = this.inputDisplay
      if (!this.masked) {
        let patt = new RegExp('[()-/:._]', 'g')
        modelValue = this.inputDisplay.replace(patt, '')
      }
      // console.log('changeModelMask modelvalue: ', modelValue)
      this.$emit('input', modelValue)
    },
    changeModelCurrencyMask () {
      let modelValue = (this.masked) ? this.inputDisplay : unformat(this.inputDisplay, this.precision)
      // console.log('changeModelCurrencyMask modelValue:', modelValue)
      this.$emit('input', modelValue)
    },
    formatCurrency (value) {
      this.inputDisplay = format(value, this.$props)
      // console.log('formatCurrency inputDisplay: ', this.inputDisplay)
    },
    onInput (value) {
      // console.log('onInput value:', value)
      // if (this.inputSearch) {
      //   this.showdropdown = true
      // }
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
      // console.log('value debounce input-field:', value)
      // this.inputDisplay = value
      this.$emit('onFilter', value)
    }, 500),
    focus () {
      this.focused = true
      this.inputContainerColor = 'bg-white'
      this.inputContainerTextColor = 'text-primary'
    },
    checkViewport () {
      this.showdropdown = true
      this.bottom = ''
      // console.log('this.showdropdown:', this.showdropdown)

      this.$nextTick(() => {
        let input = document.getElementById(this.inputId)
        let dropMenu = document.getElementById(this.dropMenuId)
        // let container = document.getElementById(this.containerid)
        if (input && dropMenu) {
          if (viewport.elementBelowOfPage(dropMenu)) {
            // console.log('abaixo da tela:', JSON.stringify(rectDropMenu))
            // let rectInput = input.getClientRects()
            // let rectDropMenu = dropMenu.getClientRects()
            // let bottomMenu = rectDropMenu['0'].bottom
            // let menuHeight = rectDropMenu['0'].height
            // let inputHeight = rectInput['0'].height
            // let result = bottomMenu + menuHeight + inputHeight
            this.bottom = '30px'
          }
        }
      })
    },
    blur () {
      this.focused = false
      this.inputContainerColor = this.bgColor
      this.inputContainerTextColor = this.textColor
      this.$emit('blur')
    },
    togglePassword () {
      this.inputtype = (this.inputtype === 'password') ? 'text' : 'password'
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
        if (this.inputDisplay.length) {
          if (this.value.length === 0) {
            this.chipsValue = []
            this.chipsValue.push(this.txtValue)
          } else {
            this.chipsValue = _.clone(this.value)
            this.chipsValue.push(this.inputDisplay)
          }
          this.onChangeChips(this.chipsValue)
        }
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
        this.multiselectItem.forEach(item => {
          let idx = this.options.findIndex(opt => opt.value === item)
          if (idx !== -1) {
            multivalue.push(this.options[idx].value)
          }
        })
        this.inputDisplay = multivalue
        this.$emit('input', this.multiselectItem)
        this.$emit('changeMultiselect', this.multiselectItem)
      }
    },
    onChangeChips (value) {
      let arrValue = []
      if (value !== undefined && value.length) {
        arrValue = value
      }
      this.$emit('input', arrValue)
      this.inputDisplay = ''
    },
    closeChip (index) {
      this.chipsValue = _.clone(this.value)
      this.$emit('onDelete', this.chipsValue[index])
      this.$delete(this.chipsValue, index)
      this.$emit('input', this.chipsValue)
    },
    onDelete () {
      // console.log('input delete model:', this.inputDisplay)
      if (this.chips) {
        if (this.inputDisplay.length === 0 && this.value && this.value.length) {
          this.closeChip(this.value.length - 1)
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
