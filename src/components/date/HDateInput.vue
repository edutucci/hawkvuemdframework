<template lang="pug">
  div(style="width:350px; position:relative;")
    .flex.flex-column.full-width
      .full-width
        h-input.full-width(
          @click="showDatePicker = !showDatePicker"
          v-model="inputValue"
          :placeholder="placeholder"
          :readonly="true")

      div.position-absolute.boxshadow.full-width(v-if="showDatePicker" style="top:67px;background-color: white;z-index: 2;")
        date-panel(
          :week_days="week_days"
          :months="months"
          :date="value"
          @ok="ok"
          @cancel="hidePanel"
        )

</template>

<script>

import datePanel from './DatePanel'

export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: Date,
      default: new Date()
    }
  },
  components: {
    datePanel
  },
  data () {
    return {
      showDatePicker: false,
      inputValue: ' ',
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
    this.setInputDate(this.value)
  },
  watch: {
    value: function (value) {
      this.ok(value)
    }
  },
  methods: {
    ok (date) {
      this.setInputDate(date)
      this.hidePanel()
      this.$emit('input', date)
    },
    hidePanel () {
      this.showDatePicker = false
    },
    setInputDate (date) {
      this.inputValue = ' ' + date.getDate() + ' de  ' + this.months[date.getMonth()] + ' de  ' + date.getFullYear()
    }

  }
}
</script>

<style scoped>

</style>
