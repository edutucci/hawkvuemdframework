<template>
  <dir></dir>
</template>

<script>
export default {
  name: 'HInputBase',
  props: {
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
  }
}
</script>
