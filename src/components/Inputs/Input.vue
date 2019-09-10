<template lang="pug">
  h-input-container(
    :bg-color="inputContainerColor"
    :text-color="inputContainerTextColor"
    :label="label"
    :outlined="outlined"
    :filled="filled"
    :rounded="rounded"
    :leftIcon="leftIcon"
  )
    .flex.flex-column.full-width.dropdown(v-on-clickaway="away")
      div(
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
      .flex
        .flex.flex-1.flex-column.h-mr-sm
          .flex.border-bottom.border-gray
            h-input-field(
              :id="inputId"
              v-model="inputDisplay"
              :type="inputtype"
              :maxlength="maxlength"
              :readonly="readonly"
              :rounded="rounded"
              :outlined="outlined"
              :filled="filled"
              :textCenter="textCenter"
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
            h-fa-icon.h-mr-xs(
              v-if="clearable"
              text-color="text-gray"
              icon="fas fa-times-circle"
              @click="inputDisplay = ''"
            )
            h-fa-icon(
              v-if="inputtype === 'password'"
              text-color="text-gray"
              icon="fas fa-eye"
              @click="togglePassword"
            )
          .flex.flex-column
            .flex.full-width.helper-text
              .flex-1.text-caption(
                v-if="helperText"
              )
                | {{helperText}}
              .flex.text-caption.flex-1.flex-justify-end(
                v-if="textCounter"
              )
                | {{inputCounter}}
            .flex.flex-column
              .flex.full-with.text-caption.error-message(
                v-if="errorMessage"
              )
                | {{errorMessage}}
        .flex.flex-items-center
          h-fa-icon(:icon="inputIcon")

        div.bg-white.full-width.dropdown-content.shadow(
          :style="{right: right, bottom: bottom}"
          v-if="showdropdown"
          :id="dropMenuId"
        )
          div.flex.flex-items-center(
            :class="[inputContainerColor]"
            v-for="(option, index) in options"
            :key="index"
            @click="onSelectItem(option)"
          )
            .flex.flex-items-center.full-width.menu-item-padding(v-if="selectSingle")
              div(v-if="displayMode ==='icon'")
                h-fa-icon.menu-item-content-padding(:icon="option.icon")
              div(v-if="displayMode ==='avatar'")
                h-avatar.menu-item-content-padding(:src="option.avatar")
              div(v-if="displayMode ==='image'")
                img.menu-item-content-padding(:src="option.img" style="width:32px; height:32px;")
              div.flex-1.menu-item-content-padding  {{option.text}}
            .flex.full-width(v-else-if="multiSelect")
              h-checkbox.h-pl-md(v-model="multiselectItem" :text="option.text" :value="option.value" @change="onSelectItem")
            .flex.full-width.menu-item-padding(v-else-if="search")
              h-fa-icon.menu-item-content-padding(v-if="option.icon && option.icon.length" :icon="option.icon" size="32x" style="color: gray")
              h-avatar.menu-item-content-padding(v-else-if="option.avatar && option.avatar.length > 0" :src="option.avatar" style="width:32px; height:32px;")
              img.menu-item-content-padding(v-else-if="option.img && option.img.length > 0" :src="option.img" style="width:32px; height:32px;")
              .flex-1.flex-column.overflow-hidden.menu-item-content-padding
                .title
                  strong {{option.text}}
                .subtitle.flex.flex-wrap
                  strong {{option.desc}}
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
    this.inputContainerColor = this.bgcolor
    this.inputContainerTextColor = this.textcolor
    this.makeInputValue()
  },
  watch: {
    inputDisplay: function (value) {
      // console.log('mudou display: ', value)
      if (!this.chips && !this.inputMask && !this.inputCurrency) {
        this.$emit('input', value)
      }
    },
    value: function (value) {
      // console.log('mudou value: ', value)
      if (!this.chips && !this.inputMask && !this.inputCurrency) {
        this.inputDisplay = value
      }
    },
    bgcolor: function (value) {
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
    }
  },
  computed: {
    inputCounter () {
      let valueLength = (this.value) ? this.value.length : 0
      return '' + valueLength + ' / ' + this.textCounter
    }
  },
  methods: {
    makeInputValue () {
      let localInputDisplay = this.value
      this.inputDisplay = this.value
      if (localInputDisplay) {
        if (this.selectSingle && (this.options && this.options.length)) {
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
      if (this.search) {
        this.showdropdown = true
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
    focus () {
      this.focused = true
      this.inputContainerColor = 'bg-white'
      this.inputContainerTextColor = 'text-primary'

      if (this.selectSingle || this.multiSelect) {
        this.onClick()
      }
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
      this.inputContainerColor = this.bgcolor
      this.inputContainerTextColor = this.textcolor
    },
    togglePassword () {
      this.inputtype = (this.inputtype === 'password') ? 'text' : 'password'
    },
    onKeyDown () {
      if (this.search) {
        this.showdropdown = true
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
      this.$emit('onEscape')
    },
    onClick () {
      if (this.selectSingle || this.multiSelect) {
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
            multivalue.push(this.options[idx].text)
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
