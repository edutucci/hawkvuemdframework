<template lang="pug">
  .dropdown
    .flex(
      v-on-clickaway="away"
      style="border-radius: 2px;"
    )
      h-input.full-width(
        ref="hawkSearch"
        v-model="inputDisplayMask"
        :readonly="readonly"
        :cleartext="cleartext"
        :left-icon="icon"
        :float-label="floatLabel"
        :static-label="staticLabel"
        :placeholder="placeholder"
        :helper-text="helperText"
        :error-label="errorLabel"
        :outlined="outlined"
        @onKeyDown="onKeyDown"
        @onTab="onTab"
        @onEnter="onEnter"
        @onEscape="away()"
      )

    .dropdown-menu.boxshadow.border-corner-rounded.full-width(
      v-show="showdropdown"
      :style="{left: left, right: right, bottom: bottom}"
    )
      .flex.flex-items-center.menu-item.bg-white.item-padding(
        v-for="(option, index) in options"
        :key="index"
      )
        .icon-left
          h-fa-icon(v-if="option.icon && option.icon.length" :icon="option.icon" size="2x" style="color: gray")
          h-avatar(v-else-if="option.avatar && option.avatar.length > 0" :src="option.avatar")
          img(v-else-if="option.img && option.img.length > 0" :src="option.img" style="width:32px; height:32px;")
        .flex-1.flex-column.overflow-hidden
          .title
            strong {{option.text}}
          .subtitle.flex.flex-wrap
            strong {{option.desc}}

</template>

<script>

import inputBase from './inputBase'
import { debounce } from 'lodash'
import { mixin as clickaway } from 'vue-clickaway'
import maskCore from './maskCore.js'

export default {
  extends: inputBase,
  mixins: [ clickaway ],
  props: {
    value: {
      type: String
    },
    options: {
      type: Array,
      default: () => ([])
    },
    icon: {
      type: String,
      default: 'fas fa-search'
    },
    dtu: {
      type: Boolean,
      default: false
    },
    mask: {
      type: String,
      default: ''
    },
    masked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showdropdown: false,
      left: '0px',
      right: '',
      bottom: '',
      inputDisplayMask: '',
      delay: 2000,
      maskObj: {
        rawValue: '',
        maskedValue: ''
      }
    }
  },
  created () {
    // this.onChange()
    // this.onInputBlur()
    this.changeDtu()
  },
  watch: {
    value: function (newValue) {
      this.inputDisplayMask = this.maskObj.maskedValue
    },
    inputDisplayMask: function (newValue) {
      this.onChangeMask(newValue)
    },
    masked: function (newValue) {
      this.changeInputText(this.maskObj)
    },
    dtu: function (value) {
      this.changeDtu()
    }
  },
  methods: {
    async onChangeMask (value) {
      // console.log('value vale: ' + value)
      // console.log('maskObj.maskedValue vale: ' + this.maskObj.maskedValue)
      if (value !== this.maskObj.maskedValue) {
        console.log('processing search mask')
        // let myInput = document.getElementById('my-input-mask').getElementsByTagName('input')[0]
        let maskObj = await maskCore.createMask(this.mask, value)
        this.changeInputText(maskObj)
      }

      if (value.length > this.maskObj.maskedValue.length) {
        // console.log('value > q mask: ')
        this.inputDisplayMask = this.maskObj.maskedValue
      }
    },
    changeInputText (maskObj) {
      this.maskObj.rawValue = maskObj.rawValue
      this.maskObj.maskedValue = maskObj.maskedValue

      // this.setCursorPos(this.inputDisplayMask, myInput)
      let modelValue = (!this.masked) ? maskObj.rawValue : maskObj.maskedValue
      this.$emit('input', modelValue)
      this.searchQuery(modelValue)
    },
    setCursorPos (mask, input) {
      let cursorPos = mask.indexOf('_')
      this.$nextTick(() => {
        this.setCaretPosition(input, cursorPos)
      })
    },
    setCaretPosition (ctrl, pos) {
      if (ctrl) {
        ctrl.focus()
        ctrl.setSelectionRange(pos, pos)
      }
    },
    changeDtu () {
      this.bottom = ''
      if (this.dtu) {
        this.bottom = '0px'
      }
    },
    searchQuery: debounce(function (query) {
      if (query && query.length > 0) {
        this.showdropdown = true
        this.$emit('search', query)
      }
    }, 500),
    away () {
      if (this.showdropdown) {
        this.showdropdown = false
      }
    },
    onKeyDown () {
      this.showdropdown = true
      this.$emit('onKeyDown')
    },
    onTab () {
      this.$emit('onTab')
    },
    onEnter () {
      this.$emit('onEnter')
    },
    focus () {
      this.$refs.hawkSearch.focus()
    }
  }
}
</script>
