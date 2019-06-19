<template lang="pug">
  .flex.flex-column
    div
      h-fa-icon(icon="far fa-calendar-alt" @click="panelType = 'date', showDateTime = true")

    h-modal(v-model="showDateTime")
      .flex.flex.column
        date-panel(
          v-if="panelType === 'date'"
          show-time
          :week_days="week_days"
          :months="months"
          :date="currentDateTime",
          :pickerMode="false"
          @ok="ok"
          @dateChanged="dateChanged"
          @cancel="hidePanel"
          @onShowTime="panelType = 'time'"
        )
        time-panel(
          v-if="panelType === 'time'"
          :date="currentDateTime"
          @ok="setTime"
          @cancel="panelType = 'date'"
          :pickerMode="false"
        )
</template>

<script>

import datePanel from './DatePanel'
import timePanel from './TimePanel'
import { mixin as clickaway } from 'vue-clickaway'
import moment from 'moment'

export default {
  name: 'DateTimeDialog',
  mixins: [ clickaway ],
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: Date,
      default: new Date()
    },
    displayFormat: {
      type: String,
      default: 'L LT'
    },
    locale: {
      type: String,
      default: 'en'
    }
  },
  components: {
    datePanel,
    timePanel
  },
  data () {
    return {
      showDateTime: false,
      showDatePicker: false,
      currentDateTime: new Date(),
      panelType: 'date',
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
    // console.log('mounted: ' + this.value)
    this.currentDateTime = this.value
    this.setInputDate(this.currentDateTime)
  },
  watch: {
    value: function (value) {
      // console.log('watched: ' + this.value)
      this.currentDateTime = value
      this.updateData(this.currentDateTime)
    },
    locale: function (locale) {
      this.ok(this.value)
    },
    displayFormat: function (format) {
      this.ok(this.value)
    }
  },
  methods: {
    dateChanged (date) {
      // console.log('dateChanged: ' + date)
      this.currentDateTime = date
      // console.log('DateTime: ' + this.currentDateTime)
    },
    updateData (date) {
      this.setInputDate(date)
      this.hidePanel()
    },
    ok (date) {
      this.updateData(date)
      this.$emit('input', date)
      this.currentDateTime = new Date()
      this.showDateTime = false
      this.panelType = 'date'
    },
    openPanelDate () {
      this.currentDateTime = this.value
      this.showDatePicker = !this.showDatePicker
      this.panelType = 'date'
    },
    hidePanel () {
      this.showDatePicker = false
      this.panelType = ''
    },
    setInputDate (date) {
      moment.locale(this.locale)
      this.inputValue = moment(date).format(this.displayFormat)
    },
    setTime (time) {
      let year = this.currentDateTime.getFullYear()
      let month = this.currentDateTime.getMonth()
      let day = this.currentDateTime.getDate()

      let hour = time.getHours()
      let min = time.getMinutes()

      this.currentDateTime = new Date(year, month, day, hour, min, 0, 0)
      this.panelType = 'date'
    }
  }
}
</script>

<style scoped>

</style>
