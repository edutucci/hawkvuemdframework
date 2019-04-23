<template lang="pug">
  .textfield-container.flex(
    :class="{ rounded: rounded }"
  )
    .flex.h-pt-sm
      h-fa-icon.h-icon(
        v-if="leftIcon && leftIcon.length"
        textcolor="text-gray"
        :icon="leftIcon"
        size="18px"
      )
    .flex.flex-column.full-width
      .full-width.input-container(
        :class="{primary: primary, nofocus: nofocus, outlined: outlined, filled: filled, rounded: rounded, noborder: noborder}"
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
            .flex-1.h-pl-sm
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
                @keyup.esc="onEscape"
                @click="onClick"
              )
              label(
                class="control-label"
                :class="{primary: primary, nofocus: nofocus}"
                :style="[floatLabelStyle]"
              )
                | {{floatLabel}}
            div.h-pr-sm.h-pl-sm(
              v-if="type === 'password' || cleartext"
            )
              h-fa-icon(
                v-if="type === 'password'"
                textcolor="text-gray"
                icon="fas fa-eye"
                @click="onInputIconClick"
              )
              h-fa-icon(
                v-if="cleartext"
                textcolor="text-gray"
                icon="fas fa-times-circle"
                @click="onInputIconClick"
              )
            div.h-pr-sm
              h-fa-icon(
                textcolor="text-gray"
                :icon="rightIcon"
                @click="onInputRightIconClick"
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
import inputBase from './inputBase'

export default {
  extends: inputBase,
  mixins: [focusMixin],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    noborder: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      focused: false,
      inputtype: 'text'
    }
  },
  mounted () {
    this.inputtype = this.type
    this.onChange(this.value)
    this.onInputBlur()
  },
  watch: {
    inputDisplay: function (newValue) {
      // console.log('inputDisplay change in input:', newValue)
      this.$emit('input', newValue)
    },
    value: function (value) {
      // console.log('value change in input:', value)
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
    onKeyDown () {
      this.$emit('onKeyDown')
    },
    onTab () {
      this.$emit('onTab')
    },
    onEnter () {
      this.$emit('onEnter')
    },
    onEscape () {
      this.$emit('onEscape')
    },
    focus () {
      this.focused = true
    }
  }
}
</script>

<style scoped>
/* @import '../../css/variables.styl' */

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

.input-container.outlined {
  border-color: gray;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
}

.input-container.outlined.rounded {
  border-color: gray;
  border-style: solid;
  border-width: 1px;
  border-radius: 50px;
}

.input-container.filled {
  background-color: #F5F5F5;
  border-radius: 5px;
}

.input-container.filled.rounded {
  background-color: #F5F5F5;
  border-radius: 50px;
}

input[type="text"] {
  font-size:18px;
  font-weight: bold;
}

.h-input {
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
