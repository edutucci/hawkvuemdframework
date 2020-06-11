<template lang="pug">
  .progress-bar-container(style="display: inline-block")
    .progress-bar(
      :class="[compBgColor, { 'stripes': stripes, 'animated': stripesAnimated, 'reverse': stripesReverse, 'slower': reverseSlower }]"
    )
      span.progress-bar-inner(:class="[compProgressBarColor, plValue, { 'animated': animated }]")
</template>

<script>

import progressProperties from './ProgressProperties'

export default {
  extends: progressProperties,
  name: 'ProgressLinear',
  props: {
    stripes: {
      type: Boolean,
      default: false
    },
    stripesReverse: {
      type: Boolean,
      default: false
    },
    stripesAnimated: {
      type: Boolean,
      default: false
    },
    reverseSlower: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    plValue () {
      return 'p' + this.progressDisplayValue
    }
  },
  watch: {
    'value': function (value) {
      this.progressDisplayValue = value
    },
    bgColor: function (value) {
      this.compBgColor = value
    },
    progressBarColor: function (value) {
      this.compProgressBarColor = value
    }
  },
  mounted () {
    this.compBgColor = 'bg-gray'
    this.compProgressBarColor = this.progressBarColor
    this.progressDisplayValue = this.value
  }
}
</script>