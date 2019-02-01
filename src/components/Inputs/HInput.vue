<template lang="pug">
  .textfield-container.flex
    .flex.h-pt-sm
      h-fa-icon.h-icon(
        v-if="leftIcon && leftIcon.length"
        textcolor="text-gray"
        :icon="leftIcon"
        size="18px"
      )
    .flex.flex-column.full-width
      .full-width.input-container(
        :class="{primary: primary, nofocus: nofocus, outline: outlined}"
      )
        div.static-label(
          :class="{primary: primary, nofocus: nofocus}"
          :style="[staticLabelStyle]"
          style="height: 15px;"
        )
          div.h-pl-sm(v-if="staticLabel && staticLabel.length")
            | {{staticLabel}}
        .flex-1
          .flex.full-width
            .flex-1
              input(
                v-focus="focused"
                class="h-input"
                :class="{ 'text-center': textCenter }"
                v-model="inputDisplay"
                :type="inputtype"
                :readonly="readonly"
                :float-label="floatLabel"
                :static-label="staticLabel"
                :placeholder="placeholder"
                :maxlength="maxlength"
                @focus="onInputFocus()"
                @blur="onInputBlur()"
                @input="onChange($event.target.value)"
                @keydown.down="onKeyDown"
                @keydown.tab="onTab"
                @keyup.enter="onEnter"
                @click="onClick"
              )
              label(
                class="control-label"
                :class="{primary: primary, nofocus: nofocus}"
                :style="[floatLabelStyle]"
              )
                | {{floatLabel}}
            div.h-pr-sm.h-pl-sm(
              v-if="type === 'password' || type === 'dropdown' || cleartext"
            )
              h-fa-icon(
                v-if="type === 'password'"
                textcolor="text-gray"
                icon="fas fa-eye"
                @click="onInputIconClick"
              )
              h-fa-icon(
                v-else-if="type === 'dropdown'"
                textcolor="text-gray"
                icon="fas fa-angle-down"
                @click="onInputIconClick"
              )
              h-fa-icon(
                v-if="cleartext"
                textcolor="text-gray"
                icon="fas fa-times-circle"
                @click="onInputIconClick"
              )
      .full-width
        .flex.flex-column
          .flex.full-width.helper-text
            .flex-1(
              v-if="helperText"
            )
              | {{helperText}}
            .flex(
              v-if="textCounter"
            )
              | {{inputCounter}}
        .flex.flex-column
          .flex.full-with.error-label(
            v-if="errorLabel"
          )
            | {{errorLabel}}

</template>

<script>
import { mixin as focusMixin } from 'vue-focus'

export default {
  mixins: [focusMixin],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    floatLabel: {
      type: String,
      default: ''
    },
    staticLabel: {
      type: String,
      default: ''
    },
    errorLabel: {
      type: String
    },
    helperText: {
      type: String
    },
    textCounter: {
      type: Number,
      default: 0
    },
    textCenter: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 9999
    },
    outlined: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    cleartext: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      focused: false,
      inputtype: 'text',
      primary: false,
      nofocus: true,
      staticLabelStyle: {
        fontSize: '12px'
      },
      floatLabelStyle: {
        position: 'absolute',
        top: '2px',
        left: '9px',
        fontSize: '12px',
        zIndex: '-1'
      },
      inputDisplay: ''
    }
  },
  mounted () {
    this.inputtype = this.type
    this.onChange(this.value)
    this.onInputBlur()
  },
  watch: {
    inputDisplay: function (newValue) {
      this.$emit('input', newValue)
    },
    value: function (value) {
      this.inputDisplay = value
      this.changeFloatLabelStyle()
    },
    placeholder: function (value) {
      this.changeFloatLabelStyle()
    },
    floatLabel: function (value) {
      this.changeFloatLabelStyle()
    }
  },
  computed: {
    inputCounter () {
      let valueLength = (this.value) ? this.value.length : 0
      return '' + valueLength + ' / ' + this.textCounter
    }
  },
  methods: {
    inputMaxlength (value) {
      let text = value
      if (value) {
        text = value.substr(0, this.maxlength)
      }
      if (text === undefined) {
        text = ''
      }
      return text
    },
    onInputFocus () {
      this.focused = true
      this.floatLabelStyle.top = '2px'
      this.floatLabelStyle.left = '9px'
      this.floatLabelStyle.fontSize = '12px'

      this.primary = true
      this.nofocus = false

      this.$emit('focus')
    },
    onInputBlur () {
      this.focused = false
      this.primary = false
      this.nofocus = true
      this.changeFloatLabelStyle()
      this.$emit('blur')
    },
    changeFloatLabelStyle () {
      if (this.floatLabel && (this.value || this.placeholder)) {
        this.floatLabelStyle.top = '2px'
        this.floatLabelStyle.left = '9px'
        this.floatLabelStyle.fontSize = '12px'
      } else {
        this.floatLabelStyle.top = '20px'
        this.floatLabelStyle.left = '9px'
        this.floatLabelStyle.fontSize = '16px'
      }
    },
    onChange (value) {
      let txtValue = ''
      if (value === undefined && this.value) {
        txtValue = this.value
      } else {
        txtValue = value
      }
      this.$emit('change', txtValue)
    },
    onClick () {
      this.focused = true
      this.$emit('click')
    },
    onInputIconClick () {
      if (this.type === 'password') {
        this.inputtype = (this.inputtype === 'password') ? 'text' : 'password'
      } else if (this.cleartext) {
        this.inputDisplay = ''
        this.onInputFocus()
      }
    },
    onKeyDown () {
      this.$emit('onKeyDown')
    },
    onTab () {
      this.$emit('onTab')
    },
    onEnter () {
      this.$emit('onEnter')
    },
    focus () {
      this.focused = true
    }
  }
}
</script>

<style scoped>
.textfield-container {
  position:relative;
  padding-top: 4px;
  padding-bottom: 4px;
}

.input-container {
  position:relative;
  padding-top: 0px;
  padding-bottom:2px;
}

.input-container.outline {
  border-color: gray;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
}

.h-input {
  font-size:18px;
  top: 30px;
  width:100%;
  border-style:none;
  outline: none;
  z-index:0;
  padding-top: 2px;
  background:none;
}

.h-icon {
  padding: 8px;
}

</style>
