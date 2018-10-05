<template lang="pug">
  .textfield-container.flex
    .flex.h-pt-sm
      h-fa-icon.h-icon(
        v-if="leftIcon && leftIcon.length"
        textcolor="text-gray"
        :icon="leftIcon"
      )

    .flex.flex-column.full-width
      .full-width.input-container(
        :class="{primary: primary, nofocus: nofocus}"
      )
        .static-label(
          v-if="showStaticLabel"
          :class="{primary: primary, nofocus: nofocus}"
          :style="[staticLabelStyle]"
          style="height: 15px;"
        )
          div.h-pl-sm(v-if="staticLabel")
            | {{staticLabel}}
        .flex.flex-wrap
          div.h-pb-xs
            h-chips.h-mr-xs(
              v-for="(chip, index) in value"
              :key="index"
              :text="chip"
              textcolor="text-white"
              bgcolor="bg-primary"
              closable
              @onClose="closeChip(index)"
            )
          .flex-1.h-pl-sm
            .flex
              .flex-1
                input(
                  v-focus="focused"
                  class="h-input"
                  v-model.trim="txtValue"
                  type="text"
                  :readonly="readonly"
                  :placeholder="placeholder"
                  @focus="onInputFocus()"
                  @blur="onInputBlur()"
                  @keydown.tab="onTab"
                  @keyup.enter="onEnter"
                  @keyup.delete="onDelete"
                  @click="onClick"
                )
                label(
                  v-if="floatLabel"
                  class="control-label"
                  :class="{primary: primary, nofocus: nofocus}"
                  :style="[floatLabelStyle]"
                )
                  | {{floatLabel}}
              div.h-pl-sm
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
            // .flex(
            //   v-if="textCounter"
            // )
            //   | {{inputCounter}}
        .flex.flex-column
          .flex.full-with.error-label(
            v-if="errorLabel"
          )
            | {{errorLabel}}
</template>

<script>

import { mixin as focusMixin } from 'vue-focus'
import _ from 'lodash'

export default {
  mixins: [focusMixin],
  props: {
    value: {
      type: Array,
      default: () => ([])
    },
    floatLabel: {
      type: String
    },
    staticLabel: {
      type: String
    },
    errorLabel: {
      type: String
    },
    helperText: {
      type: String
    },
    // textCounter: {
    //   type: Number,
    //   default: 0
    // },
    showStaticLabel: {
      type: Boolean,
      default: true
    },
    leftIcon: {
      type: String,
      default: ''
    },
    // outlined: {
    //   type: Boolean,
    //   default: false
    // },
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
      primary: false,
      nofocus: true,
      chipsValue: [],
      txtValue: '',
      staticLabelStyle: {
        fontSize: '12px'
      },
      floatLabelStyle: {
        position: 'absolute',
        top: '2px',
        left: '9px',
        fontSize: '12px',
        zIndex: '-1'
      }
    }
  },
  mounted () {
    this.onChange(this.value)
    this.onInputBlur()
  },
  watch: {
    value: function (value) {
      this.chipsValue = _.clone(this.value)
      this.changeFloatLabelStyle()
    },
    floatLabel: function (value) {
      this.chipsValue = _.clone(this.value)
      this.changeFloatLabelStyle()
    },
    placeholder: function (value) {
      this.chipsValue = _.clone(this.value)
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
      this.txtValue = ''
      this.changeFloatLabelStyle()
    },
    changeFloatLabelStyle () {
      if (this.floatLabel && (!this.chipsValue || this.chipsValue.length > 0 || this.placeholder)) {
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
      let arrValue = []
      if (value !== undefined && value.length) {
        arrValue = value
      }
      this.txtValue = ''
      this.$emit('input', arrValue)
      this.$emit('change', arrValue)
    },
    onClick () {
      this.focused = true
    },
    onInputIconClick () {
      if (this.cleartext) {
        this.onChange([])
        this.onInputFocus()
      }
    },
    onTab () {
      this.$emit('onTab')
    },
    onEnter () {
      if (this.txtValue.length) {
        if (this.value.length === 0) {
          this.chipsValue = []
          this.chipsValue.push(this.txtValue)
        } else {
          this.chipsValue = _.clone(this.value)
          this.chipsValue.push(this.txtValue)
        }
        this.onChange(this.chipsValue)
      }
    },
    onDelete () {
      if (this.txtValue.length === 0 && this.value && this.value.length) {
        this.closeChip(this.value.length - 1)
      }
    },
    focus () {
      this.focused = true
    },
    closeChip (index) {
      this.chipsValue = _.clone(this.value)
      this.$emit('onDelete', this.chipsValue[index])
      this.$delete(this.chipsValue, index)
      this.$emit('input', this.chipsValue)
    }
  }
}
</script>

<style scoped>
.textfield-container {
  position:relative;
  padding: 8px;
}

.input-container {
  position:relative;
  padding-top: 2px;
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
