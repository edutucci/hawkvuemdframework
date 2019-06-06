<template lang="pug">
  h-input-container(
    :bgcolor="inputContainerColor"
    :textcolor="inputContainerTextColor"
    :label="label"
    :errorMessage="errorMessage"
    :helperText="helperText"
    :outline="outline"
    :filled="filled"
    :rounded="rounded"
    :leftIcon="leftIcon"
  )
    .flex.flex-column.full-width(v-on-clickaway="away")
      .flex
        h-input-field(
          :class="[inputContainerTextColor, {'text-center': textCenter}]"
          v-model="inputDisplay"
          :type="inputtype"
          :readonly="readonly"
          :rounded="rounded"
          :outline="outline"
          :filled="filled"
          :textCenter="textCenter"
          :focused="focused"
          @input="onInput"
          @focus="focus"
          @blur="blur"
          @onKeyDown="onKeyDown"
          @onTab="onTab"
          @onEnter="onEnter"
          @onEscape="onEscape"
          @onArrowDown="onArrowDown"
          @click="onClick"
        )
        div(:class="[inputContainerTextColor]" style="padding: 6px")
          h-fa-icon(:icon="inputIcon")
      div.full-width.dropdown-menu.boxshadow.border-corner-rounded(
        :style="{left: left, right: right, bottom: bottom}"
      )
        div.flex.flex-items-center.menu-item(
          :class="[inputContainerColor]"
          v-for="(option, index) in options"
          :key="index"
          @click="onSelectItem(option)"
          v-if="magic_flag"
        )
          .flex.full-width.menu-item-padding(v-if="selectSingle")
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

export default {
  extends: InputProperties,
  mixins: [focusMixin, clickaway],
  props: {
    value: {
      type: [String, Array],
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputtype: '',
      inputDisplay: '',
      focused: false,
      inputContainerColor: '',
      inputContainerTextColor: '',
      magic_flag: false,
      left: '0px',
      right: '',
      bottom: '',
      multiselectItem: []
    }
  },
  mounted () {
    this.inputtype = this.type
    this.inputContainerColor = this.bgcolor
    this.inputContainerTextColor = this.textcolor
    this.makeInputValue()
    // this.onChange(this.value)
    // this.onInputBlur()
  },
  watch: {
    inputDisplay: function (value) {
      // console.log('inputDisplay change in h-input:', value)
      this.$emit('input', value)
    },
    value: function (value) {
      // console.log('value change in h-input:', value)
      this.inputDisplay = value
    },
    placeholder: function (value) {
      // this.changeFloatLabelStyle()
    },
    floatLabel: function (value) {
      // this.changeFloatLabelStyle()
    },
    bgcolor: function (value) {
      // console.log('inputDisplay change in h-input:', value)
      this.inputContainerColor = value
    },
    textcolor: function (value) {
      // console.log('inputDisplay change in h-input:', value)
      this.inputContainerTextColor = value
    },
    multiselectItem: function (value) {
      // console.log('multiselectItem watch: ', value)
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
      // console.log('value in makeInputChange: ', this.value)
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
              // console.log('multiselect index: ', index)
              if (index !== -1) {
                multiselectItem.push(this.options[index].value)
              }
            })
          }
          this.multiselectItem = multiselectItem
        }
      }
    },
    onInput (value) {
      // console.log('value onInput in h-input:', value)
      if (this.search) {
        this.magic_flag = true
      }
      this.inputDisplay = value
      this.$emit('input', value)
    },
    // inputMaxlength (value) {
    //   let text = value
    //   if (value) {
    //     text = value.substr(0, this.maxlength)
    //   }
    //   if (text === undefined) {
    //     text = ''
    //   }
    //   return text
    // },
    focus () {
      // console.log('focus on h-inputfield')
      this.focused = true
      if (this.selectSingle || this.multiSelect) {
        this.magic_flag = true
      }
      this.inputContainerColor = 'bg-white'
      this.inputContainerTextColor = 'text-black'
    },
    blur () {
      // console.log('blur on h-inputfield')
      this.focused = false
      this.inputContainerColor = this.bgcolor
      this.inputContainerTextColor = this.textcolor
    },
    onKeyDown () {
      this.$emit('onKeyDown')
    },
    onTab () {
      this.$emit('onTab')
    },
    onEnter () {
      // console.log('enter key h-input')
      this.$emit('onEnter')
    },
    onEscape () {
      this.$emit('onEscape')
    },
    onArrowDown () {
      if (this.search) {
        this.magic_flag = true
      }
    },
    onClick () {
      this.$emit('onClick')
    },
    away () {
      // this.value = 'You clicked away...'
      this.magic_flag = false
    },
    onSelectItem (option) {
      if (!this.multiSelect) {
        // console.log('on selectItem:', option.text)
        this.inputDisplay = option.text
        this.$emit('input', option.value)
        this.away()
      } else {
        this.$emit('input', this.multiselectItem)
        this.$emit('changeMultiselect', this.multiselectItem)
      }
    }
  }
}
</script>

<style scoped>
</style>
