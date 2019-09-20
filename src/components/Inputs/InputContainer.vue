<template lang="pug">
  .main-input-container(
    :class="[bgColor, { 'h-pt-xs': !filled }]"
  )
    .column
      .col
        .row
          .col-auto(v-if="leadingIcon && leadingIcon.length > 0")
            .row.justify-center.align-items-center.full-height
              .col-auto.h-ml-sm.h-mr-sm
                h-fa-icon(:icon="leadingIcon" text-color="text-gray600")
          .col.position-relative(
            :class="[{ 'h-mt-xs': !filled }]"
          )
            .row
              .col(
                :class="[borderColor, \
                  {'border border-radius': !filled, \
                  'border-bottom border-top-radius': filled, 'border-2': filled, \
                  }]"
              )
                .column.full-height(
                  class="input-container"
                  :class="[{ 'dense': dense, 'outlined': !filled, 'filled': filled }]"
                )
                  .col-auto(
                    v-if="label && label.length > 0"
                    class="text-black"
                    :class="[{ }]"
                  )
                    .text-caption.text-bold.h-pl-xs.h-pr-xs(:class="[bgColor, { 'input-label-outlined': !filled }]")
                      | {{label}}
                  .col.full-height
                    .row.align-items-center.full-height
                      .col.h-mr-sm(
                        :class="{ 'h-mt-xs': !filled }"
                      )
                        slot
          .col-auto
            .row.justify-center.align-items-center.full-height
              .col-auto.input-icons-padding(v-if="errorMessage && errorMessage.length > 0")
                h-fa-icon(
                  text-color="text-red600"
                  icon="fas fa-exclamation-circle"
                  @click="onClearable"
                )
              .col-auto.input-icons-padding(v-if="clearable")
                h-fa-icon(
                  text-color="text-gray600"
                  icon="fas fa-times-circle"
                  @click="onClearable"
                )
              .col-auto.input-icons-padding(v-if="inputType === 'password'")
                h-fa-icon(
                  text-color="text-gray600"
                  icon="fas fa-eye"
                  @click="togglePassword"
                )
              .col-auto.input-icons-padding(v-if="trailingIcon && trailingIcon.length > 0")
                  h-fa-icon(
                    :icon="trailingIcon"
                    text-color="text-gray600"
                  )
              .col-auto.input-icons-padding(v-if="inputDropdown")
                h-fa-icon(
                  text-color="text-primary"
                  icon="fas fa-caret-down"
                )
      .col
        .column.h-mt-xs(
          :class="[\
           { 'input-message-padding-no-icon': leadingIcon || leadingIcon.length === 0, \
             'input-message-padding-icon': leadingIcon && leadingIcon.length > 0 } ]"
        )
          .col
            .row.helper-text
              .col-auto.text-caption(
                v-if="(helperText && helperText.length > 0 && (!errorMessage || (errorMessage && errorMessage.length === 0)))"
              )
                | {{helperText}}
              .col-space.text-right(
                v-if="inputCounter"
              )
                | {{inputTextCounter}}
          .col
            .row.text-caption.text-red800(
              v-if="errorMessage && errorMessage.length > 0"
            )
              | {{errorMessage}}
</template>

<script>

import InputProperties from './InputProperties'

export default {
  extends: InputProperties,
  name: 'InputContainer',
  props: {
    focused: {
      type: Boolean,
      default: false
    },
    inputTextCounter: {
      type: String,
      default: ''
    },
    inputDropdown: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    onClearable () {
      this.$emit('onClearable')
    }
  }
}
</script>

<style scoped>

</style>
