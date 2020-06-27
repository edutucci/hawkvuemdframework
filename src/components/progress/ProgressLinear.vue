/* eslint-disable vue/no-async-in-computed-properties */
<template lang="pug">
  .progress-bar-container(style="position: relative;")
    .progress-bar.h-pos-rel(
      :class="[compBgColor, { 'stripes': stripes, 'animated': stripesAnimated, 'reverse': stripesReverse, 'slower': reverseSlower }]"
      :style="[pgStyleObj]"
    )
      span.progress-bar-inner(
        :class="[compProgressBarColor, plValue, { 'animated': animated }]"
        :style="[pbInnerStyleObj]"
      )
      .full-width.bg-transparent.h-pos-abs-tl(style="z-index: 100;" :style="[pgStyleObj]")
        .row.full-height.justify-center.align-items-center
          .col-auto
            slot(name="text")
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
    },
    height: {
      type: String,
      default: '20px'
    }
  },
  data () {
    return {
      pgStyleObj: {
        height: '0px'
      },
      pbInnerStyleObj: {
        height: '0px',
        width: '0%'
      },
      time: 0
    }
  },
  computed: {
    plValue () {
      return 'p' + this.progressDisplayValue
    },
    pTextValue () {
      return '' + this.progressDisplayValue + '%' + ' - ' + this.time
    }
  },
  watch: {
    'value': function (value) {
      this.progressDisplayValue = value
      this.setProgressBarWidth(value)
    },
    bgColor: function (value) {
      this.setBackgroundColor(value)
    },
    progressBarColor: function (value) {
      this.setProgressBarColor(value)
    },
    height: function (value) {
      this.setProgressBarHeight(value)
    }
  },
  mounted () {
    this.setBackgroundColor('bg-gray')
    this.setProgressBarColor(this.progressBarColor)
    this.progressDisplayValue = this.value
    this.setProgressBarWidth(this.value)
    this.setProgressBarHeight(this.height)
  },
  methods: {
    setBackgroundColor (value) {
      this.compBgColor = value
    },
    setProgressBarColor (value) {
      this.compProgressBarColor =  'bg-' + value
    },
    setProgressBarHeight (value) {
      this.pgStyleObj.height =  value
      this.pbInnerStyleObj.height = value
    },
    setProgressBarWidth (value) {
      this.pbInnerStyleObj.width = '0%'
      if (!this.animated) {
        this.pbInnerStyleObj.width = '' + value + '%'
      }
    }
  }
}
</script>