<template lang="pug">
  div(style="width:350px; position:relative;")
    date-panel(
      :week_days="week_days"
      :months="months"
      :date="value"
      @ok="ok"
    )

</template>

<script>

import DatePanel from './DatePanel'

export default {
  props: {
    value: {
      type: Date,
      value: ' '
    }
  },
  components: {
    DatePanel
  },
  data () {
    return {
      week_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    }
  },
  mounted () {
  },
  methods: {
    ok (date) {
      this.$emit('input ', this.currentDate)
    }
  }
}
</script>

<style scoped>

</style>
