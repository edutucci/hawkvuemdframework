<template lang="pug">
  .c100(:class="[plValue, { 'animated': animated }]" :style="[{fontSize: fontSize}]")
    .circle(:class="[bgColor]")
    span(:class="[textColor]") {{progressDisplayValue}}%
    .slice
      .bar(:class="[compProgressBarColor]")
      .fill(:class="[compProgressBarColor]")
</template>

<script>
import progressProperties from './ProgressProperties'

export default {
  extends: progressProperties,
  name: 'ProgressCircular',
  props: {
    fontSize: {
      type: String,
      default: () => { return '50px' }
    }
  },
  data () {
    return {}
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
    progressBarColor: function (value) {
      this.setProgressBarColor(value)
    }
  },
  mounted () {
    this.setProgressBarColor(this.progressBarColor)
    this.progressDisplayValue = this.value
  },
  methods: {
    setProgressBarColor (value) {
      this.compProgressBarColor =  'border-' + value
    }
  }
}
</script>