<template lang="pug">
  .row.progress-bar-container.bg-yellow400.full-height.align-items-center(style="position: relative; height: 50px;")
    //- .progress-bar(
    //-   :class="[compBgColor, { 'stripes': stripes, 'animated': stripesAnimated, 'reverse': stripesReverse, 'slower': reverseSlower }]"
    //- )
    //-   span.progress-bar-inner(:class="[compProgressBarColor, plValue, { 'animated': animated }]")
    .text-body2.bg-pink500.text-center.h-pos-abs(style="z-index: 10;")
      | {{progressDisplayValue}}

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
      this.setBackgroundColor(value)
    },
    progressBarColor: function (value) {
      this.setProgressBarColor(value)
    }
  },
  mounted () {
    this.setBackgroundColor('bg-gray')
    this.setProgressBarColor(this.progressBarColor)
    this.progressDisplayValue = this.value
  },
  methods: {
    setBackgroundColor (value) {
      this.compBgColor = value
    },
    setProgressBarColor (value) {
      this.compProgressBarColor =  'bg-' + value
    }
  }
}
</script>