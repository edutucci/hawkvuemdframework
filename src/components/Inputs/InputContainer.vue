<template lang="pug">
  .main-input-container(
    :class="[bgColor]"
  )
    .column
      .col
        .row
          .col-auto(v-if="leadingIcon && leadingIcon.length > 0")
            .row.justify-center.align-items-center.full-height
              .col-auto.h-mr-sm
                h-fa-icon(:icon="leadingIcon" text-color="text-gray600")
          .col(
            class=""
            :class="[\
              { 'border border-primary border-radius': !filled, \
              'bg-gray border-bottom border-top-radius': filled, 'border-2': filled, \
              'border-primary': focused, 'border-gray600': !focused }]"
          )
            .column.full-height(
              class="input-container"
              :class="[{ 'dense': dense, 'outlined': !filled, 'filled': filled }]"
            )
              .col-auto(
                v-if="label && label.length > 0"
                class=""
                :class="[{'text-black': !focused, 'text-primary': focused }]"
              )
                .text-caption.text-bold.h-ml-xs.h-pl-xs.h-pr-xs.bg-white(:class="[{ 'input-label-outlined': !filled }]")
                  | {{label}}
              .col.full-height
                .row.align-items-center.full-height
                  .col.h-ml-sm.h-mr-sm(
                    :class="{ 'h-mt-xs': !filled }"
                  )
                    slot

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
            .row.text-caption.error-message(
              v-if="errorMessage"
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
    }
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>

<style scoped>

</style>
